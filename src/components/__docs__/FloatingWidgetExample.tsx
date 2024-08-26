import React, { FC } from "react";
import { FloatingChatWidget } from "../FloatingChatwidget";
import { Widget, WidgetProps } from "../Widget";
const FloatingChatWidgetExample: FC<WidgetProps> = ({
  publicId = "f3f61d93-9128-4811-b575-429fa32d3a83",
  modelName = "thu_super_assistant",
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
