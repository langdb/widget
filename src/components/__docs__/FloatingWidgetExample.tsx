import React, { FC } from "react";
import { FloatingChatWidget } from "../FloatingChatwidget";
import { Widget, WidgetProps } from "../Widget";
const FloatingChatWidgetExample: FC<WidgetProps> = ({
  publicId = "afae116b-ff46-46b4-b2ea-a444c1680552",
  modelName = "cities_info_model",
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
          publicId={publicId}
          modelName={modelName}
          advancedOptions={advancedOptions}
        />
      </FloatingChatWidget>
    </div>
  );
};

export default FloatingChatWidgetExample;
