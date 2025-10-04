"use client";
import { useMessageStore } from "@/utils/store/message-store";
import React from "react";
import LoadingThreeDotsJumping from "@/app/_components/ChatLoader";

export default function ChatScreen({ isPending }: { isPending: any }) {
  let role = "system";
  const { messages } = useMessageStore();

  return (
    <div className=" mx-8 px-2 flex-1 my-3 overflow-auto  flex flex-col gap-4">
      {messages.map((item, i) => (
        <div
          key={i}
          className={`${
            item.role === "assistant"
              ? "self-start bg-light-secondary dark:bg-dark-secondary  text-light-primary dark:text-dark-primary"
              : "self-end bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary"
          } p-3 rounded-lg max-w-[75%]`}
        >
          {item.content}
        </div>
      ))}
      {isPending && (
        <div className="self-start bg-light-secondary  text-light-primary my-4">
          <LoadingThreeDotsJumping />
        </div>
      )}
    </div>
  );
}
