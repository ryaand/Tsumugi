import { useState } from "react"
import { hiraganaDatabase } from "../../data/kanaDatabase"
import CharCard from "./components/charCard"
import { Button } from "#components/ui/button"
import PlayNow from "./play"

const PickhiraganaChar = () => {

  const [selectedKanas, setSelectedKanas] = useState([])
  const [play, setPlay] = useState(false)


  function handleAddKanas(data) {
    const selected = {
      id: data.id,
      char: data.char,
      romaji: data.romaji
    }
    setSelectedKanas(prev => [...prev, selected])
  }

  function handleRemoveKanas(index) {
    setSelectedKanas(k => k.filter((_, i) => i !== index))
  }

  const renderGroup = (groupName: string) => {
    return hiraganaDatabase
      .filter(item => item.group === groupName)
      .map((data, index) => (
        <CharCard id={data.id} char={data.char} romaji={data.romaji} onAdd={() => handleAddKanas(data)} onRemove={() => handleRemoveKanas(index)} />
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
      <div>
        <Button className={""} onClick={() => setPlay(play ? false : true)}>Play</Button>
        {
          play ?
          <PlayNow tes={play ? "fixed" : "hidden"} off={() => setPlay(false)} />
          :
          null
        }
        {/* <PlayNow tes={play ? "hidden" : "fixed"} /> */}
      </div>
    </div>
  )
}

export default PickhiraganaChar