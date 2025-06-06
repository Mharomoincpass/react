import Layout from "../components/PageWrapper";
import { useState } from "react";
import image1 from "../../src/images/Screenshot 2025-06-05 at 11.51.23 PM.png";
import image2 from "../../src/images/Screenshot 2025-06-05 at 11.51.12 PM.png";
import image3 from "../../src/images/Screenshot 2025-06-05 at 11.50.20 PM.png";

const mockSavedAds = [
    {
        id: 1,
        title: "Markom Express Agency India",
        image: image1,
        description: "🎯 Bringing Brands to Life—One Strategy at a Time. At MEA, it’s not just about services, it’s about solutions that spark engagement and drive real results. From digital dominance to on-ground brilliance—your brand’s success story starts here. Let’s build, boost, and break barriers together.",
        category: "Digital Marketing",
    },
   
];

export default function Library() {
    const [searchQuery, setSearchQuery] = useState("");
    const [savedAds, setSavedAds] = useState(mockSavedAds);

    // Filter ads based on search query
    const filteredAds = savedAds.filter((ad) =>
        ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ad.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to remove an ad from the library
    const handleRemoveAd = (id) => {
        setSavedAds(savedAds.filter((ad) => ad.id !== id));
    };

    return (
        <Layout>
            <h1 className="text-4xl font-bold text-[#1C1E2E] tracking-tight mb-6">Library</h1>

            {/* Search Bar */}
            <div className="mb-8">
                <div className="relative w-full max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search saved ads..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] transition-all duration-300"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>

            {/* Saved Ads Display */}
            {filteredAds.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredAds.map((ad) => (
                        <div
                            key={ad.id}
                            className="bg-white rounded-xl shadow-2xl p-4 flex flex-col space-y-3 border border-[#1C1E2E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <h2 className="text-xl font-semibold text-[#1C1E2E]">{ad.title}</h2>
                            <img
                                src={ad.image}
                                alt={ad.title}
                                className="rounded-md w-full object-cover h-80"
                            />
                            <p className="text-gray-700 text-sm line-clamp-5">{ad.description}</p>
                            <div className="flex justify-between">
                                <button className="bg-[#1C1E2E] text-white px-4 py-2 rounded-md hover:bg-[#2A2D47] transition-colors duration-300">
                                    View Ad
                                </button>
                                <button
                                    onClick={() => handleRemoveAd(ad.id)}
                                    className="text-[#1C1E2E] border border-[#1C1E2E] px-4 py-2 rounded-md hover:bg-[#1C1E2E] hover:text-white transition-colors duration-300"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <h3 className="text-lg text-gray-500">No saved ads found. Save ads to display here...</h3>
                </div>
            )}
        </Layout>
    );
}