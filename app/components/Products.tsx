export default function Products() {
    const products = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            title: 'RGS Platform',
            description: 'Robust RGS for operators with session management, configurable RTP profiles, and secure billing.',
            features: ['Financial API', 'Multi-currency', 'Audit logs & tamper-proof'],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: 'Content Catalog',
            description: 'Slots, Poker, Bingo, Table Games — optimized for mobile and desktop with adaptive art assets.',
            features: ['Sweepstakes & Social-friendly', 'GLI/BMM certified titles', 'Localization-ready'],
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Platform Ops',
            description: 'Game manager, telemetry, player segmentation, fraud detection and 24/7 support.',
            features: ['Dashboard & Analytics', 'Revenue scheduling', 'SLAs & monitoring'],
        },
    ];

    return (
        <section id="products" className="section px-6 bg-[#0f0f0f]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Products</h2>
                    <p className="text-gray-400 max-w-2xl">
                        RGS platform, Aggregation API, Content Catalog, Player Analytics, Ops Dashboard.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="card group">
                            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500/20 transition-colors">
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                            <ul className="space-y-2">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
