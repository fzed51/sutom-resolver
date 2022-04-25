<?php

namespace Lib;

class Validator
{
    /** @var mixed */
    private $data;
    /** @var array<string> errors */
    private array $errors = [];

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function test(): bool
    {
        $this->errors = [];
        if (!is_array($this->data)) {
            $this->addError('data doit être un tableau');
            return false;
        }
        if (!isset($this->data['config'])) {
            $this->addError('il doit y avoir une config dans le tableau');
            return false;
        }
        if (!$this->testConfig($this->data['config'])) {
            $this->addError('la configuration n\'est pas valide');
            return false;
        }

        return count($this->errors) === 0;
    }

    /**
     * @param string $error
     * @return $this
     */
    public function addError(string $error): self
    {
        $this->errors[] = $error;
        return $this;
    }

    /**
     * @param mixed $config
     * @return void
     */
    private function testConfig($config): bool
    {
        if (!is_array($config)) {
            $this->addError('la configuration doit être un tableau');
            return false;
        }
        if (!isset($config['length'])) {
            $this->addError('la configuration doit contenir une longueur');
        } elseif (is_int($config['length']) && ($config['length'] <= 4 || $config['length'] >= 29)) {
            $this->addError('la longueur doit être un entier superieur à 4 et inferieur à 29');
        }
        if (!isset($config['letter'])) {
            $this->addError('la configuration doit contenir une letter');
        } elseif (!is_string($config['letter']) && strlen($config['letter']) !== 1) {
            $this->addError('la longueur doit être une chaine de 1 caractère');
        }
        return count($this->errors) === 0;
    }

    /**
     * @return string[]
     */
    public function getErrors(): array
    {
        return $this->errors;
    }
}