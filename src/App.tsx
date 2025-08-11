import React from 'react';

// LandingPage Component
const LandingPage = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-blue-600 text-white p-6">
                <h1 className="text-3xl font-bold text-center">Clear Water</h1>
                <nav className="flex justify-center space-x-4 mt-4">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300 text-white p-10">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold">Experience the Clarity of Pure Water</h2>
                    <p className="mt-4 text-lg">Join us in our mission to preserve the beauty and purity of our water sources.</p>
                    <a href="#services" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded shadow-lg transition-transform transform hover:scale-105">Learn More</a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-6 bg-gray-100">
                <h3 className="text-2xl font-bold text-center">About Us</h3>
                <p className="mt-4 text-center max-w-2xl mx-auto">We are dedicated to providing clean and clear water solutions for communities. Our approach is sustainable and eco-friendly, ensuring that future generations can enjoy the same resources.</p>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-6">
                <h3 className="text-2xl font-bold text-center">Our Services</h3>
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    {/* Service Card 1 */}
                    <div className="bg-white shadow-md p-6 rounded-lg transform transition-transform hover:scale-105">
                        <h4 className="font-semibold text-lg">Water Testing</h4>
                        <p className="mt-2">We provide comprehensive water testing services to ensure safety and quality.</p>
                    </div>
                    {/* Service Card 2 */}
                    <div className="bg-white shadow-md p-6 rounded-lg transform transition-transform hover:scale-105">
                        <h4 className="font-semibold text-lg">Purification Systems</h4>
                        <p className="mt-2">Install our state-of-the-art purification systems for cleaner water at home.</p>
                    </div>
                    {/* Service Card 3 */}
                    <div className="bg-white shadow-md p-6 rounded-lg transform transition-transform hover:scale-105">
                        <h4 className="font-semibold text-lg">Education Programs</h4>
                        <p className="mt-2">Join our workshops to learn about water conservation and sustainability.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-6 bg-gray-100">
                <h3 className="text-2xl font-bold text-center">Get in Touch</h3>
                <form className="mt-8 max-w-md mx-auto">
                    <input type="text" placeholder="Your Name" className="border border-gray-400 p-2 w-full rounded mb-4" required />
                    <input type="email" placeholder="Your Email" className="border border-gray-400 p-2 w-full rounded mb-4" required />
                    <textarea placeholder="Your Message" className="border border-gray-400 p-2 w-full rounded mb-4" required></textarea>
                    <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">Send Message</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-600 text-white text-center p-4">
                <p>&copy; 2023 Clear Water. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;