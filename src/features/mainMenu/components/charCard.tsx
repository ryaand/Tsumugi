import { Button } from "#components/ui/button";
import { useState } from "react";

const CharCard = ({ id, char, romaji } : {id: string, char: string, romaji: string}) => {

  const defaultStyleCard = "bg-sky-50/50 rounded-lg p-17 flex-col flex border-3 border-accent"
  const selectedStyleCard = defaultStyleCard + " border-3 border-accent-foreground"
  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <div>
      <Button variant={"outline"} key={id} onClick={() => setIsSelected(isSelected ? false : true)} className={isSelected ? selectedStyleCard : defaultStyleCard}>
        <div className="text-4xl font-black">{char}</div>
        <div>{romaji}</div>
      </Button>
    </div>
  )
}

export default CharCard