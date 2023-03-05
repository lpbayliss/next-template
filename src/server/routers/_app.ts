/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc';
import { healthRouter } from './health';

export const appRouter = router({
  health: healthRouter,
});

export type AppRouter = typeof appRouter;
