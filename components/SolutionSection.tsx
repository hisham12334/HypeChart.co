import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TShirtIcon, CopyIcon, CheckCircleIcon, UserCircleIcon, LinkIcon } from './Icons';

const SolutionSection: React.FC = () => {
    const [step, setStep] = useState(0);
    const [inventory, setInventory] = useState(30);

    React.useEffect(() => {
        const sequence = [
            () => setStep(1), // Show Admin Panel
            () => setStep(2), // Show Link Generated
            () => setStep(3), // Show Instagram Post
            () => setStep(4), // Show Customer View
            () => { setStep(5); setInventory(29); }, // Show Purchase and inventory drop
            () => setStep(6), // Show final text
        ];
        let i = 0;
        const interval = setInterval(() => {
            if (i < sequence.length) {
                sequence[i]();
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    const showAdmin = step >= 1;
    const showLink = step >= 2;
    const showInstaPost = step >= 3;
    const showCustomer = step >= 4;
    const showPurchase = step >= 5;
    const showFinalText = step >= 6;

    return (
        <section className="py-20 md:py-32 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center text-brand-dark tracking-tighter">
                        Reclaim your drop with a single link.
                    </h2>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Admin Panel */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[400px]">
                        <h3 className="font-bold text-xl mb-4 text-center">1. Set your inventory.</h3>
                        <AnimatePresence>
                            {showAdmin && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col space-y-4"
                                >
                                    <div className="flex items-center space-x-4 border p-3 rounded-lg">
                                        <TShirtIcon className="w-12 h-12 text-gray-400" />
                                        <p className="font-bold">Vintage Eagle Tee</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="border p-3 rounded-lg text-center">S: <span className="font-bold">20</span></div>
                                        <div className="border p-3 rounded-lg text-center ring-2 ring-brand-accent">M: <span className="font-bold">30</span></div>
                                        <div className="border p-3 rounded-lg text-center">L: <span className="font-bold">20</span></div>
                                    </div>
                                    <button className={`w-full py-3 font-bold rounded-lg text-white ${showLink ? 'bg-green-500' : 'bg-brand-dark'}`}>
                                        {showLink ? <span className="flex items-center justify-center"><CopyIcon className="w-5 h-5 mr-2" /> Link Generated</span> : 'Generate Link'}
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Share on Socials */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[400px]">
                        <h3 className="font-bold text-xl mb-4 text-center">2. Share your link.</h3>
                        <AnimatePresence>
                            {showInstaPost && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full max-w-xs mx-auto mt-4"
                                >
                                    <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-inner">
                                        {/* Header */}
                                        <div className="p-3 flex items-center space-x-3 border-b border-gray-100">
                                            <UserCircleIcon className="w-8 h-8 text-gray-500" />
                                            <span className="font-bold text-sm">yourbrand</span>
                                        </div>
                                        {/* Image */}
                                        <div className="bg-gray-50 aspect-square flex items-center justify-center">
                                            <TShirtIcon className="w-32 h-32 text-gray-400" />
                                        </div>
                                        {/* Caption */}
                                        <div className="p-4 text-sm space-y-3">
                                            <p><span className="font-bold">yourbrand</span> Vintage Eagle Tee drop is LIVE! 🦅</p>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5, type: 'spring' }}
                                                className="inline-block"
                                            >
                                                <span className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1.5 text-xs text-brand-dark font-semibold">
                                                    <LinkIcon className="w-4 h-4" />
                                                    hypechart.co/drop/xyz
                                                </span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Customer Experience */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 min-h-[400px]">
                        <h3 className="font-bold text-xl mb-4 text-center text-white">3. Customers buy instantly.</h3>
                        <AnimatePresence mode="wait">
                            {showCustomer && !showPurchase && (
                                <motion.div
                                    key="checkout"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white p-4 rounded-lg"
                                >
                                    <TShirtIcon className="w-24 h-24 mx-auto text-gray-500" />
                                    <h4 className="font-bold text-center mt-2">Vintage Eagle Tee</h4>
                                    <div className="flex justify-center my-3">
                                        <div className="border-2 border-brand-accent rounded-md px-4 py-1">Size M (In Stock: <span className="font-bold">{inventory}</span>)</div>
                                    </div>
                                    <button className="w-full py-3 bg-brand-accent font-bold text-white rounded-lg">Pay Now</button>
                                </motion.div>
                            )}
                            {showPurchase && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-full text-white pt-10"
                                >
                                    <CheckCircleIcon className="w-24 h-24 text-green-400" />
                                    <p className="mt-4 font-bold text-2xl">Purchase Complete!</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                
                <AnimatePresence>
                    {showFinalText && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-12 text-center"
                        >
                            <p className="text-xl md:text-2xl font-bold p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg inline-block">
                                Inventory is now {inventory}. Order confirmed. Zero DMs.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SolutionSection;