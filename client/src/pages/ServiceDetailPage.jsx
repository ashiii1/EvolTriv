// src/pages/ServiceDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Add this
import products from "../data/products";
import Navbar from "../components/Navbar";

const slugify = (str = "") =>
    str
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

const ServiceDetailPage = () => {
    const { serviceSlug } = useParams();

    const allProducts = products.flatMap((cat) => cat.items);
    const product = allProducts.find((p) => slugify(p.name) === serviceSlug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service not found</h2>
                    <p className="mb-6">
                        We couldn't find that service. Try browsing our{" "}
                        <Link to="/products" className="text-[#118B50]">
                            All Services
                        </Link>
                        .
                    </p>
                    <Link
                        to="/products"
                        className="inline-block px-4 py-2 bg-[#118B50] text-white rounded"
                    >
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-300 text-black dark:bg-[#030326] pt-24 py-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Page Title */}
                <h1 className="text-3xl dark:text-white font-bold mb-4">
                    {product.name}
                </h1>

                <div className="mb-6">
                    <Link
                        to="/products"
                        className="text-sm dark:text-white text-gray-500 hover:text-[#118B50]"
                    >
                        ← Back to all services
                    </Link>
                </div>

                {/* Banner Image (unchanged) */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 dark:text-white object-cover rounded-lg mb-6"
                />

                {/* Description */}
                {product.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {product.description}
                    </p>
                )}

                {/* Key Features */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold dark:text-white mb-2">
                        Key Features
                    </h2>
                    <ul className="list-disc dark:text-white pl-6">
                        {product.features.map((f, i) => (
                            <li key={i} className="mb-1">
                                {f}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Technical Specifications */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold dark:text-white mb-4">
                        Technical Specifications
                    </h2>
                    <div className="md:flex dark:text-white md:items-start gap-6">
                        {/* Left Side Big Square Image */}
                        <motion.img
                            src={product.imageBeforeSpecs}
                            alt="Technical Specifications"
                            className="w-[500px] max-h-[500px] object-contain rounded-lg"
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ amount: 0.2 }}   // 👈 changed
                        />


                        {/* Specifications List */}
                        <div className="md:w-1/2 dark:text-white grid gap-4">
                            {Object.entries(product.specifications).map(([k, v]) => (
                                <div
                                    key={k}
                                    className="bg-gray-50 dark:text-white dark:bg-[#07103b] p-4 rounded"
                                >
                                    <div className="text-sm dark:text-gray-400 text-gray-500">
                                        {k}
                                    </div>
                                    <div className="font-medium dark:text-white">{v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section>
                    <h2 className="text-2xl dark:text-white font-semibold mb-4">
                        Benefits
                    </h2>
                    <div className="md:flex md:items-start gap-6">
                        {/* Benefits List */}
                        <div className="md:w-1/2 dark:text-white grid gap-4">
                            {product.benefits.map((b, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-gray-50 dark:bg-[#07103b] rounded"
                                >
                                    <h3 className="font-medium">{b.title}</h3>
                                    <p className="text-sm text-gray-500">{b.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Side Big Square Image */}
                        <div className="md:w-1/2 flex justify-end mb-4 md:mb-0">
                            <motion.img
                                src={product.imageBeforeBenefits}
                                alt="Benefits"
                                className="w-[800px] h-[300px] object-contain rounded-lg"
                                initial={{ x: 150, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ amount: 0.2 }}   // 👈 changed
                            />

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
