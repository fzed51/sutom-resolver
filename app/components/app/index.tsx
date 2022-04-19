import React, { FC, useState } from "react";
import { ConfigApp } from "../../types";
import ConfigForm from "../config-form";
import "./style.scss";

export const App: FC = () => {
  const [config, setConfig] = useState<ConfigApp | undefined>(undefined);

  return (
    <div className="sutom-resolver">
      <div className="sutom-resolver__container">
        {config === undefined ? (
          <ConfigForm onSubmit={setConfig} />
        ) : (
          <>Main display</>
        )}
      </div>
    </div>
  );
};

export default App;
