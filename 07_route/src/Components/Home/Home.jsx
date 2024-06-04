import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Explore the World</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Your Travel Guide</h2>
          <p className="text-gray-300 mb-4">
            Discover amazing places around the globe with our comprehensive travel guide. Whether you're looking for adventure, relaxation, or cultural experiences, we've got you covered.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mana_Village%2C_Badrinath%2C_Uttarakhand%2C_India.jpeg/1200px-Mana_Village%2C_Badrinath%2C_Uttarakhand%2C_India.jpeg" alt="Travel" className="w-full rounded-lg mb-4"/>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Start Your Journey
          </button>
        </section>

        {/* Travel Destinations Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-4">Top Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hXjziU5nUZEwGT9kUljw2HVWsnVCV4VRzg&s" alt="Destination 1" className="w-full rounded-lg mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Paris, France</h3>
              <p className="text-gray-300">
                The city of love, known for its iconic Eiffel Tower, art museums, and charming cafes.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <img src="https://i.ytimg.com/vi/HAC59fvIns4/maxresdefault.jpg" alt="Destination 2" className="w-full rounded-lg mb-4"/>
              <h3 className="text-2xl font-bold mb-2">Kyoto, Japan</h3>
              <p className="text-gray-300">
                A beautiful city that blends ancient temples with stunning natural scenery.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV17JUZ1YidpjCZ83oy_xFHpzGIlnzglwYUw&s" alt="Destination 3" className="w-full rounded-lg mb-4"/>
              <h3 className="text-2xl font-bold mb-2">New York, USA</h3>
              <p className="text-gray-300">
                The city that never sleeps, offering world-class entertainment, dining, and shopping.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <p className="text-gray-300 mb-2">
                "This travel guide helped me plan the perfect trip to Paris. I can't recommend it enough!"
              </p>
              <p className="text-gray-400 text-sm">- Alice Johnson</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <p className="text-gray-300 mb-2">
                "Kyoto was breathtaking, and the tips provided made my visit so much smoother."
              </p>
              <p className="text-gray-400 text-sm">- Michael Smith</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow">
              <p className="text-gray-300 mb-2">
                "New York was a blast! This guide showed me all the must-see spots and hidden gems."
              </p>
              <p className="text-gray-400 text-sm">- Sarah Lee</p>
            </div>
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

export default Home;
