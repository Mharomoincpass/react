import Layout from "../components/PageWrapper";
import { useState } from "react";
import image1 from "../../src/images/Screenshot 2025-06-05 at 11.51.23 PM.png";
import image2 from "../../src/images/Screenshot 2025-06-05 at 11.51.12 PM.png";
import image3 from "../../src/images/Screenshot 2025-06-05 at 11.50.20 PM.png";

// Mock data for followed advertisers and their ads
const mockFollowedAdvertisers = [
    {
        id: 1,
        name: "Markom Express Agency India",
        category: "Digital Marketing",
        ads: [
            {
                id: 101,
                title: "Brand Boost Campaign",
                image: image1,
                description: "🎯 Bringing Brands to Life—One Strategy at a Time. From digital dominance to on-ground brilliance—your brand’s success story starts here.",
                likes: 245,
                shares: 67,
                posted: "2025-06-04",
            },
            {
                id: 102,
                title: "Digital Dominance Ad",
                image: image1,
                description: "Let’s build, boost, and break barriers together with MEA’s innovative strategies.",
                likes: 180,
                shares: 45,
                posted: "2025-06-03",
            },
        ],
    },
    {
        id: 2,
        name: "Klever Marketing",
        category: "Social Media",
        ads: [
            {
                id: 201,
                title: "Social Media Blitz",
                image: image2,
                description: "✨ Your brand deserves more than templates—strategy, design, and growth with Media UpShift.",
                likes: 320,
                shares: 89,
                posted: "2025-06-04",
            },
        ],
    },
    {
        id: 3,
        name: "Digit Weaver",
        category: "Web Development",
        ads: [
            {
                id: 301,
                title: "Digital Experience Ad",
                image: image3,
                description: "At Arôwh, we craft digital experiences that connect, convert, and grow.",
                likes: 150,
                shares: 34,
                posted: "2025-06-02",
            },
        ],
    },
];

export default function Following() {
    const [searchQuery, setSearchQuery] = useState("");
    const [followedAdvertisers, setFollowedAdvertisers] = useState(mockFollowedAdvertisers);

    // Filter advertisers based on search query
    const filteredAdvertisers = followedAdvertisers.filter((advertiser) =>
        advertiser.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        advertiser.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to unfollow an advertiser
    const handleUnfollow = (id) => {
        setFollowedAdvertisers(followedAdvertisers.filter((advertiser) => advertiser.id !== id));
    };

    return (
        <Layout>
            <h1 className="text-4xl font-bold text-[#1C1E2E] tracking-tight mb-6">Following</h1>

            {/* Search Bar */}
            <div className="mb-8">
                <div className="relative w-full max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search followed advertisers..."
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

            {/* Followed Advertisers and Their Ads */}
            {filteredAdvertisers.length > 0 ? (
                <div className="space-y-8">
                    {filteredAdvertisers.map((advertiser) => (
                        <div key={advertiser.id} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                            {/* Advertiser Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-[#1C1E2E]">{advertiser.name}</h2>
                                    <p className="text-sm text-gray-500">{advertiser.category}</p>
                                </div>
                                <button
                                    onClick={() => handleUnfollow(advertiser.id)}
                                    className="text-[#1C1E2E] border border-[#1C1E2E] px-4 py-2 rounded-md hover:bg-[#1C1E2E] hover:text-white transition-colors duration-300"
                                >
                                    Unfollow
                                </button>
                            </div>

                            {/* Advertiser's Ads */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {advertiser.ads.map((ad) => (
                                    <div
                                        key={ad.id}
                                        className="bg-white rounded-xl shadow-lg p-4 flex flex-col space-y-3 border border-[#1C1E2E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <h3 className="text-lg font-semibold text-[#1C1E2E]">{ad.title}</h3>
                                        <img
                                            src={ad.image}
                                            alt={ad.title}
                                            className="rounded-md w-full object-cover h-64"
                                        />
                                        <p className="text-gray-700 text-sm line-clamp-3">{ad.description}</p>
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>❤️ {ad.likes} Likes</span>
                                            <span>↗️ {ad.shares} Shares</span>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Posted: {ad.posted}
                                        </div>
                                        <button className="bg-[#1C1E2E] text-white px-4 py-2 rounded-md hover:bg-[#2A2D47] transition-colors duration-300">
                                            View Details
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <h3 className="text-lg text-gray-500">You’re not following any advertisers yet. Start following to track their ads here...</h3>
                </div>
            )}
        </Layout>
    );
}