// src/components/VideoShowCase.jsx
export default function VideoShowCase({ youtubeLink }) {
    return (
        <section className="py-20 bg-gradient-to-r from-[#f7f2ef] via-[#f0e7e2] to-[#ece0d9]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#653332] mb-6">
                    Ah Phyay YouTube
                </h2>
                <p className="text-gray-700 text-md md:text-lg max-w-2xl mx-auto mb-4">
                    Now, We are live on YouTube channel named "Ah Phyay". You can subscribe by getting
                    entertainment of our hand crafted art process.
                </p>
                <a
                    href="https://www.youtube.com/watch?v=EJJAXKb8xz8" // Replace with your actual YouTube channel URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block my-5 py-2 px-6 bg-[#653332] text-white rounded-full font-medium hover:bg-[#7f4540] transition"
                >
                    Subscribe Now
                </a>


                <div className="relative w-full aspect-video md:w-3/4 mx-auto rounded-xl overflow-hidden shadow-2xl mt-10">
                    <iframe
                        className="w-full h-full rounded-xl"
                        src={youtubeLink}
                        title="Ah Phyay YouTube"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* Optional decorative play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#653332]/50 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-8 md:border-l-10 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
