import { Game } from "@/types/Game"
import Image from "next/image"
import GameItem from "./GameItem"

type Props = {
  games: Game[],
  title: string
}

const GameList = ({ games, title }: Props) => {
  return (
    <div>
      <h2 id="title" className='text-3xl mb-4'>{title}</h2>
      {
        games.map((game, index) => <GameItem key={index} game={game} />)
      }
    </div>
  )
}

export default GameList