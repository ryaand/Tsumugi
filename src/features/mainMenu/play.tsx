import { Button } from "#components/ui/button"

const PlayNow = ({ tes, off }) => {

  const defaultPlayingPage = "top-0 left-0 w-screen h-screen bg-amber-300 z-50"
  const togglePlayingPage = `${defaultPlayingPage} ${tes}`

  return (
    <div className={togglePlayingPage}>
      tes
      <Button onClick={off}>X</Button>
    </div>
  )
}

export default PlayNow