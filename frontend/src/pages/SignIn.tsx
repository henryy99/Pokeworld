import { SignInForm } from "@/components/auth/signin-form";
import React from "react";

const SignIn = () => {
  return (
    <div
      className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10 absolute inset-0  z-0 "
      style={{
        backgroundImage: `
          radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
        `,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
