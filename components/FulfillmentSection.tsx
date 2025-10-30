import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailIcon } from './Icons';

const FulfillmentSection: React.FC = () => {
    const [status, setStatus] = React.useState('Paid');
    const [showNotification, setShowNotification] = React.useState(false);

    React.useEffect(() => {
        const timer1 = setTimeout(() => {
            setStatus('Shipped');
        }, 2000);
        const timer2 = setTimeout(() => {
            setShowNotification(true);
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };
    
    const orders = [
        { customer: 'Alex R.', item: 'Vintage Eagle Tee', size: 'M' },
        { customer: 'Jenna B.', item: 'Logo Hoodie', size: 'L' },
        { customer: 'Mike P.', item: 'Vintage Eagle Tee', size: 'M' },
    ];

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
                        From Paid to Shipped. Automatically.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-center text-gray-600">All your orders, finally in one place. Keep customers happy, without the effort.</p>
                </motion.div>

                <div className="mt-16 relative bg-slate-100 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200">
                    <motion.div
                        className="flex flex-col space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {orders.map((order, index) => (
                             <motion.div key={index} className="bg-white rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 items-center gap-4 shadow-sm" variants={itemVariants}>
                                <div className="font-bold">{order.customer}</div>
                                <div className="text-gray-600">{order.item}</div>
                                <div className="text-gray-600">Size: {order.size}</div>
                                {index === 0 ? (
                                    <div className={`px-3 py-1 text-sm font-bold rounded-full text-center transition-colors duration-500 ${status === 'Paid' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                                        {status}
                                    </div>
                                ) : (
                                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-bold rounded-full text-center">Paid</div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <AnimatePresence>
                        {showNotification && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                                    animate={{ opacity: 1, scale: 1, x: "150%", y: "50%" }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                                    className="absolute top-1/2 left-1/4 text-brand-accent"
                                >
                                    <MailIcon className="w-12 h-12" />
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="absolute top-[60%] right-[10%] bg-white p-3 rounded-lg shadow-2xl text-sm"
                                >
                                    <p className="font-bold">Your order has shipped!</p>
                                    <p className="text-gray-500">Track it here...</p>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FulfillmentSection;
