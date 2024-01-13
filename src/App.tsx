import {
  ErrorComponent,
  NotFoundRoute,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";

export type Auth = {
  login: (username: string) => void;
  logout: () => void;
  status: "loggedOut" | "loggedIn";
  username?: string;
};

const auth: Auth = {
  status: "loggedOut",
  username: undefined,
  login: (username: string) => {
    auth.status = "loggedIn";
    auth.username = username;
  },
  logout: () => {
    auth.status = "loggedOut";
    auth.username = undefined;
  },
};
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => routeTree,
  component: () => <h1>Page not found</h1>,
});

const router = new Router({
  routeTree,
  notFoundRoute,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: undefined!, // We'll inject this when we render
    setTitle: undefined!,
  },
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <>
      <RouterProvider
        router={router}
        defaultPreload="intent"
        context={{
          auth,
          setTitle: (title: string) => {
            document.title = title;
          }
        }}
      />
    </>
  );
}
