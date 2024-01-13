import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/_a-layout/register').createRoute({
  component: Login,
});

function Login() {
  return (
    <div className="p-2">
      <h3>Register</h3>
    </div>
  );
}
