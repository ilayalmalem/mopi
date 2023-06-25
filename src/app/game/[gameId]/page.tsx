"use client"

import { Game } from "@/types/Game";
import { getGame } from "@/utils/fakeData";
import { useEffect, useState } from "react";

const page = ({ params }: any) => {
  const { gameId } = params;
  const [game, setGame] = useState<Game>()
  useEffect(() => {
    console.log(gameId)
    const data = getGame(gameId)
    setGame(data)
  }, [])

  return (
    <div className="h-full">
      <iframe src={game?.url} className="w-3/4 mx-auto h-full"></iframe>
    </div>
  )
}

export default page