// public/chat-widget-loader.ts
interface Window {
    ChatWidget: any; // Replace `any` with the appropriate type if known
}

const LANGDB_CLOUD_DOMAIN = process.env.REACT_APP_LANGDB_CLOUD_DOMAIN;
(function () {
    const script = document.currentScript as HTMLScriptElement;
    const searchParams = new URLSearchParams(script.src.split('?')[1]);
    const widgetId = searchParams.get('widget_id');
    const widgetType = searchParams.get('widget_type');
    const chatWidth = searchParams.get('chat_width');
    const chatHeight = searchParams.get('chat_height');

    const loadWidget = (): void => {
        // get current url path 
        const langdb_cloud_ui_host = LANGDB_CLOUD_DOMAIN;
        const chat_widget_path = `${langdb_cloud_ui_host}/widget`;

        const manifest_path = `${chat_widget_path}/manifest.json`;
        fetch(manifest_path,{
            method: 'GET',
            mode: 'cors',
        })
            .then(response => response.json())
            .then((manifest: { [key: string]: string }) => {
                const widgetScriptName = manifest['clientChatWidget.js'];
                if (widgetScriptName) {
                    const widgetScript = document.createElement('script');
                    widgetScript.src = `${chat_widget_path}/${widgetScriptName}`; // Path to your bundled widget
                    widgetScript.onload = () => {
                        const widgetContainerId = 'langdb-chat-widget-container';
                        // check if widget container exists
                        let widgetContainer = document.getElementById(widgetContainerId) as HTMLDivElement;
                        if (!widgetContainer) {
                            widgetContainer = document.createElement('div');
                            widgetContainer.id = widgetContainerId;
                            document.body.appendChild(widgetContainer);
                        }
                        // Check if ChatWidget and renderChatWidget are available
                        if (window.ChatWidget && window.ChatWidget.renderChatWidget) {
                            window.ChatWidget.renderChatWidget(widgetContainerId, widgetId, widgetType, chatWidth, chatHeight);
                        } else {
                            console.error('ChatWidget is not available'); // Debugging output
                        }
                    };
                    document.head.appendChild(widgetScript);
                } else {
                    console.error('main.js not found in manifest.');
                }
            })
            .catch(error => {
                console.error('Error fetching manifest.json:', error);
            });
    };

    loadWidget();
})();