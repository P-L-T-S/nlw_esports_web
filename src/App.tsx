import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import logoImg from "./assets/Logo.svg";
import { CreateAdModal } from "./components/CreateAdModal";
import { fetchGamesService, IGames } from "./services/fetchGamesService";

function App() {
  const [games, setGames] = useState<IGames[]>([]);

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    const games = await fetchGamesService();
    setGames(games);
  }

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} alt="logo tipo do NLW Esports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-rainbow-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className={`grid grid-cols-6 gap-6 mt-16`}>
        {games.map((game) => (
          <GameBanner
            name={game.title}
            banner={game.banner}
            ads={game._count.ads}
            key={game.id}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal games={games} />
      </Dialog.Root>
    </div>
  );
}

export default App;
