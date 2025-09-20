import React from "react";
import LoginLeftbar from "./_components/LoginLeftbar";
import LoginForm from "./_components/LoginForm";

export default function Login() {
  return (
    <div className="flex w-full h-screen">
      <LoginLeftbar />
      <div className="flex-1 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
