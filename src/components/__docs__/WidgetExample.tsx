import React, { FC, useEffect } from "react";
import axios from "axios";
import { Widget, WidgetProps } from "../Widget";
import { emitter } from "../EventEmiter";

export const getAccessToken = async () => {
  try {
    const response = await axios.post("http://localhost:8083/oauth2/token", {
      grant_type: "client_credentials",
      client_id: "58oc3lpiqs71dqtvme3r30im87",
      client_secret: "1j6ln8i01hrdr12osilaa9re682aafjd3rgbqnm93f7e40h6843j",
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

const Example: FC<WidgetProps> = ({ theme = "light", starters = [] }) => {
  // const apiKey = 'langdb_N1p5cVZvVi9kL1JJOExOeFJKNU1GbHdKbXNNRkxNL1lPemJ3eXhzeGN0K3FPTGxRbi8rN1J6YVhFSVE4ZmdTQjBuUmNQOHlCU1VxRTduam9aM1BHVkhXL3FycTBITXNxa1VhTUdkSXhUanZ0QnpxZklDTmVlVDFPOXZIZTgwRzAyeFZDRWx6MUhIdHBTYzdhS3QvT3B4cisxVFJ1WlcvNERWeWhMcTJ0KzVZZ0wzSjBOY21YQ3pzaDZvQlRQRXFadE1zbzpBQUFBQUFBQUFBQUFBQUFB'
  // const apiKey = 'langdb_NWkzYWRmMHJ1ajJiNXRsNWc1ZWlldm1saG4='
  // const projectId = '9c7ac2c8-b76f-453b-914d-39eaaccec092'
  const projectId = "b97c20ff-ff11-429e-b97f-137b22042d3d";
  const apiKey = "langdb_YmZzRGp6NWR5UXFraHA=";
  const api_url = "https://api.staging.langdb.ai";
  const threadId = "0bf9e1a7-f781-49ef-81ab-217e083d4ff1";
  const [currentInput, setCurrentInput] = React.useState("");
  useEffect(() => {
    emitter.on(
      "langdb_chatWindow",
      ({ widgetId, state, threadId, messageId, traceId, error }) => {
        if (state === "SubmitEnd") {
          setCurrentInput("");
        }
      },
    );

    return () => {
      emitter.off("langdb_chatWindow");
    };
  }, []);

  useEffect(() => {
    emitter.on(
      "langdb_aiMessageClicked",
      ({
        threadId,
        messageId,
        runId,
      }: {
        threadId: string | undefined;
        messageId: string | undefined;
        runId: string | undefined;
      }) => {
        console.log("===== on AI Message Clicked ====", {
          threadId,
          messageId,
          runId,
        });
      },
    );

    return () => {
      emitter.off("langdb_aiMessageClicked");
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: "100vh",
      }}
    >
      <div className="flex flex-1 max-h-[calc(100vh-200px)] bg-black">
        <Widget
          modelName="openai/gpt-4o-mini"
          autoRefreshThread={true}
          threadId={threadId}
          //widgetId={threadId}
          //threadId="38a5a61b-9a28-43d3-99c9-215cc773bb59"
          // threadId="3289ddba-00f1-406f-95ae-9cf472010e95"
          projectId={projectId}
          apiKey={apiKey}
          serverUrl={api_url}
          theme={theme}
          starters={starters}
        />
      </div>
    </div>
  );
};

export default Example;
