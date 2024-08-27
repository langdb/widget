import React, { FC } from "react";
import { Widget, WidgetProps } from "../Widget";

const Example: FC<WidgetProps> = ({
  publicId = "e2ceccd1-a76e-4875-83e0-25cefc836b79",
  modelName = "my_super_assistant",
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
        <Widget
          className={"w-full h-full"}
          publicId={publicId}
          modelName={modelName}
          advancedOptions={advancedOptions}
        />
      </div>
    </div>
  );
};

export default Example;
