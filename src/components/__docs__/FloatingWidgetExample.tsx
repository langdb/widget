import React, { FC } from "react";
import { FloatingChatWidget } from "../FloatingChatwidget";
import { Widget, WidgetProps } from "../Widget";
const FloatingChatWidgetExample: FC<WidgetProps> = ({
  publicId = "e2ceccd1-a76e-4875-83e0-25cefc836b79",
  modelName = "my_super_assistant",
  advancedOptions = {},
}) => {
  const theme =
    advancedOptions.displayOptions?.colorScheme === "auto"
      ? "light"
      : advancedOptions.displayOptions?.colorScheme || "light";

  return (
    <div className="flex flex-col p-[20px] h-[90vh]">
      <FloatingChatWidget
        theme={theme}
        title={<span className="font-bold">Floating widget example</span>}
      >
        <Widget
          className={"w-full"}
          publicId={publicId}
          modelName={modelName}
          advancedOptions={advancedOptions}
        />
      </FloatingChatWidget>
    </div>
  );
};

export default FloatingChatWidgetExample;
