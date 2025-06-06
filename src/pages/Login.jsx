import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/discovery");
    }
    return (
    <div className="h-screen flex items-center justify-center bg-[#16121F]">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-[#201c2c] text-white font-bold rounded hover:text-[#201c2c] hover:bg-white">
        Login
      </button>
    </div>
  );
}