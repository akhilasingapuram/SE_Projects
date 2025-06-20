import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with black truffle, parmesan, and herb aioli",
        price: "$18"
      },
      {
        name: "Seared Scallops",
        description: "Pan-seared scallops with cauliflower purée and pancetta crisps",
        price: "$24"
      },
      {
        name: "Duck Liver Parfait", 
        description: "Smooth duck liver parfait with cherry compote and brioche toast",
        price: "$22"
      },
      {
        name: "Burrata Caprese",
        description: "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
        price: "$20"
      }
    ],
    mains: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "Prime wagyu tenderloin with roasted bone marrow and red wine jus",
        price: "$85"
      },
      {
        name: "Wild Salmon Wellington",
        description: "Atlantic salmon wrapped in pastry with spinach and dill cream sauce",
        price: "$42"
      },
      {
        name: "Rack of Lamb",
        description: "Herb-crusted rack of lamb with ratatouille and rosemary jus",
        price: "$48"
      },
      {
        name: "Lobster Risotto",
        description: "Creamy risotto with fresh lobster, saffron, and microgreens",
        price: "$52"
      }
    ],
    desserts: [
      {
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla bean ice cream",
        price: "$16"
      },
      {
        name: "Tiramisu Deconstructed",
        description: "Modern interpretation with espresso caviar and mascarpone mousse",
        price: "$14"
      },
      {
        name: "Lemon Tart",
        description: "Silky lemon curd tart with candied lemon and meringue",
        price: "$12"
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Fresh seasonal fruits with pastry cream and honey glaze",
        price: "$13"
      }
    ],
    beverages: [
      {
        name: "Wine Pairing Menu",
        description: "Curated selection of wines paired with your meal",
        price: "$65"
      },
      {
        name: "Craft Cocktails",
        description: "House-crafted cocktails with premium spirits and fresh ingredients",
        price: "$16-22"
      },
      {
        name: "Artisan Coffee",
        description: "Single-origin coffee beans roasted in-house",
        price: "$6"
      },
      {
        name: "Premium Tea Selection",
        description: "Curated collection of fine teas from around the world",
        price: "$8"
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted dishes, made with the finest ingredients 
            and prepared by our award-winning culinary team.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 mx-2 mb-4 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <span className="text-2xl font-bold text-amber-600">{item.price}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold text-lg hover:bg-amber-700 transition-all hover:scale-105 shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;