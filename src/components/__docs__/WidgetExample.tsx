import React, { FC } from "react";
import { Widget, WidgetProps } from "../Widget";

const Example: FC<WidgetProps> = ({
  publicId = "ae6c32f0-ef4b-4f7f-86bd-9c1d54b2d865",
  agentName = "cities_chat",
  advancedOptions = {
    displayOptions: {
      themeId: 'langdb',
      colorScheme: 'light',
    }
  },
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <div className="flex flex-1 ">
        <Widget
          publicId={publicId}
          agentName={agentName}
          advancedOptions={advancedOptions}
        />
      </div>
    </div>
  );
};

export default Example;
