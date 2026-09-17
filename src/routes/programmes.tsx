import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/programmes")({
  component: ProgrammesLayout,
});

function ProgrammesLayout() {
  return <Outlet />;
}
