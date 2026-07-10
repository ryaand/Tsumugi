const PickhiraganaChar = () => {
    return (
        <div className="h-screen flex flex-col p-10 overflow-x-hidden">
            <div className="flex justify-between gap-10">
                <div>
                    <h1 className="text-2xl font-bold">Hiragana Characters</h1>
                    <p>Master the foundational characters of the Japanese writing system. Select characters to focus your practice session.</p>
                </div>
                <div className="flex items-center bg-white border-2 gap-4 px-4 w-1/4 rounded-2xl">
                    <div className="text-sm font-semibold w-2/5">
                        <h2 className="text-[10px]">MASTERY</h2>
                        <h1 className="text-2xl">0/46</h1>
                    </div>
                    <div className="bg-accent w-full h-2 rounded-full"></div>
                </div>
            </div>
            <div>
                
            </div>
            <div className="flex w-full pt-10 gap-5 items-center"></div>
        </div>
    )
}

export default PickhiraganaChar