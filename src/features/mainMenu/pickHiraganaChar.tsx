"use client"

import { hiraganaDatabase } from "../../data/kanaDatabase"
import { Button } from "#components/ui/button"
import { useState } from "react"

const PickhiraganaChar = () => {
  
  const defaultStyleCard = "bg-sky-50/50 rounded-lg p-17 flex-col flex border-3 border-accent"
  const selectedStyleCard = defaultStyleCard + " border-3 border-accent-foreground"
  const [isSelected, setIsSelected] = useState(false)

  const renderGroup = (groupName) => {
    return hiraganaDatabase
      .filter(item => item.group === groupName)
      .map((data) => (
        <Button variant={"outline"} key={data.id} onClick={() => setIsSelected(isSelected ? false : true)} className={isSelected ? selectedStyleCard : defaultStyleCard}>
          <div className="text-4xl font-black">{data.char}</div>
          <div>{data.romaji}</div>
        </Button>
      ))
  }

  return (
    <div className="h-screen flex flex-col p-10 overflow-x-hidden">
      <div className="flex justify-between gap-10 items-center">
        <div>
          <h1 className="text-2xl font-bold">Hiragana Characters</h1>
          <p className="py-5">Master the foundational characters of the Japanese writing system. Select characters to focus your practice session.</p>
        </div>
        <div className="flex items-center h-fit p-4 bg-white border-2 gap-4 px-4 w-1/4 rounded-2xl">
          <div className="text-sm font-semibold w-2/5">
            <h2 className="text-[10px]">MASTERY</h2>
            <h1 className="text-2xl">0/46</h1>
          </div>
          <div className="bg-accent w-full h-2 rounded-full"></div>
        </div>
      </div>
      <div>
        <div className="flex w-full justify-between">{renderGroup('a')}</div>
      </div>
      <div className="flex w-full pt-10 gap-5 items-center"></div>
    </div>
  )
}

export default PickhiraganaChar