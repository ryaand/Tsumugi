import { useState } from "react"

const SelectedKana = ({ id, char, romaji }) => {

  const [selectedKanas, setSelectedKanas] = useState<{ id: string; char: string; romaji: string }[]>([])

  function handleAddKanas() {
    const selected = {id: id, char: char, romaji: romaji}
    setSelectedKanas(add => [...add, selected])
  }
}

export default SelectedKana