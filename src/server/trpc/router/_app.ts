import { router } from "../trpc";
import { userFormRouter } from "./userForm";

export const appRouter = router({
  userForm: userFormRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
