import React, { FC, useEffect } from "react";
import axios from "axios";
import { Widget, WidgetProps } from "../Widget";
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

  // const apiKey = 'langdb_N1p5cVZvVi9kL1JJOExOeFJKNU1GbHdKbXNNRkxNL1lPemJ3eXhzeGN0K3FPTGxRbi8rN1J6YVhFSVE4ZmdTQjBuUmNQOHlCU1VxRTduam9aM1BHVkhXL3FycTBITXNxa1VhTUdkSXhUanZ0QnpxZklDTmVlVDFPOXZIZTgwRzAyeFZDRWx6MUhIdHBTYzdhS3QvT3B4cisxVFJ1WlcvNERWeWhMcTJ0KzVZZ0wzSjBOY21YQ3pzaDZvQlRQRXFadE1zbzpBQUFBQUFBQUFBQUFBQUFB'
  // const apiKey = 'langdb_NWkzYWRmMHJ1ajJiNXRsNWc1ZWlldm1saG4='
  // const projectId = '9c7ac2c8-b76f-453b-914d-39eaaccec092'
  // const api_url = 'https://api.us-east-1.langdb.ai'
  const projectId = 'fb31f9e8-e1d5-45a3-a385-1d34786b9a77'
  const apiKey = 'langdb_NmpsbXNyZmZvNHFlZWs5MjMyMnJ1dDJia3A='
  const api_url = 'https://api.staging.langdb.ai'
  const threadId = '86fef116-8094-4533-b09e-6210462a2174'
  const [currentInput, setCurrentInput] = React.useState("");
  useEffect(() => {
    emitter.on('langdb_chatWindow', ({
      widgetId,
      state,
      threadId,
      messageId,
      traceId,
      error,
    }) => {
      if (state === 'SubmitEnd') {
        setCurrentInput('');
      }
    });

    return () => {
      emitter.off('langdb_chatWindow');
    };
  }, []);

  useEffect(() => {
    emitter.on('langdb_aiMessageClicked', ({ threadId, messageId, runId }: { threadId: string | undefined, messageId: string | undefined, runId: string | undefined }) => { console.log("===== on AI Message Clicked ====", { threadId, messageId, runId }) });

    return () => {
      emitter.off('langdb_aiMessageClicked');
    };
  }, []);
  const [searchToolEnabled, setSearchToolEnabled] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: '100vh',
      }}
    >
      <div className="flex flex-1 max-h-[calc(100vh-200px)] bg-black">
        
        <Widget
          autoRefreshThread={true}
          //threadId={threadId}
          //widgetId={threadId}
          //threadId="38a5a61b-9a28-43d3-99c9-215cc773bb59"
          // threadId="3289ddba-00f1-406f-95ae-9cf472010e95"
          modelName="anthropic/claude-sonnet-4"
          mcpTools={[{
            type: 'sse',
            server_url: 'https://api.staging.langdb.ai/tavily_ejbjbkqz',
          }]}
          projectId={'04b66e93-a6a8-4f70-96b1-86c5e73225ee'}
          apiKey={'langdb_bHhGUHcyZHBSU0x3b0I='}
          serverUrl={api_url}
          theme={theme}
          starters={starters}
        />

        {/* <Widget
          modelName="openai/gpt-4o-mini"
          projectId={projectId}
          apiKey={apiKey}
          serverUrl={api_url}
          theme={theme}
          hideChatInput={true}
          starters={starters}
        />

<Widget
          modelName="openai/o1-mini"
          projectId={projectId}
          apiKey={apiKey}
          serverUrl={api_url}
          theme={theme}
          hideChatInput={true}
          starters={starters}
        /> */}
      </div>
      {/* <div className={`dark-theme  w-full flex justify-center items-center`}>
        <div className="langdb-chat bg-inherit sticky bottom-0 pt-1 px-4 w-[50vw]">
          <ChatInput
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            searchToolEnabled={searchToolEnabled}
            toggleSearchTool={() => setSearchToolEnabled(prev => !prev)}
            onSubmit={(props: { inputText: string, files: FileWithPreview[], searchToolEnabled?: boolean, otherTools?: string[] }) => {
              emitter.emit('langdb_input_chatSubmit', props)
              setCurrentInput('')
              return Promise.resolve();
            }} />
        </div>
      </div> */}
    </div>
  );
};

export default Example;
