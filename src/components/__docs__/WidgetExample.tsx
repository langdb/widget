import React, { FC, useEffect } from "react";
import axios from "axios";
import { Widget, WidgetProps } from "../Widget";
import { ChatInput } from "../ChatInput";
import { emitter } from "../EventEmiter";

export const getAccessToken = async () => {
  try {
    const response = await axios.post('http://localhost:8083/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: '58oc3lpiqs71dqtvme3r30im87',
      client_secret: '1j6ln8i01hrdr12osilaa9re682aafjd3rgbqnm93f7e40h6843j',
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
}

const Example: FC<WidgetProps> = ({
  theme = 'light',
  starters = []
}) => {

  const apiKey = 'langdb_NmNQd0dZZ21jdkJSb2VoeEVjUU1URkFLanRVTktzL0RLelB3elFwa2R0YjBPK3hXbS95a0hTZVhScGt0TEZlQzBYRU9KOUhFVEJDQitDem9aSExNWG1IdXArMjNHTUV3d1VHSkdzbHRGekhvWERmTkpIaFVaaVZJcC9YQjZrVGkxZ2hXRmxLa0JEUThIc3paYzlhZHB4cjZod2R1WlcvNERWeWhMcTJ0KzVZZ0wzTHlSNTkxTnJzRmV4TVUrV1NOSjgzRG9nPT06QUFBQUFBQUFBQUFBQUFBQQ=='
  const [currentInput, setCurrentInput] = React.useState("");
  useEffect(() => {


    emitter.on('langdb_chatSubmitSuccess', () => {
      setCurrentInput('');
    });

    return () => {
      emitter.off('langdb_chatSubmitSuccess', () => {
        setCurrentInput('');

      });
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: '100vh',
      }}
    >
      <div className="flex flex-1">
        <Widget
          modelName="gpt-4o"
          projectId="c6b79821-233f-4b7e-97ff-ea898bacd8ab"
          apiKey={apiKey}
          threadId="7fcfc666-2334-4382-9bb4-7466c2f657b7"
          serverUrl="http://localhost:8083"
          theme={theme}
          starters={starters}
        />
      </div>
    </div>
  );
};

export default Example;
