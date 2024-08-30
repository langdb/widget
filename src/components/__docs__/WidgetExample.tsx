import React, { FC } from "react";
import { Widget, WidgetProps } from "../Widget";

const Example: FC<WidgetProps> = ({
  publicId = "445e863b-83a9-4ec9-8041-aa0514239472",
  modelName = "thu_super_assistant",
  theme = 'light',
  starters = []
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: '100vh',
      }}
    >
      <div className="flex flex-1">
        <Widget
          publicId={publicId}
          modelName={modelName}
          theme={theme}
          starters={starters}
        />
      </div>
    </div>
  );
};

export default Example;
