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

        if (!isset($this->data['proposals'])) {
            $this->addError('il doit y avoir des propositions dans le tableau');
            return false;
        }
        if (!$this->testPropposals($this->data['proposals'])) {
            $this->addError('les propositions ne sont pas valides');
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
        $currentNbError = count($this->errors);
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
        return count($this->errors) === $currentNbError;
    }

    private function testPropposals($proposals): bool
    {
        $currentNbError = count($this->errors);
        if (!is_array($proposals)) {
            $this->addError('les proposition doivent être un tableau');
            return false;
        }
        foreach ($proposals as $i => $proposal) {
            if (!$this->testProposal($proposal)) {
                $this->addError('La proposition no $i n\'est pas valide');
            }
        }
        return count($this->errors) === $currentNbError;
    }

    private function testProposal($proposal): bool
    {
        $currentNbError = count($this->errors);
        if (!is_array($proposal)) {
            $this->addError('la proposition doit être un tableau');
            return false;
        }
        if (!isset($proposal['word'])) {
            $this->addError('la proposition doit avoir un mot');
        }
        if (!isset($proposal['match'])) {
            $this->addError('la proposition doit avoir un tableau de correspondances');
        }
        return count($this->errors) === $currentNbError;
    }

    /**
     * @return string[]
     */
    public function getErrors(): array
    {
        return $this->errors;
    }
}