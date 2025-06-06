import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-[#1C1E2E] p-4">
        <div className="bg-white rounded-2xl p-6 shadow-md h-full">
          {children}
        </div>
      </div>
    </div>
  );
}