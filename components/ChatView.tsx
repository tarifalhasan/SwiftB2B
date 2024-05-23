"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { useState } from "react";

const ChatView = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "System", content: "What would you like to know?" },
    {
      sender: "Sure let me connect you to an agent",
      content: "Thanks",
    },
    {
      sender: "Hi there! How are you?",
      content: "I'm fine thank you!",
    },
    {
      sender: "Do you know what is Reactjs?",
      content: "Yes it's a great react frontend framework!",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const updateResponse = (response: any) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "AI", content: response.message },
    ]);
    setIsFetching(false);
  };

  // useEffect(() => {
  //   // Fetch initial data when the component mounts
  //   setIsFetching(true);
  //   fetchData(updateResponse).catch(console.error);
  // }, []);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", content: newMessage },
      ]);
      setNewMessage("");

      // Trigger a new fetch request based on user message
      setIsFetching(true);
      // fetchData(updateResponse).catch(console.error);
    }
  };

  return (
    <div className="fixed bottom-5 z-[60] right-10">
      <Popover open={isOpenChat} onOpenChange={setIsOpenChat}>
        <PopoverTrigger asChild>
          <button className="w-[60px] h-[60px] bg-[#0F3D99] rounded-full inline-flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="36"
              viewBox="0 0 13 36"
              fill="none"
            >
              <path
                d="M0.822998 0.445312V7.23068L12.2723 17.8476V0.445312H0.822998Z"
                fill="white"
              />
              <path
                d="M0.822998 35.2488H12.2723V27.5334L0.822998 16.6035V35.2488Z"
                fill="white"
              />
            </svg>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 overflow-hidden w-full max-w-full xl:w-[400px]"
          align="end"
        >
          <div className="p-6 flex items-center justify-between w-full bg-[#0F3D99]">
            <div>
              <Image
                src={"/images/dialog.svg"}
                alt="dialog"
                width={93}
                height={28}
              />
            </div>
            <button onClick={() => setIsOpenChat(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 h-[464px] overflow-y-scroll">
            {messages.map((m, index) => (
              <div key={index} className="flex flex-col">
                <div>
                  <p
                    style={{
                      boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.16)",
                    }}
                    className="block text-sm float-start font-medium text-white bg-SwiftB2b-blue px-4 py-3 rounded-[8px] rounded-bl-[0px]"
                  >
                    {m.sender}
                  </p>
                </div>
                <div className="my-6">
                  <p className="block rounded-br-[0px] text-sm float-end font-medium bg-transparent border text-SwiftB2b-blue bg-border-blue px-4 py-3 rounded-[8px] rounded-es-0">
                    {m.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              boxShadow: "4px 0px 8px 0px rgba(0, 0, 0, 0.16)",
            }}
            className="bg-white p-6 flex items-center justify-between"
          >
            <input
              placeholder="Let's Converse...."
              className="text-lg font-light text-[#0F3D99] flex-1 outline-none border-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <div className="inline-flex items-center gap-5">
              <button onClick={handleSend}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                >
                  <path
                    d="M1.9226 15.9127C1.56737 16.0547 1.22991 16.0235 0.910213 15.8189C0.590514 15.615 0.430664 15.3177 0.430664 14.9269V10.9573C0.430664 10.7087 0.501708 10.4866 0.643797 10.2913C0.785886 10.0959 0.981258 9.97157 1.22991 9.91829L8.95598 8.00009L1.22991 6.08189C0.981258 6.02861 0.785886 5.90428 0.643797 5.70891C0.501708 5.51354 0.430664 5.29153 0.430664 5.04287V1.07327C0.430664 0.682525 0.590514 0.38485 0.910213 0.180242C1.22991 -0.0236552 1.56737 -0.0545599 1.9226 0.0875288L18.3338 7.01435C18.7779 7.20972 18.9999 7.5383 18.9999 8.00009C18.9999 8.46188 18.7779 8.79046 18.3338 8.98583L1.9226 15.9127Z"
                    fill="#0F3D99"
                  />
                </svg>
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatView;
