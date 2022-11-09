import Image from "next/image";
import logo from "../assets/wbtslogo1.png"
import { signIn, signOut, useSession } from "next-auth/react";

import NavMenu from "./NavMenu"


const Nav = (props: {className: string}) => {
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <Image className="m-6" src={logo} alt="" />
        <AuthShowcase/>
      </div>
    </div>
  )
}

export default Nav

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  //const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
  //  undefined, // no input
  //  { enabled: sessionData?.user !== undefined },
  //);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {sessionData && (
        <NavMenu
          name={sessionData?.user?.name}
        />

        /*<p className="p-8 w-20 h-20 flex text-md text-black border border-amber-100 rounded-full border-4 items-center justify-center justify-items-center content-center hover:bg-white transition">
         {sessionData?.user?.name}
          </p>*/
      )}
      {!sessionData && (
        <button
          className="rounded-md border border-black bg-violet-50 m-4 px-4 py-1 text-xl shadow-lg hover:bg-amber-400 transition"
          onClick={sessionData ? () => signOut() : () => signIn(undefined, { callbackUrl: '/pfsinfo' })}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      )}
    </div>
  );
};
