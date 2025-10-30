import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { MessageSquareIcon, SheetIcon, CreditCardIcon } from './Icons';

const ChaoticBackground = () => {
    const icons = [
        { Icon: MessageSquareIcon, pos: { top: '10%', left: '15%' }, anim: { y: [0, -10, 0], rotate: [0, 5, 0] } },
        { Icon: SheetIcon, pos: { top: '20%', right: '10%' }, anim: { y: [0, 15, 0], rotate: [0, -8, 0] } },
        { Icon: CreditCardIcon, pos: { bottom: '15%', left: '20%' }, anim: { y: [0, -12, 0], rotate: [0, 10, 0] } },
        { Icon: MessageSquareIcon, pos: { bottom: '25%', right: '25%' }, anim: { y: [0, 8, 0], rotate: [0, -5, 0] } },
        { Icon: SheetIcon, pos: { top: '50%', left: '5%' }, anim: { y: [0, 10, 0], rotate: [0, 6, 0] } },
        { Icon: CreditCardIcon, pos: { top: '60%', right: '15%' }, anim: { y: [0, -15, 0], rotate: [0, -10, 0] } },
    ];

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {icons.map(({ Icon, pos, anim }, index) => (
                <motion.div
                    key={index}
                    className="absolute text-gray-200"
                    style={{ ...pos, scale: 0.75 }}
                    animate={anim}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut'
                    }}
                >
                    <Icon className="w-16 h-16 opacity-50" />
                </motion.div>
            ))}
        </div>
    );
};


const HeroSection: React.FC = () => {
    const { displayText, isFinished } = useTypingEffect("Sell out. Don't burn out.", 2000, true);

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
            <ChaoticBackground />
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-tighter">
                    {displayText}
                    <span className="inline-block w-1.5 h-10 md:h-16 bg-brand-dark animate-pulse ml-2" />
                </h1>
                {isFinished && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                            The back-office for your Instagram brand. Stop managing, start selling.
                        </p>
                        <a
                            href="#waitlist"
                            className="mt-8 inline-block px-10 py-4 text-lg font-bold text-white bg-brand-dark rounded-full hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
                        >
                            Get Early Access
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
