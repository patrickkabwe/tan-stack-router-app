import LoginForm from "@/components/templates/forms/login-form";
import { FileRoute } from "@tanstack/react-router";
import { useLayoutEffect } from "react";

export const Route = new FileRoute('/_a-layout/login').createRoute({
  component: Login,
});

function Login() {
  const setTitle = Route.useRouteContext({
    select: (ctx) => ctx.setTitle,
  });

  useLayoutEffect(() => {
    setTitle("Login");
  }, [setTitle]);

  return (
    <div className="p-2">
      {/* <h3>Login</h3> */}
      <LoginForm />
    </div>
  );
}
