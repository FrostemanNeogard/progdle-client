import { createFileRoute } from "@tanstack/react-router";
import GamePage from "../pages/game/GamePage";

export const Route = createFileRoute("/game")({
  component: () => <GamePage />,
});
