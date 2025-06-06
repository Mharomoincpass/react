import Layout from "../components/PageWrapper";
import { useState } from "react";

// Mock data for placeholder generated images (since actual generation isn't implemented)
const mockGeneratedImages = [
    "https://via.placeholder.com/300x300.png?text=Image+1",
    "https://via.placeholder.com/300x300.png?text=Image+2",
    "https://via.placeholder.com/300x300.png?text=Image+3",
    "https://via.placeholder.com/300x300.png?text=Image+4",
];

export default function Bakery() {
    const [prompt, setPrompt] = useState("");
    const [style, setStyle] = useState("realistic");
    const [resolution, setResolution] = useState("512x512");
    const [aspectRatio, setAspectRatio] = useState("1:1");
    const [numImages, setNumImages] = useState(4);
    const [generatedImages, setGeneratedImages] = useState([]);

    const handleGenerate = () => {
        // Simulate image generation by setting mock images
        setGeneratedImages(mockGeneratedImages.slice(0, numImages));
    };

    return (
        <Layout>
            <h1 className="text-4xl font-bold text-[#1C1E2E] tracking-tight mb-6">Bakery: AI Image Generation</h1>

            {/* Main Container */}
            <div className="space-y-6">
                {/* Prompt Input */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                    <label htmlFor="prompt" className="block text-lg font-semibold text-[#1C1E2E] mb-2">
                        Enter Your Prompt
                    </label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., A futuristic bakery with neon lights and floating cakes"
                        className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] transition-all duration-300 resize-none"
                    />
                </div>

                {/* Style and Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Style Selection */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                        <label className="block text-lg font-semibold text-[#1C1E2E] mb-2">Art Style</label>
                        <select
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] text-gray-700 transition-all duration-300"
                        >
                            <option value="realistic">Realistic</option>
                            <option value="cartoon">Cartoon</option>
                            <option value="abstract">Abstract</option>
                            <option value="painting">Painting</option>
                            <option value="sketch">Sketch</option>
                        </select>
                    </div>

                    {/* Advanced Settings */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                        <h3 className="text-lg font-semibold text-[#1C1E2E] mb-4">Advanced Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Resolution</label>
                                <select
                                    value={resolution}
                                    onChange={(e) => setResolution(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] text-gray-700"
                                >
                                    <option value="256x256">256x256</option>
                                    <option value="512x512">512x512</option>
                                    <option value="1024x1024">1024x1024</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Aspect Ratio</label>
                                <select
                                    value={aspectRatio}
                                    onChange={(e) => setAspectRatio(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] text-gray-700"
                                >
                                    <option value="1:1">1:1 (Square)</option>
                                    <option value="16:9">16:9 (Widescreen)</option>
                                    <option value="9:16">9:16 (Portrait)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Images</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="4"
                                    value={numImages}
                                    onChange={(e) => setNumImages(parseInt(e.target.value))}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] text-gray-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Generate Button */}
                <div className="text-center">
                    <button
                        onClick={handleGenerate}
                        className="bg-[#1C1E2E] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#2A2D47] transition-colors duration-300 shadow-lg"
                    >
                        Generate Images
                    </button>
                </div>

                {/* Generated Images Display */}
                {generatedImages.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-[#1C1E2E] mb-4">Generated Images</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {generatedImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <img
                                        src={image}
                                        alt={`Generated Image ${index + 1}`}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                    <div className="flex justify-between">
                                        <button className="bg-[#1C1E2E] text-white px-4 py-2 rounded-md hover:bg-[#2A2D47] transition-colors duration-300">
                                            Download
                                        </button>
                                        <button className="text-[#1C1E2E] border border-[#1C1E2E] px-4 py-2 rounded-md hover:bg-[#1C1E2E] hover:text-white transition-colors duration-300">
                                            Regenerate
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}