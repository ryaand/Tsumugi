import { Button } from "#components/ui/button"


const PlayNow = ({ tes, off, kanas }) => {
  
  const KanaItem = kanas

  console.log("ini di play: ", KanaItem)

  const defaultPlayingPage = "top-0 left-0 w-screen h-screen bg-amber-300 z-50"
  const togglePlayingPage = `${defaultPlayingPage} ${tes}`

  return (
    <div className={togglePlayingPage}>
      <Button onClick={off}>X</Button>
      <div>
        huruf yg kamu pilih: 
        {KanaItem.map(data => (
          <div>{data.char}</div>
        ))}
      </div>
    </div>
  )
}

export default PlayNow