import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareIcon, SheetIcon, TShirtIcon } from './Icons';

const DmFlood = () => {
    const dms = ["Size M available?", "UPI ID?", "Can I pay?", "Did you get my address?", "is this still available?", "ship to canada?"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % dms.length);
        }, 1500);
        return () => clearInterval(timer);
    }, [dms.length]);

    return (
        <div className="relative w-full h-full bg-gray-800 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
            <MessageSquareIcon className="w-24 h-24 text-white/10" />
            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute bg-white shadow-lg rounded-lg p-3 text-sm"
                    style={{
                        top: `${Math.random() * 60 + 10}%`,
                        left: `${Math.random() * 50 + 10}%`,
                    }}
                >
                    {dms[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const SpreadsheetHell = () => {
    return (
        <div className="w-full h-full bg-white border-2 border-gray-200 rounded-2xl p-4 grid grid-cols-4 gap-2">
            <SheetIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-gray-100" />
            {[...Array(16)].map((_, i) => (
                <motion.div
                    key={i}
                    className="h-10 rounded"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        backgroundColor: i % 5 === 0 ? "#fecaca" : i % 3 === 0 ? "#bbf7d0" : "#e5e7eb",
                    }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                />
            ))}
        </div>
    );
};

const Overselling = () => {
    return (
        <div className="relative w-full h-full bg-gray-100 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
            <TShirtIcon className="w-32 h-32 text-gray-400" />
            <motion.div
                initial={{ scale: 3, opacity: 0, rotate: -30 }}
                whileInView={{ scale: 1, opacity: 1, rotate: -12 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
                className="absolute text-3xl font-extrabold text-red-500 border-4 border-red-500 px-4 py-2 uppercase"
            >
                Sold Out
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-4 right-4 bg-blue-500 text-white text-xs rounded-full px-3 py-1 shadow-lg flex items-center gap-1">
                <MessageSquareIcon className="w-3 h-3"/> new message
            </motion.div>
        </div>
    );
};

const PainCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <motion.div 
        className="w-full h-64 md:h-80 bg-white rounded-lg shadow-xl flex flex-col"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        }}
    >
        <div className="flex-grow p-2">{children}</div>
        <h3 className="text-center font-bold text-lg p-4 text-brand-dark">{title}</h3>
    </motion.div>
);


const PainSection: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center text-brand-dark tracking-tighter">
                        Your drop day feels like this, doesn't it?
                    </h2>
                </motion.div>
                
                <motion.div 
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* FIX: Explicitly pass children as a prop to satisfy TypeScript type checking. */}
                    <PainCard title="Endless DMs" children={<DmFlood />} />
                    <PainCard title="Spreadsheet Hell" children={<SpreadsheetHell />} />
                    <PainCard title="Accidental Overselling" children={<Overselling />} />
                </motion.div>
            </div>
        </section>
    );
};

export default PainSection;