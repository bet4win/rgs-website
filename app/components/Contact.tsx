'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section px-6">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="input"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="input"
                            required
                        />
                    </div>

                    <div>
                        <textarea
                            placeholder="Message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="input resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white font-semibold hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/25"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
