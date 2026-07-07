import { Button } from "#components/ui/button"

const Navbar = () => {
    return (
        <nav className="w-1/5 border border-zinc-300 p-7 flex flex-col gap-10">
            <div className="flex items-center gap-4">
                <img src="/public/logo.png" className="w-15 rounded-2xl"></img>
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-2xl">Tsumugi</p>
                    <p className="text-sm">Learn kana in a fun way!</p>
                </div>
            </div>
            <div className="text-black/80 font-semibold w-full gap-2 flex flex-col">
                <Button className="flex justify-start p-4 px-7 gap-2 rounded-full items-center h-15">
                    <div className="zoom-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 24 24"><path fill="none" stroke="rgb(145,198,236)" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Zm10-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z" /></svg>
                    </div>
                    <p className="text-[rgb(145,198,236)]">Dashboard</p>
                </Button>
                <Button className="flex justify-start p-6 rounded-full items-center h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Zm10-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z" /></svg>
                    <p className="">Dashboard</p>
                    <p>aisdh</p>
                </Button>
            </div>
        </nav>
    )
}

export default Navbar