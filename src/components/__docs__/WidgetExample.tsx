import React, { FC } from "react";
import { Widget, WidgetProps } from "../Widget";

const Example: FC<WidgetProps> = ({
  publicId = "ae6c32f0-ef4b-4f7f-86bd-9c1d54b2d865",
  modelName = "cities_info_model",
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
