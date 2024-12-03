import React, { FC, useEffect } from "react";
import axios from "axios";
import { Widget, WidgetProps } from "../Widget";
import { ChatInput } from "../ChatInput";
import emitter from "../EventEmiter";

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

  const apiKey = 'langdb_N2NXaUZZRW1hLzRWcU9OclJKWlBGazFNMlpJWWR0akNmV1B3elVJc0laZXBOTFlLaXI2L0JEYWFTNTQ2YmxPTWpXbEtZOVhkR0VLZnIzdm5JbXpOUjNqb3ZPK3BFOTRpMDBmWEI5TmlBVEh2WFR6Q2RYa0RaeVVicVBISDZrU3kyZzlXVEZYMUF6Um5UNW5hSk4yYnBrcXYwRmR1WlcvNERWeWhMcTJ0KzVZZ0wzTHlsYlNySFdIWlB1eDUwY0EyQlJ6eHFRPT06QUFBQUFBQUFBQUFBQUFBQQ=='
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
          projectId="419b04bb-4386-4d7e-ab09-02e81ba3a087"
          apiKey={apiKey}
          serverUrl="http://localhost:8083"
          theme={theme}
          starters={starters}
          hideChatInput
        />
        <Widget
          modelName="gpt-4o"
          projectId="419b04bb-4386-4d7e-ab09-02e81ba3a087"
          getAccessToken={getAccessToken}
          serverUrl="http://localhost:8083"
          theme={theme}
          apiKey={apiKey}
          starters={starters}
          hideChatInput
        />
      </div>
      <div className={`${theme} dark-theme`}>
        <div className="langdb-chat bg-inherit sticky bottom-0 pt-1 px-4">
          <ChatInput onSubmit={(text) => {
            emitter.emit('langdb_chatSubmit', { inputText: text });
            return Promise.resolve()
          }}
            currentInput={currentInput}
            setCurrentInput={setCurrentInput} />
        </div>
      </div>
    </div>
  );
};

export default Example;
