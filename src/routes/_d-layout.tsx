import { FileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = new FileRoute('/_d-layout').createRoute({
  component: DashboardLayout,
  beforeLoad: () => {
    console.log("beforeLoad");
    
    throw redirect({
      to: "/login",
      search: {
        // Use the current location to power a redirect after login
        // (Do not use `router.state.resolvedLocation` as it can
        // potentially lag behind the actual current location)
        redirect: location.href,
      },
    });
  },
});

function DashboardLayout() {
  return (
    <div>
      <div>Sidebar</div>
      <hr />
      <Outlet />
    </div>
  );
}
