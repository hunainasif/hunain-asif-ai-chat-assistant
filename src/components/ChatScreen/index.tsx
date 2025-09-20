import React from "react";

export default function ChatScreen() {
  let role = "system";
  let messages = [
    {
      role: "assistant",
      content: "👋 Hello! I’m your AI assistant. How can I help you today?",
    },
    { role: "user", content: "Tell me a joke about developers." },
    {
      role: "assistant",
      content:
        "Sure! Why do programmers prefer dark mode? 🌑 Because light attracts bugs!",
    },
    {
      role: "assistant",
      content: "👋 Hello! I’m your AI assistant. How can I help you today?",
    },
    {
      role: "user",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fugit deserunt sunt quod architecto ullam nesciunt, porro laborum nemo iusto minus ipsum ea nobis. Quasi dolor at corrupti maxime commodi",
    },
    {
      role: "assistant",
      content:
        "Sure! Why do programmers prefer dark mode? 🌑 Because light attracts bugs!",
    },
    {
      role: "assistant",
      content: "👋 Hello! I’m your AI assistant. How can I help you today?",
    },
    { role: "user", content: "lorem" },
    {
      role: "assistant",
      content:
        "Sure! Why do programmers prefer dark mode? 🌑 Because light attracts bugs!",
    },
    {
      role: "assistant",
      content: "👋 Hello! I’m your AI assistant. How can I help you today?",
    },
    { role: "user", content: "Tell me a joke about developers." },
    {
      role: "assistant",
      content:
        "Sure! Why do programmers prefer dark mode? 🌑 Because light attracts bugs!",
    },
    {
      role: "assistant",
      content: "👋 Hello! I’m your AI assistant. How can I help you today?",
    },
    { role: "user", content: "Tell me a joke about developers." },
    {
      role: "assistant",
      content:
        "Sure! Why do programmers prefer dark mode? 🌑 Because light attracts bugs!",
    },
  ];
  return (
    <div className=" mx-8 flex-1 my-3 overflow-auto  flex flex-col gap-4">
      {messages.map((item, i) => (
        <div
          key={i}
          className={`${
            item.role === "assistant"
              ? "self-start bg-light-secondary  text-light-primary"
              : "self-end bg-light-primary text-light-secondary"
          } p-3 rounded-lg max-w-[75%]`}
        >
          {item.content}
          <p>.</p>
        </div>
      ))}
    </div>
  );
}
