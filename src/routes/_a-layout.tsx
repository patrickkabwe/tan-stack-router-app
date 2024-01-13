import { FileRoute, Outlet } from "@tanstack/react-router";

export const Route = new FileRoute('/_a-layout').createRoute({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div>{document.title}</div>
      <div className="w-[500px] ">
        <Outlet />
      </div>
    </div>
  );
}
