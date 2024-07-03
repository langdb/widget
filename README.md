# Langdb Widget

Widget component interacting with LangDB APIs. Visit [docs](https://langdb.ai/docs/langdb/) to get started.
<img src="./images/chat-widget.gif" width="100%" alt="demonstration">

## Getting start

### Installation

```bash
npm install @langdb/widget
```

or

```bash
pnpm install @langdb/widget
```

or

```bash
yarn add @langdb/widget
```

### Basic Usage

1. Make sure you have a LangDB account and an application created. If you don't have an account, you can create one [here](https://app.langdb.ai/).
2. Create new application and get either the `publicId` or `appId` from the application settings.
3. Ensure you have a chatbot agent created in your application. If you don't have one, you can create one by executing the following SQL code in the LangDB console.

```sql
CHAT cities_chat
```

4. Replace the `publicId` and `agentName` with your application `publicId` and `agentName` respectively.

```ts
import { Widget } from "@langdb/widget";
import '@langdb/widget/style.css';

const LANGDB_CLOUD_SERVER = 'https://api.dev.langdb.ai';
const user_picture_url = 'https://avatars.githubusercontent.com/u/1016591?v=4';
const agent_logo = 'https://app.dev.langdb.ai/static/media/logo.0d259c55b001b212cc0a.png';
const agent_name = 'cities_chat'; // replace with your agent name
const publicId = '83186f34-84d7-4633-8da1-db3e579edeea'; // replace with your public app id
const App = () => {
    return <div className="flex flex-1 h-full">
            <Widget
                publicId={publicId}
                personaOptions={{
                    assistant: {
                        name: "LangDB",
                        tagline: "Build and Publish AI Agents using SQL",
                        avatar: agent_logo,
                    },
                    user: {
                        avatar: user_picture_url,
                        name: 'Alice',
                    }
                }}
                agentName={agent_name}
                advancedOptions={{
                    displayOptions: {
                        themeId: 'langdb',
                        colorScheme: 'light',
                    },
                    conversationOptions: {
                      conversationStarters: [
                        {
                          prompt: 'What is the most Populous City'
                        },
                        {
                          prompt: 'Tell me interesting facts about Tokyo.'
                        },
                        {
                          prompt: 'Give me some interesting cities to visit.'
                        }
                      ]
                    }
                }}
                serverUrl={LANGDB_CLOUD_SERVER}
            />
    </div>
};
export default App;
```

### Props

| Prop | Type | Description | Required |
| --- | --- | --- | --- |
| `publicId` | `string` | application id | `true` |
| `agentName` | `string` | The agent name when you execute chat command  | `true` |
| `personaOptions` | `PersonaOptions` | The persona options to custom display for the user and assistant. For example: `{ assistant: { name: "LangDB", tagline: "Build and Publish AI Agents using SQL", avatar: agent_logo, }, user: { avatar: user_picture_url, name: 'Alice', } }` | `false` |
| `advancedOptions` | `AdvancedOptions` | The advanced options to custom display for the user and assistant. For example: `{ displayOptions: { themeId: 'langdb', colorScheme: 'light', }, conversationOptions: { conversationStarters: [ { prompt: 'What is the most Populous City' }, { prompt: 'Tell me interesting facts about Tokyo.' }, { prompt: 'Give me some interesting cities to visit.' } ] } }` | `false` |
| `serverUrl` | `string` | The LangDB cloud server url | `false` |
| agentParams | `AgentParams` | The agent parameters to pass to the agent. For example: `{ "city": "Tokyo" }` | `false` |
| getAccessToken | `() => Promise<string>` | The function to get the access token | `false` |
