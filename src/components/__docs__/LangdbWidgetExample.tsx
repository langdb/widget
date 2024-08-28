import React, { FC } from "react";
import { Widget, WidgetProps } from "../Widget";
import { LangdbWidget } from "../LangdbWidget";

const LangdbWidgetExample: FC<WidgetProps> = ({
  publicId = "445e863b-83a9-4ec9-8041-aa0514239472",
  modelName = "thu_super_assistant",
  advancedOptions = {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: '100vh'
      }}
    >
      <div className="flex flex-1 ">
        <LangdbWidget
          className={"w-full h-full"}
          publicId={publicId}
          modelName={modelName}
          advancedOptions={advancedOptions}
        />
      </div>
    </div>
  );
};

export default LangdbWidgetExample;
