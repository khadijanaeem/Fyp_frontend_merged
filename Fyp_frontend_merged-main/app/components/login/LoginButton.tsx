"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center gap-2">
        <p>Signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-500 text-white px-3 py-1 rounded"
    >
      Sign in with Google
    </button>
  );
}
