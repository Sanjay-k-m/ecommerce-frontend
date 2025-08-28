import { type RouteConfig, index,  } from '@react-router/dev/routes';
import { authRoutes } from './features/auth/routes.config';
import { errorRoutes } from './errors/routes/routes.config';
import { homeRoutes } from './features/home/routes.config';
// import { errorRoutes } from "./errors/routes";

export default [
  index('features/home/layout.tsx'),
  ...authRoutes,
  ...errorRoutes,
  // ...homeRoutes,
] satisfies RouteConfig;
