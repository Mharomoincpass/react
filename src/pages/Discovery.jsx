import Layout from "../components/PageWrapper";
import image1 from "../../src/images/Screenshot 2025-06-05 at 11.51.23 PM.png";
import image2 from "../../src/images/Screenshot 2025-06-05 at 11.51.12 PM.png";
import image3 from "../../src/images/Screenshot 2025-06-05 at 11.50.20 PM.png";

const mockData = [
    {
        title: "Markom Express Agency India",
        image: image1,
        description: "🎯 Bringing Brands to Life—One Strategy at a Time. At MEA, it’s not just about services, it’s about solutions that spark engagement and drive real results. From digital dominance to on-ground brilliance—your brand’s success story starts here. Let’s build, boost, and break barriers together.",
        category: "Digital Marketing"
    },
    {
        title: "Klever Marketing",
        image: image2, 
        description: "✨ Your brand deserves more than templates and filters—it deserves strategy, design, and growth. At Media UpShift, we specialize in creating high-converting, visually stunning, and SEO-optimized social media experiences. From packaging to post—every element is crafted to elevate premium brands like yours.",
        category: "Social Media"
    },
    {
        title: "Digit Weaver",
        image: image3,
        description: "At Arôwh, we craft digital experiences that connect, convert, and grow. We're a creative marketing agency specializing in UI/UX design, web development, SEO, social media design, and logo & branding - everything your brand needs to shine online.",
        category: "Web Development"
    },
];

export default function Discovery() {
    return (
        <Layout>
            <h1 className="text-4xl font-bold text-[#1C1E2E] tracking-tight">Discovery</h1>

            {/* Search Bar with Icon and Filter Options */}
            <div className="mt-6 mb-8 flex items-center space-x-4">
                <div className="relative w-1/2">
                    <input
                        type="text"
                        placeholder="Enter your keyword..."
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

                {/* Filter Options */}
                <div className="flex space-x-2">
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] text-gray-700"
                    >
                        <option value="">Filter by Category</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="social-media">Social Media</option>
                        <option value="web-development">Web Development</option>
                    </select>
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E] text-gray-700"
                    >
                        <option value="">Sort By</option>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                        <option value="popular">Popular</option>
                    </select>
                </div>
            </div>

            {/* Ad Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockData.map((ad, index) => (
                    <div
                        key={index}
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
                                See Add
                            </button>
                            <button className="text-[#1C1E2E] border border-[#201c2c] px-4 py-2 rounded-md hover:bg-[#1C1E2E] hover:text-white transition-colors duration-300">
                                Save Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}