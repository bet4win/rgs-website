import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#003380]/20 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#001F5C]/10 rounded-full filter blur-[80px]" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Meet The Next Generation Games{' '}
                            {/* <span className="bg-gradient-to-r from-[#0066CC] to-[#003380] bg-clip-text text-transparent">
                                that players love.
                            </span> */}
                        </h1>

                        <p className="text-lg text-gray-400 mb-4">
                            Where technology meets entertainment.
                        </p>

                        <p className="text-gray-500 mb-8 max-w-lg">
                            We are a casino game provider studio crafting the next generation of games for the online casino industry.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link href="#games" className="btn-primary inline-flex items-center gap-2">
                                Explore games
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="#contact" className="btn-secondary">
                                Let&apos;s Talk
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-12">
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Certified RNG
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Math models
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Sweepstakes & Social-Friendly
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-12">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0066CC] to-[#003380] bg-clip-text text-transparent">
                                    75+
                                </div>
                                <div className="text-gray-400 text-sm mt-1">Live Games</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0066CC] to-[#003380] bg-clip-text text-transparent">
                                    10+
                                </div>
                                <div className="text-gray-400 text-sm mt-1">Global Markets</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="phone-mockup w-72 md:w-80 animate-float">
                            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 aspect-[9/19]">
                                {/* Slot Game Display */}
                                <div className="h-full flex flex-col">
                                    {/* Game Header */}
                                    <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 text-center">
                                        <h3 className="text-white font-bold text-lg">HAMMER STRIKE</h3>
                                    </div>

                                    {/* Slot Reels */}
                                    <div className="flex-1 bg-gradient-to-b from-amber-800 to-amber-900 p-2 grid grid-cols-5 gap-1">
                                        {[...Array(15)].map((_, i) => (
                                            <div key={i} className="bg-amber-700/50 rounded-lg flex items-center justify-center text-2xl">
                                                {['💎', '🔔', '7️⃣', '🍒', '⭐'][i % 5]}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Game Footer */}
                                    <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-3 flex justify-between text-white text-xs">
                                        <div className="text-center">
                                            <div className="text-amber-400">BALANCE</div>
                                            <div>$1,000.00</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-amber-400">TOTAL BET</div>
                                            <div>$10.00</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-amber-400">WIN</div>
                                            <div>$0.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
