import { Button } from "#components/ui/button"
import { Input } from "#components/ui/input"
import { useEffect, useState } from "react"

const PlayNow = ({ tes, close, kanas }) => {
  const KanaItem = kanas

  const defaultPlayingPage = "top-0 left-0 w-screen bg-white h-screen z-50"
  const togglePlayingPage = `${defaultPlayingPage} ${tes}`

  const [randomCard, setRandomCard] = useState()
  const [fix, setFix] = useState(0)
  const [answer, setAnswer] = useState('')
  const [romaji, setRomaji] = useState()

  const randomIndex = Math.floor(Math.random() * KanaItem.length)
  let prev

  const char = () => {
    if (randomIndex == fix) {
      if (randomIndex == (KanaItem.length - 1)) {
        const kontol = KanaItem[0]
        setRandomCard(kontol.char)
        setRomaji(kontol.romaji)
        prev = 0
      } else {
        const tes = randomIndex + 1
        const kontol = KanaItem[tes]
        setRandomCard(kontol.char)
        setRomaji(kontol.romaji)
        prev = tes
      }
    } else {
      const kontol = KanaItem[randomIndex]
      setRandomCard(kontol.char)
      setRomaji(kontol.romaji)
      prev = randomIndex
    }
    setFix(prev)
  }

  const checkingAnswer = () => {
    char()
    if (answer.toLowerCase() === romaji) {
    } else {
    }
    setAnswer('')
  }

  useEffect(() => {
    char()
  }, [])

  return (
    <div className={togglePlayingPage}>
      <Button onClick={close}>X</Button>
      <div className="w-full h-full justify-center items-center flex-col flex">
        <div className="font-bold zoom-1000">{randomCard}</div>
        <div className="flex-col flex items-center justify-center gap-2">
          <form onSubmit={e => { e.preventDefault(); checkingAnswer() }}>
            <Input value={answer} onChange={e => setAnswer(e.target.value)} autoFocus autoComplete="off" spellCheck="false" required></Input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PlayNow