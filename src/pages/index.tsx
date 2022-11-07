import { type NextPage } from "next";
import Head from "next/head";
//import Link from "next/link";
import Nav from "../components/Nav"

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Wealth Builder Tactical Systems</title>
        <meta name="description" content="Wealth Builder Tactical Systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('../assets/Consultation.jpg')] bg-cover overflow-hidden">
        <Nav className="z-10 overflow-hidden"></Nav>
        <main className="mx-auto flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
          <div className="w-4/12 bg-white/75 border rounded-lg text-lg overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
