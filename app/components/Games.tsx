'use client';

import { useState } from 'react';

const games = [
    { name: 'Glittering Christmas', color: 'from-red-500 to-green-600', emoji: '🎄' },
    { name: 'Gold Wagon Wins', color: 'from-yellow-500 to-amber-600', emoji: '🚂' },
    { name: 'Hammer Strike', color: 'from-orange-500 to-red-600', emoji: '🔨' },
    { name: 'Lamp of Riches', color: 'from-purple-500 to-blue-600', emoji: '🪔' },
    { name: 'Paws of Victory', color: 'from-amber-400 to-orange-500', emoji: '🐾' },
    { name: 'Tusk of Fortune', color: 'from-teal-500 to-emerald-600', emoji: '🐘' },
    { name: 'Mafia Fortune', color: 'from-gray-700 to-gray-900', emoji: '🎩' },
    { name: 'Book of Mummies', color: 'from-amber-600 to-yellow-500', emoji: '📜' },
    { name: 'Catch & Cash', color: 'from-blue-500 to-cyan-500', emoji: '🎣' },
    { name: 'Fields of Fortune', color: 'from-green-500 to-lime-500', emoji: '🌾' },
    { name: "Jester's Fortune", color: 'from-pink-500 to-purple-500', emoji: '🃏' },
    { name: 'Wanted Reels', color: 'from-amber-700 to-orange-600', emoji: '🤠' },
];

export default function Games() {
    const [currentPage, setCurrentPage] = useState(0);
    const gamesPerPage = 6;
    const totalPages = Math.ceil(games.length / gamesPerPage);

    const displayedGames = games.slice(
        currentPage * gamesPerPage,
        (currentPage + 1) * gamesPerPage
    );

    return (
        <section id="games" className="section px-6 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Games</h2>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                            disabled={currentPage === 0}
                            className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-500/50 transition-colors"
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                            disabled={currentPage === totalPages - 1}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-purple-600 transition-all"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {displayedGames.map((game, index) => (
                        <div key={index} className="game-card group">
                            <div className={`aspect-square bg-gradient-to-br ${game.color} rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full blur-xl" />
                                <div className="absolute bottom-2 left-2 w-12 h-12 bg-white/10 rounded-full blur-xl" />

                                {/* Game content */}
                                <div className="relative z-10 text-6xl mb-2">{game.emoji}</div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                    <h3 className="text-white text-xs font-semibold text-center truncate">{game.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Page indicator */}
                <div className="flex justify-center mt-8 gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentPage ? 'bg-purple-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
