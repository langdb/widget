import { useCallback, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const FloatingChatWidget = (props: {
  children?: React.ReactNode;
  theme?: "light" | "dark";
  onMinimize?: () => void;
  onMaximize?: () => void;
  btnClassName?: string;
  title?: any;
  maximizedPanelClassName?: string;
  maximizedPanelStyle?: React.CSSProperties;
  showFullScreen?: boolean,
  controls?: {
    hideMaximise?: boolean
  }
}) => {
  const {
    onMinimize,
    onMaximize,
    btnClassName,
    theme,
    children,
    title,
    maximizedPanelClassName,
    maximizedPanelStyle,
    showFullScreen: maximised,
    controls
  } = props;
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(maximised ? maximised : false);

  const handleChatToggle = useCallback(() => {
    setIsChatOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(theme || "dark")}>
      {isChatOpen && (
        <div
          style={isMaximized ? maximizedPanelStyle : {}}
          className={classNames(
            "light:text-slate-900 dark:text-white flex flex-1 bg-white dark:bg-darkContainer flex-col absolute p-[10px] pt-[0px]",
            isMaximized
              ? maximizedPanelClassName || "h-full w-full bottom-0 right-0"
              : "rounded border border-border shadow-md h-[60vh] w-[40vw] min-h-[500px] bottom-16 right-16",
          )}
        >
          <div
            className="border-b py-[5px] flex justify-center items-center"
            style={{ zIndex: "9999" }}
          >
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsChatOpen(false);
                  onMinimize && onMinimize();
                }}
              >
                <MinusIcon />
              </button>
              {!controls?.hideMaximise && <button
                onClick={() => {
                  setIsMaximized((prev) => !prev);
                  onMaximize && onMaximize();
                }}
              >
                {isMaximized ? <MinimizeIcon /> : <MaximizeIcon />}
              </button>}
            </div>
            {<div className="flex flex-1 justify-center dark:text-slate-200 ">{title}</div>}
          </div>
          <div className="flex flex-1 overflow-scroll p-1 ">{children}</div>
        </div>
      )}
      {!isChatOpen && (
        <button
          className={classNames(
            btnClassName || "",
            "fixed text-white bg-primary hover:bg-primary-800 bottom-5 right-5 flex w-[50px] hover:scale-110 scale-100 h-[50px] justify-center items-center p-[10px] rounded-full cursor-pointer shadow-none hover:shadow-xl transition ease-in-out",
          )}
          onClick={handleChatToggle}
        >
          <ChatIcon />
        </button>
      )}
    </div>
  );
};
export const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      stroke-linejoin="round"
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H5v-2h14v2z" />
  </svg>
);

const MaximizeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
    />
  </svg>
);

const MinimizeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
    />
  </svg>
);
