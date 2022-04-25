<?php

namespace Lib;

use JsonException;
use RuntimeException;

class Response
{
    /** @var int statu code http */
    private int $code;
    /** @var array|object|string|null */
    private $data;
    /** @var string[] */
    private array $header;

    /**
     * @param int $code
     * @param null|string|array|object $data
     * @param array<string,string> $header
     */
    public function __construct(int $code, $data = null, array $header = [])
    {
        $this->code = $code;
        $this->setHeaders($header);
        $this->setData($data);
    }

    /**
     * @param int $code
     * @return $this
     */
    public function setCode(int $code): Response
    {
        $this->code = $code;
        return $this;
    }

    /**
     * @param array|object|string|null $data
     * @return $this
     */
    public function setData($data = null): self
    {
        if ($data === null) {
            $this->data = null;
            return $this;
        }
        switch (gettype($data)) {
            case "string":
                $this->data = $data;
                $this->setHeader('content-type', 'text/plain');
                break;
            case 'array':
            case 'object':
                try {
                    $this->data = json_encode($data, JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT);
                    $this->addHeaders(['content-type' => 'application/json']);
                } catch (JsonException $e) {
                    $this->data = "impossible d'encoder la data de la réponse";
                    $this->setHeader('content-type', 'text/plain');
                }
                break;
        }
        return $this;
    }

    /**
     * @param string[] $header
     * @return $this
     */
    public function setHeaders(array $header): self
    {
        $this->header = $header;
        return $this;
    }

    /**
     * @param string $name
     * @param string $value
     * @return $this
     */
    public function setHeader(string $name, string $value): self
    {
        $this->header[$name] = $value;
        return $this;
    }

    /**
     * @param string[] $header
     * @return $this
     */
    public function addHeaders(array $header): self
    {
        $this->header = array_merge($this->header, $header);
        return $this;
    }

    /**
     * @echo
     * @return void
     */
    public function render(): void
    {
        if (headers_sent($filename, $line)) {
            throw new RuntimeException("Une entête a déjà été envoyé ($filename:$line)");
        }
        http_response_code($this->code);
        foreach ($this->header as $headerName => $headerValue) {
            header("$headerName: $headerValue", true);
        }
        echo $this->data;
    }
}