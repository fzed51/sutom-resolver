import React, { FC, SyntheticEvent, useState } from "react";
import { ConfigApp } from "../../types";
import { InputRange } from "../inputs/range";
import { InputLetter } from "../inputs/letter";
import Primary from "../buttons/primay";

export interface ConfigFormProps {
  onSubmit: (c: ConfigApp) => void;
}

export const ConfigForm: FC<ConfigFormProps> = ({ onSubmit }) => {
  const [config, setConfig] = useState<Partial<ConfigApp>>({});
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (config.letter && config.letter) {
      onSubmit(config as ConfigApp);
    }
    return false;
  };

  const handleChange =
    <K extends keyof ConfigApp = keyof ConfigApp>(offest: K) =>
    (value: ConfigApp[K]) => {
      setConfig((c) => ({ ...c, [offest]: value }));
    };
  return (
    <div className="config-form">
      {error !== "" && <>{error}</>}
      <form onSubmit={handleSubmit}>
        <section>
          <InputRange
            label="Nombre de lettre"
            value={config.length}
            onChange={handleChange("length")}
            min={1}
            max={14}
          />
        </section>
        <section>
          <InputLetter
            label="Première letter"
            value={config.letter}
            onChange={handleChange("letter")}
          />
        </section>
        <section>
          <Primary submitter>Valider</Primary>
        </section>
      </form>
    </div>
  );
};

export default ConfigForm;
