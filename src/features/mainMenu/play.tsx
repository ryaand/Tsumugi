import { Button } from "#components/ui/button"
import { useEffect, useState } from "react"

const PlayNow = ({ tes, close, kanas }) => {
  const KanaItem = kanas

  const defaultPlayingPage = "top-0 left-0 w-screen bg-white h-screen z-50"
  const togglePlayingPage = `${defaultPlayingPage} ${tes}`

  const [randomChar, setRandomCard] = useState()
  const [fix, setFix] = useState(0)

  const char = () => {
    const randomIndex = Math.floor(Math.random() * KanaItem.length)
    let prev
    if ( randomIndex == fix) {
      if (randomIndex == (KanaItem.length - 1)) {
        const kontol = KanaItem[0]
        setRandomCard(kontol.char)
        prev = 0
      } else {
        const tes = randomIndex + 1
        const kontol = KanaItem[tes]
        setRandomCard(kontol.char)
        prev = tes
      }
    } else {
      const kontol = KanaItem[randomIndex]
      setRandomCard(kontol.char)
      prev = randomIndex
    }
    setFix(prev)
  }

  useEffect(() => {
    char()
  }, [])

  return (
    <div className={togglePlayingPage}>
      <Button onClick={close}>X</Button>
      <div className="w-full h-full justify-center items-center flex-col flex">
        <div className="font-bold zoom-1000">{randomChar}</div>
        <Button onClick={char} className={"hover:cursor-pointer"}>Next</Button>
      </div>
    </div>
  )
}

export default PlayNow