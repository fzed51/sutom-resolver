import React, { FC, useCallback, useState } from "react";
import { ConfigApp } from "../../types";
import ConfigForm from "../config-form";
import Resolver from "../resolver";
import "./style.scss";

export const App: FC = () => {
  const [config, setConfig] = useState<ConfigApp | undefined>(undefined);
  const handleReset = useCallback(
    () => setConfig((c) => undefined),
    [setConfig]
  );
  return (
    <div className="sutom-resolver">
      <div className="sutom-resolver__container">
        {config === undefined ? (
          <ConfigForm onSubmit={setConfig} />
        ) : (
          <Resolver config={config} onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default App;
