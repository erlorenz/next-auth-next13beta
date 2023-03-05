import { signIn } from "next-auth/react";
import SignInButton from "./SignInButton";

export default function SignIn() {
  return (
    <>
      <h1>SIGN IN PAGE</h1>
      <SignInButton />
    </>
  );
}
