import PickCard from "./components/pickCard"
import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <div className="w-full h-screen flex flex-col p-10">
            <div>
                <h1 className="text-2xl font-bold">Study Path</h1>
                <p>Select your category to begin your session.</p>
            </div>
            <div className="flex w-full pt-10 gap-5 items-center">
                <Link to={"/mainMenu/pickHiraganaChar"} className="w-1/3">
                    <PickCard picture={"あ"} title={"Hiragana"} description={"The photenic foundation"} />
                </Link>
                <Link to={"/mainMenu/hiraganaPickKana"} className="w-1/3 pointer-events-none opacity-0">
                    <PickCard picture={"ア"} title={"Katakana"} description={"For foreign words"} />
                </Link>
                <Link to={"/mainMenu/hiraganaPickKana"} className="w-1/3 pointer-events-none opacity-0">
                    <PickCard picture={"学"} title={"Kanji"} description={"Logographic characters"} />
                </Link>
            </div>
        </div>
    )
}

export default MainMenu