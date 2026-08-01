import { NavLink, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const isMainMenu = currentPath.startsWith("/mainMenu")
    const isSettings = currentPath.startsWith("/settings")

    const getMenuClass = (isActive: boolean) => {
        const baseClass = "flex justify-start p-3 px-4 gap-2 rounded-2xl items-center h-12 w-full"
        if (isActive) {
            return `${baseClass} bg-[rgb(145,198,236)] text-accent-foreground border-l-4 border-accent-foreground`
        } else {
            return `${baseClass} text-[rgb(65,72,77)] hover:text-[rgb(65,72,77)]/40 hover:bg-[rgb(145,198,236)]/20 hover:text-accent-foreground/60 transition-all transition-300`
        }
    }

    return (
        <nav className="w-full border border-zinc-300 p-4 flex flex-col gap-10 h-screen">
            <div className="flex items-center gap-4 pt-4">
                <img src="/logo.png" className="w-15 rounded-2xl " draggable={false} alt="Logo" />
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-2xl">Tsumugi</p>
                    <p className="text-sm">Learn kana in a fun way!</p>
                </div>
            </div>
            <div className="font-semibold text-sm w-full gap-2 flex flex-col">
                <NavLink to="/mainMenu" className={getMenuClass(isMainMenu)} end>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill={isMainMenu ? "oklch(0.4202 0.0820 237.0165)" : "none"} stroke={isMainMenu ? "oklch(0.4202 0.0820 237.0165)" : "rgb(65,72,77)"} strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Zm10-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z" /></svg>
                    <p>Main menu</p>
                </NavLink>
                <NavLink to="/settings" className={getMenuClass(isSettings)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill={isSettings ? "oklch(0.4202 0.0820 237.0165)" : "none"} stroke={isSettings ? "oklch(0.4202 0.0820 237.0165)" : "rgb(65,72,77)"} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.05 6.462a2 2 0 0 0 2.63-1.519l.32-1.72a9 9 0 0 1 3.998 0l.322 1.72a2 2 0 0 0 2.63 1.519l1.649-.58a9 9 0 0 1 2.001 3.46l-1.33 1.14a2 2 0 0 0 0 3.037l1.33 1.139a9 9 0 0 1-2.001 3.46l-1.65-.58a2 2 0 0 0-2.63 1.519L14 20.777a9 9 0 0 1-3.998 0l-.322-1.72a2 2 0 0 0-2.63-1.519l-1.649.58a9 9 0 0 1-2.001-3.46l1.33-1.14a2 2 0 0 0 0-3.036L3.4 9.342a9 9 0 0 1 2-3.46zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6" clip-rule="evenodd" /></svg>
                    <p>Setting</p>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;