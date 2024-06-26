import React, { FC } from "react";
import Widget, { WidgetProps } from '../Widget';

const Example: FC<WidgetProps> = ({
  publicId = 'ae6c32f0-ef4b-4f7f-86bd-9c1d54b2d865',
  agentName = 'cities_chat',
  advancedOptions = {}
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh', padding: '20px' }}>
      <Widget
        style={{ height: '100%' }}
        publicId={publicId}
        agentName={agentName}
        advancedOptions={advancedOptions} />
    </div>
  );
};

export default Example;