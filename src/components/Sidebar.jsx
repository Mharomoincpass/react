import { NavLink } from "react-router-dom"

export default function Sidebar() {
    const mainOptionStyle = "font-semibold px-2 py-1 block";
    const subOptionStyle = "text-sm px-2 py-1 block ml-4";

    const activeClass = "text-white bg-[#66698D] border border-white rounded";
    const inactiveClass = "text-[#8E8FA6]"
    return (
        <div className="w-1/5 h-screen bg-[#1C1E2E] text-white px-8 pt-8 space-y-10">
            <h2 className="text-xl font-semibold mb-10">Dashboard</h2>

            <hr className="border-t border-[#8E8FA6]" />

            <div className="mb-6">
                <button className="text-[#8E8FA6] font-semibold mb-2 block">Telescope</button>
                <div className="ml-2 space-y-2">
                    <NavLink
                        to="/discovery"
                        className={({ isActive }) =>
                            `${subOptionStyle} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        Discovery
                    </NavLink>
                    <NavLink
                        to="/library"
                        className={({ isActive }) =>
                            `${subOptionStyle} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        Library
                    </NavLink>
                    <NavLink
                        to="/following"
                        className={({ isActive }) =>
                            `${subOptionStyle} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        Following
                    </NavLink>
                </div>
            </div>

            <div>
                <NavLink
                    to="/bakery"
                    className={({ isActive }) =>
                            `${mainOptionStyle} ${isActive ? activeClass : inactiveClass}`
                    }
                >
                    Bakery
                </NavLink>
            </div>
        </div>
    )
}