<?php

namespace Lib;

use JsonException;
use RuntimeException;

class Request
{
    private ?array $env;
    private ?string $body;

    /**
     * @param array|null $env
     * @param string|null $body
     */
    public function __construct(?array $env = null, ?string $body = null)
    {
        if ($env === null) {
            $env = $_SERVER;
        }
        if ($body === null) {
            $body = file_get_contents('php://input');
        }
        $this->env = $env;
        array_change_key_case($this->env, CASE_UPPER);
        $this->body = $body;
    }

    /**
     * Méthode de la requete
     * @return string|null
     */
    public function getMethod(): ?string
    {
        return $this->env['REQUEST_METHOD'] ?? null;
    }

    /**
     * Content-Type de la requête
     * @return string|null
     */
    public function getContentType(): ?string
    {
        $contentTypeFull = $this->env['CONTENT-TYPE'] ?? '';
        [$contentType] = array_map('trim', explode(";", $contentTypeFull));
        return $contentType ?? null;
    }

    /**
     * Totalité des headers
     * @return array
     */
    public function getHeaders(): array
    {
        return $this->env;
    }

    /**
     * header en particulier
     * @param string $name
     * @return string|null
     */
    public function getHeader(string $name): ?string
    {
        return $this->env[strtoupper($name)] ?? null;
    }

    /**
     * @return null|string
     */
    public function getBody(): ?string
    {
        return $this->body;
    }

    /**
     * @return mixed
     */
    public function getJson()
    {
        try {
            return json_decode($this->body, true, JSON_THROW_ON_ERROR, JSON_THROW_ON_ERROR);
        } catch (JsonException $e) {
            throw new RuntimeException("le body de la reqête n'est pas unJSON valide", 0, $e);
        }
    }
}