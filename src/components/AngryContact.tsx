import { useRef, useState } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const AngryContact = () => {
  const [clicks, setClicks] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeRef = useRef<NodeJS.Timeout>(null);

  const messageList: string[] = [
    "STOP CLICKING ME! 😡",
    "I SAID STOP!",
    "DON'T MAKE ME ANGRY!",
    "YOU WON'T LIKE ME WHEN I'M ANGRY!",
    "I'M NOT KIDDING!",
    "STOP IT!",
    "I'M SERIOUS!",
    "YOU'RE GONNA REGRET THIS!",
    "I'M WARNING YOU!",
    "THIS IS YOUR LAST WARNING!",
  ];

  const handleClick = () => {
    if (isClosing) return;

    if (timeRef.current) clearTimeout(timeRef.current);

    if (!showMessage) {
      setShowMessage(true);
      return; // ! show index 0 first, DO NOT increment clicks yet
    }

    if (clicks >= messageList.length - 1) {
      setIsClosing(true);
      setTimeout(() => window.close(), 2000);
      return;
    }

    // TODO increment clicks for the next message
    setClicks((prev) => prev + 1);
  };
  

  const handleMouseLeave = () => {
    if (isClosing) return;

    if (timeRef.current) clearTimeout(timeRef.current);

    timeRef.current = setTimeout(() => {
      setShowMessage(false);
      setClicks(0);
    }, 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <img
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            src="Service.png"
            alt="Banner"
            className="object-cover duration-300 ease-in-out transition-all
              w-[90%] h-[90%] active:scale-85 cursor-pointer"
          />
        </TooltipTrigger>
      </Tooltip>

      {/* Manual Popup Tooltip */}
      {showMessage && (
        <div
          className="absolute bg-black/80 px-2 py-1 md:px-4 md:py-2 rounded-md shadow-lg
            animate-bounce transition-all duration-300 ease-in-out"
          style={{
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
          }}
        >
          <p>
            {messageList[Math.min(clicks, messageList.length - 1)]}
          </p>
        </div>
      )}
    </TooltipProvider>
  );
};

export default AngryContact;
