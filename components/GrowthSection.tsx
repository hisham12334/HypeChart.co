import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const salesData = [
    { name: 'Eagle Tee', sales: 45 },
    { name: 'Logo Hoodie', sales: 32 },
    { name: 'Basic Cap', sales: 18 },
];

const sizeData = [
    { name: 'S', value: 25 },
    { name: 'M', value: 45 },
    { name: 'L', value: 30 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const GrowthSection: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

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
                        Your data is your superpower.
                    </h2>
                </motion.div>

                <motion.div
                    className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Business Insights */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-white p-6 rounded-2xl shadow-xl h-full">
                            <h3 className="text-xl font-bold mb-4">Know what works. Design what sells.</h3>
                            <div className="h-64 mb-8">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="sales" fill="#1a1a1a" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={sizeData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                                            {sizeData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Customer Insights */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-white p-6 rounded-2xl shadow-xl h-full">
                             <h3 className="text-xl font-bold mb-4">Identify your true fans. Reward them.</h3>
                             <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                                    <p className="font-bold">Alex R.</p>
                                    <span className="text-xs font-bold bg-purple-200 text-purple-800 px-2 py-1 rounded-full">VIP - 5 Orders</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                                    <p className="font-bold">Jenna B.</p>
                                    <span className="text-xs text-gray-500">1 Order</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                                    <p className="font-bold">Mike P.</p>
                                     <span className="text-xs text-gray-500">1 Order</span>
                                </div>
                                 <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                                    <p className="font-bold">Chloe T.</p>
                                     <span className="text-xs font-bold bg-green-200 text-green-800 px-2 py-1 rounded-full">3 Orders</span>
                                </div>
                             </div>
                             <button className="mt-6 w-full py-3 bg-brand-dark text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                                Send Early Access to VIPs
                             </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default GrowthSection;
