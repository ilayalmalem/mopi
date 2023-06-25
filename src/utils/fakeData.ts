import { Game } from "@/types/Game";

const games: Game[] = [
  {
    id: 1,
    name: "נינג׳ה ווריור",
    description: "עזרו לחזיר הורדרד (מיסטר פיגי) לטפס במעלה הבניין בדרכו אל מיס פיגי",
    image: "dummy-game.jpeg",
    url: "https://wanted5games.com/games/html5/jetpack-santa-en-s-iga-cloud/index.html?pub=439"
  }
]

export const getGames = (): Game[] => {
  return games;
}

export const getGame = (id: number) => {
  return games.find(game => game.id == id)
}