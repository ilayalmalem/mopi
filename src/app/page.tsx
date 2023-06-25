"use client"

import GameList from '@/components/GameList'
import { Game } from '@/types/Game'
import { getGames } from '@/utils/fakeData'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const data = getGames()
    setGames(data)
  }, [])

  return (
    <main className='h-screen'>
      <div id="recommended-video" className='flex justify-between h-8/12'>
        <div id="recommended-video-details" className='w-7/12 flex flex-col justify-center'>
          <div id="advanced-details" className='flex gap-x-2 items-center'>
            <div id="series-name" className='text-2xl'>
              עשו זאת בעצמכם
            </div>
            <div id="position" className="text-gray-400 text-md">
              עונה 2 פרק 3
            </div>
          </div>
          <div id="video-title" className='text-5xl'>
            איך מכינים קישוטים לסוכה?
          </div>
          <div id="video-description" className='w-2/3 mt-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut porro illo aut excepturi impedit debitis non, cumque iusto quaerat odio consectetur dignissimos quisquam quia eligendi nemo. Recusandae illo delectus amet!
          </div>
          <button id="play-button" className='rounded-md text-xl px-3 py-1 mt-3 self-start bg-white text-black'>
            <span className='pl-1'>הפעל</span>
            &#x25C0;
          </button>
        </div>

        <Image id="recommended-video-thumbnail" className='w-5/12' alt='תמונת סרטון' src="/assets/video-thumbnail.png" width={1500} height={1500} />
      </div>

      <div id="new-games">
        <GameList games={games} title={"משחקים חדשים"} />
      </div>
    </main>
  )
}
