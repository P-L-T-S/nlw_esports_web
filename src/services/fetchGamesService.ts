export interface IGames {
  id: string;
  banner: string;
  title: string;
  _count: { ads: number };
}

export async function fetchGamesService() {
  const response = await fetch("http://localhost:3333/games");
  return await response.json();
}
