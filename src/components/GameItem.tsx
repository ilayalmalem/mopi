import { Game } from "@/types/Game"
import Image from "next/image"

type Props = {
  game: Game
}

const GameItem = ({ game }: Props) => {
  return (
    <a href={`/game/${game.id}`}>
      <div style={{ width: '15%' }} className="game flex flex-col gap-y-1">
        <Image className='game-image w-full' alt='משחק' src={`/assets/${game.image}`} width={100} height={100} />
        <p className='font-bold text-xl'>{game.name}</p>
        <p className='text-gray-400'>
          {game.description}
        </p>
      </div>
    </a>
  )
}

export default GameItem