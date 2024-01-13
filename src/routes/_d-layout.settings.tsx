import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/_d-layout/settings').createRoute({
  component: Settings,
});

function Settings() {
  return (
    <div className="p-2">
      <h3>Settings</h3>
    </div>
  );
}
