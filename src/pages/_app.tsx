import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const queryClienet = new QueryClient()

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <QueryClientProvider client={queryClienet}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(MyApp);
