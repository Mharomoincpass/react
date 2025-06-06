import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 ml-[20%] bg-black p-4 min-h-screen overflow-y-auto">
                <div className="bg-white rounded-2xl p-6 shadow-md min-h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}