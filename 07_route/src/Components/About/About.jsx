import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            At Travel Guide, our mission is to inspire and empower travelers to explore the world. We provide comprehensive guides, tips, and resources to make your travel experience seamless and unforgettable.
          </p>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-300 mb-4">
            We are a team of passionate travelers and travel experts dedicated to bringing you the best travel content. Our team has visited numerous destinations around the globe, gathering firsthand experiences and insider tips to share with our readers.
          </p>
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>In-depth travel guides for top destinations</li>
            <li>Tips and advice for budget and luxury travel</li>
            <li>Personalized travel itineraries</li>
            <li>Recommendations for hotels, restaurants, and activities</li>
          </ul>
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-300 mb-4">
            We believe in responsible and sustainable travel. Our content promotes cultural awareness, respect for local customs, and environmentally friendly practices.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mana_Village%2C_Badrinath%2C_Uttarakhand%2C_India.jpeg/1200px-Mana_Village%2C_Badrinath%2C_Uttarakhand%2C_India.jpeg" alt="Travel" className="w-full rounded-lg mb-4"/>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-4">
            Become a part of our travel community and stay updated with the latest travel news, tips, and exclusive offers. Follow us on social media and subscribe to our newsletter for more travel inspiration.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300">Follow on Facebook</a>
            <a href="#" className="text-white bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-300">Follow on Twitter</a>
            <a href="#" className="text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition duration-300">Follow on Instagram</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2024 Travel Guide. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;
