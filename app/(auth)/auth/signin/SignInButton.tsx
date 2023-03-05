"use client";

import { signIn, useSession } from "next-auth/react";

export default function SignInButton() {
  const { status } = useSession();

  return (
    <div>
      <button
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000" })
        }
      >
        Github
      </button>
    </div>
  );
}
