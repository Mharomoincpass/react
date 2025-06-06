import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const mainOptionStyle = "font-semibold px-3 py-2 block transition-all duration-300 ease-in-out";
    const subOptionStyle = "text-sm px-3 py-1.5 block ml-5 transition-all duration-300 ease-in-out";

    const activeClass = "text-white bg-gradient-to-r from-[#5B5F97] to-[#7A7DB1] rounded-lg shadow-md";
    const inactiveClass = "text-[#A1A3C4] hover:text-white hover:bg-[#2A2D47] hover:rounded-lg";

    return (
        <div className="fixed w-1/5 h-screen top-0 left-0 bg-black text-white px-6 pt-8 space-y-8 shadow-xl z-10">
            <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7A7DB1] to-[#A1A3C4]">
                SocialCliq
            </h2>

            <hr className="border-t border-[#3A3D5A] opacity-50" />

            <div className="mb-6">
                <button className="text-[#A1A3C4] font-semibold mb-3 block text-sm tracking-wide uppercase">
                    Telescope
                </button>
                <div className="ml-2 space-y-1">
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
    );
}