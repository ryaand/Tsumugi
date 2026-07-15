import { Card } from "#components/ui/card"

const SelectCategory = ({picture, title, description}) => {
    return (
        <div className="">
            <Card className="w-full hover:shadow-2xl/50 hover:border-2 hover:border-accent-foreground border-2 border-accent cursor-pointer transition-all duration-100">
                <div className="w-full flex items-center justify-center h-40 border-b pb-5">
                    <h1 className="absolute font-black text-6xl">{picture}</h1>
                </div>
                <div className="text-zinc-600 mx-5">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-2xl font-black">{title}</h1>
                        <div className="bg-accent p-2 rounded-xl text-sm">0/46</div>
                    </div>
                    <div className="pt-2">
                        <p>{description}</p>
                    </div>
                    <div className="pt-10 flex flex-col gap-3">
                        <div className="flex justify-between">
                            <h3>Progression</h3>
                            <p>0%</p>
                        </div>
                        <div className="bg-accent w-full h-2 rounded-full"></div>
                    </div>
                </div>
                <div className="font-bold flex items-center px-5 border-t pt-4 right-0 w-full justify-end">
                    Start<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#145374" d="m18 12l.354-.354l.353.354l-.353.354zm-12 .5a.5.5 0 0 1 0-1zm8.354-4.854l4 4l-.708.708l-4-4zm4 4.708l-4 4l-.708-.708l4-4zM18 12.5H6v-1h12z" /></svg>
                </div>
            </Card>
        </div>
    )
}

export default SelectCategory