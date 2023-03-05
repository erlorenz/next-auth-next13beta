"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AuthLogic() {
  const { data: session, status } = useSession();

  // Once done loading if not authenticated redirect to sign in page
  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  if (status === "loading") return <h1>Loading</h1>;

  if (status === "authenticated")
    return (
      <>
        <p>You are signed in! </p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );

  return null;
}
