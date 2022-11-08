import logo from "../assets/wbtslogo1.png"
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Nav = () => {
  return (
    <div className="hover:bg-slate-500/75 transition">
      <div className="flex justify-between">
        <picture>
          <img className="m-6" src={logo.src} alt="" />
        </picture>
        <AuthShowcase/>
      </div>
    </div>
  )
}

export default Nav

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="rounded-md border border-black bg-violet-50 m-4 px-4 py-1 text-xl shadow-lg hover:bg-amber-400"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
