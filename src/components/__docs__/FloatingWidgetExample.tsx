import React, { FC } from "react";
import { FloatingChatWidget } from "../FloatingChatwidget";
import Widget from "../Widget";
const FloatingChatWidgetExample: FC = () => {
  return (
    <div
      className="flex flex-col p-[20px] h-[90vh]"
    >
      <FloatingChatWidget theme="light">
        <Widget
          style={{ height: "100%" }}
          publicId={'ae6c32f0-ef4b-4f7f-86bd-9c1d54b2d865'}
          agentName={'cities_chat'}
          advancedOptions={{
            displayOptions: {
              themeId: 'langdb',
              colorScheme: 'light',
            }
          }}
        />
      </FloatingChatWidget>
    </div>
  );
};

export default FloatingChatWidgetExample;
