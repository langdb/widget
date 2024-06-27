import { useState } from "react";



export const FloatingChatWidget = (props: {
  buttonStyle?: React.CSSProperties;
  color?: string;
  hoverColor?: string;
  children?: React.ReactNode;
  theme?: 'light' | 'dark';
}) => {
  const { buttonStyle, color, hoverColor } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const defaultButtonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px',
    backgroundColor: isHovered ? (hoverColor || '#0056b3') : (color || '#007bff'), // Adjusting opacity based on hover
    color: 'white',
    borderRadius: '50%', // Making the button round
    cursor: 'pointer',
    boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : 'none',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    display: 'flex', // Centering the icon
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px', // Fixed width
    height: '50px', // Fixed height,
    opacity: buttonOpacity,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  };
  const mergedButtonStyle: React.CSSProperties = { ...defaultButtonStyle, ...buttonStyle };
  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    // Use a timeout if immediate state update doesn't show the animation
    setTimeout(() => setButtonOpacity(isChatOpen ? 0 : 1), 10);
  };
  return <div className={props.theme || 'dark'}>
    {isChatOpen && (
      <div className='light:text-slate-900 border shadow-md dark:text-white h-[60vh] w-[40vw] min-h-[400px] flex flex-1 bg-white dark:bg-black flex-col absolute rounded p-[10px] ' style={{ bottom: '70px', right: '20px' }}>
        <div style={{ zIndex: '99999' }}>
          <button onClick={() => setIsChatOpen(false)}>Close</button>
        </div>
        <div className="h-full w-full">
          {props.children}
        </div>
      </div>
    )}
    {!isChatOpen && <button
      style={mergedButtonStyle}
      onClick={handleChatToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ChatIcon />
    </button>}

  </div>
};
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C7.03 3 3 6.73 3 11c0 2.21 1.145 4.2 2.938 5.657L6 22l5.075-2.688c.51.09 1.034.138 1.57.138 4.97 0 9-3.73 9-8s-4.03-8-9-8z" />
  </svg>
);