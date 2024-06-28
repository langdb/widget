import React, { FC } from "react";
import { FloatingChatWidget } from "../FloatingChatwidget";
import { Widget, WidgetProps } from "../Widget";
const FloatingChatWidgetExample: FC<WidgetProps> = ({
  publicId = "ae6c32f0-ef4b-4f7f-86bd-9c1d54b2d865",
  agentName = "cities_chat",
  advancedOptions = {
    displayOptions: {
      themeId: 'langdb',
      colorScheme: 'light',
    }
  },
}) => {
  const theme = advancedOptions.displayOptions?.colorScheme === 'auto' ? 'light' : advancedOptions.displayOptions?.colorScheme || 'light';

  return (
    <div
      className="flex flex-col p-[20px] h-[90vh]"
    >
      <FloatingChatWidget
      theme={theme} 
      title={<span className="font-bold">Floating widget example</span>}>
        <Widget
          publicId={publicId}
          agentName={agentName}
          advancedOptions={advancedOptions}
        />
      </FloatingChatWidget>
    </div>
  );
}

export default FloatingChatWidgetExample;
