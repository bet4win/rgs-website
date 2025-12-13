import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-[#2a2a2a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">
                        © 2024{' '}
                        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
                            Bet4.win Gaming
                        </Link>
                        . All rights reserved.
                    </p>

                    {/* BeGambleAware Badge */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-xs">
                            18+
                        </span>
                        <span>BeGambleAware</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
