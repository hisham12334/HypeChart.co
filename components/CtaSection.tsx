import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const trimmedEmail = email.trim();
        const trimmedWhatsapp = whatsapp.trim();

        if (!trimmedEmail && !trimmedWhatsapp) {
            setError('Please provide either an email or a WhatsApp number.');
            return;
        }

        if (trimmedEmail && !/\S+@\S+\.\S+/.test(trimmedEmail)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (trimmedWhatsapp && !/^\+?[0-9\s-]{7,15}$/.test(trimmedWhatsapp)) {
            setError('Please enter a valid phone number.');
            return;
        }

        setLoading(true);

        // --- Backend Integration Simulation ---
        // In a real application, this data would be sent to a backend API.
        console.log('Submitting to waitlist database:', { 
            email: trimmedEmail || null, 
            whatsapp: trimmedWhatsapp || null 
        });
        
        // Simulate a network request
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section id="waitlist" className="py-20 md:py-32 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tighter">
                        Stop running a business from your DMs.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                        Get the tools to scale your passion. Reclaim your time. Focus on what you love.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {!submitted ? (
                        <div className="max-w-lg mx-auto bg-brand-light p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold">Be the first to use HypeChart.</h3>
                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-brand-accent focus:outline-none"
                                        aria-label="Email Address"
                                        disabled={loading}
                                    />
                                </div>
                                <div className="relative flex items-center">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Enter your WhatsApp number"
                                        value={whatsapp}
                                        onChange={(e) => setWhatsapp(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-brand-accent focus:outline-none"
                                        aria-label="WhatsApp Number"
                                        disabled={loading}
                                    />
                                </div>
                                 {error && <p className="text-red-500 text-sm text-left -mt-2">{error}</p>}
                                <button type="submit" className="w-full px-8 py-3 bg-brand-dark text-white font-bold rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Join The Waitlist'}
                                </button>
                            </form>
                             <p className="mt-4 text-xs text-gray-500">No spam. Just an invite when we're ready.</p>
                        </div>
                    ) : (
                        <div className="max-w-lg mx-auto bg-green-100 p-8 rounded-2xl border border-green-300">
                           <h3 className="text-2xl font-bold text-green-800">You're on the list!</h3>
                           <p className="mt-2 text-green-700">Thanks for signing up. We'll be in touch soon.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;
