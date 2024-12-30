import React, { FC, useEffect } from "react";
import axios from "axios";
import { Widget, WidgetProps } from "../Widget";
import { ChatInput } from "../ChatInput";
import { emitter } from "../EventEmiter";
import { FileWithPreview } from "../../types";

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

  const apiKey = 'langdb_N1p5cVZvVi9kL1JJOExOeFJKNU1GbHdKbXNNRkxNL1lPemJ3eXhzeGN0K3FPTGxRbi8rN1J6YVhFSVE4ZmdTQjBuUmNQOHlCU1VxRTduam9aM1BHVkhXL3FycTBITXNxa1VhTUdkSXhUanZ0QnpxZklDTmVlVDFPOXZIZTgwRzAyeFZDRWx6MUhIdHBTYzdhS3QvT3B4cisxVFJ1WlcvNERWeWhMcTJ0KzVZZ0wzSjBOY21YQ3pzaDZvQlRQRXFadE1zbzpBQUFBQUFBQUFBQUFBQUFB'
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

  useEffect(() => {
    emitter.on('langdb_aiMessageClicked', ({ threadId, messageId }: { threadId: string | undefined, messageId: string | undefined }) => { console.log( "===== on AI Message Clicked ====", threadId, messageId) });
    
    return () => {
      emitter.off('langdb_aiMessageClicked');
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
          projectId="80b94904-3c2a-405a-9797-3b9a8caf5318"
          apiKey={apiKey}
          serverUrl="http://localhost:8083"
          theme={theme}
          starters={starters}
        />
      </div>
      {/* <div className={`dark-theme  w-full flex justify-center items-center`}>
        <div className="langdb-chat bg-inherit sticky bottom-0 pt-1 px-4 w-[50vw]">
          <ChatInput
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            onSubmit={(inputText, files) => {
              emitter.emit('langdb_chatSubmit', { inputText, files })
              return Promise.resolve();
            }} />
        </div>
      </div> */}
    </div>
  );
};

export default Example;
