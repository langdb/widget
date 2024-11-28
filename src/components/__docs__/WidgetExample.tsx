import React, { FC } from "react";
import axios from "axios";
import { Widget, WidgetProps } from "../Widget";

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
         threadId='2115b8e6-fbad-43c9-ae04-2a19d2ad72fc'
         getAccessToken={getAccessToken}
         serverUrl="http://localhost:8083"
         theme={theme}
          starters={starters}
        />
      </div>
    </div>
  );
};

export default Example;
