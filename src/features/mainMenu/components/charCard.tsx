import { Button } from "#components/ui/button";
import { useState } from "react";

const CharCard = ({ id, char, romaji } : {id: string, char: string, romaji: string}) => {

  const defaultStyleCard = "bg-sky-50/50 rounded-lg p-17 flex-col flex border-3 border-accent relative cursor-pointer"
  const selectedStyleCard = defaultStyleCard + " border-3 border-accent-foreground"
  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <div>
      <Button variant={"outline"} key={id} onClick={() => setIsSelected(isSelected ? false : true)} className={isSelected ? selectedStyleCard : defaultStyleCard}>
        <div className="text-4xl font-black">{char}</div>
        <div>{romaji}</div>
        {isSelected ? 
        <div className="rounded-full w-4.5 h-4.5 bg-accent-foreground border-2 absolute right-2 top-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"/></svg></div> : 
        <div className="rounded-full w-4 h-4 bg-white border-2 absolute right-2 top-2"></div>}
        
      </Button>
    </div>
  )
}

export default CharCard