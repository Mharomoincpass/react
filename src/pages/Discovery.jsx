import Layout from "../components/PageWrapper";
import image1 from "../../src/images/Screenshot 2025-06-05 at 11.51.23 PM.png"
import image2 from "../../src/images/Screenshot 2025-06-05 at 11.51.12 PM.png"
import image3 from "../../src/images/Screenshot 2025-06-05 at 11.50.20 PM.png"

const mockData = [
    {
        title: "Markom Express Agency India",
        image: image1,
        description: "🎯 Bringing Brands to Life—One Strategy at a Time.At MEA, it’s not just about services, it’s about solutions that spark engagement and drive real results.From digital dominance to on-ground brilliance—your brand’s success story starts here. Let’s build, boost, and break barriers together."
    },
    {
        title: "Klever Marketing",
        image: image2,
        description: "✨ Your brand deserves more than templates and filters—it deserves strategy, design, and growth.At Media UpShift, we specialize in creating high-converting, visually stunning, and SEO-optimized social media experiences.From packaging to post—every element is crafted to elevate premium brands like yours."
    },
    {
        title: "Digit Weaver",
        image: image3,
        description: "At Arôwh, we craft digital experiences that connect, convert, and grow. We're a creative marketing agency specializing in UI/UX design, web development, SEO, social media design, and logo & branding - everything your brand needs to shine online."
    },
]

export default function Discovery() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Discovery</h1>
            <div className="mt-4 mb-8">
                <input
                    type="text"
                    placeholder="Enter your keyword..."
                    className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C1E2E]"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { mockData.map((ad, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-xl shadow-2xl p-4 flex flex-col space-y-3 border border-[#1C1E2E]"
                    >
                        <h2 className="text-xl font-semibold">{ ad.title }</h2>
                        <img
                            src={ ad.image }
                            alt={ ad.title }
                            className="rounded-md w-full object-cover h-80"
                        />
                        <p className="text-gray-700 text-sm line-clamp-5">{ ad.description }</p>

                        <div className="flex justify-between">
                            <button className="bg-[#1C1E2E] text-white px-4 py-2 rounded-md">
                                See Add
                            </button>
                            <button className="text-[#1C1E2E] border border-[#201c2c] px-4 py-2 rounded-md">
                                Save Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}