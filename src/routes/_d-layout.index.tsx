import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/_d-layout/').createRoute({
  component: Dashboard,
});

function Dashboard() {
  const { auth } = Route.useRouteContext();

  console.log(auth);

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
