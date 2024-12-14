import React from 'react';
import { Coffee, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RestaurantCard } from '../components/RestaurantCard';

export function HomePage() {
  return (
    <>
      <div className="bg-white text-black p-6 border-4 border-[#FF6B6B] rounded mb-8">
        <marquee className="text-xl text-red-600 font-bold mb-4">
          🔥 HOT DEAL! Free delivery on orders above $25! Order NOW! 🔥
        </marquee>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-4 bg-yellow-100 border-2 border-dashed border-red-500 rounded">
            <Coffee className="w-16 h-16 mx-auto mb-4 text-[#FF6B6B]" />
            <h2 className="text-2xl font-bold mb-2">Restaurant Partners</h2>
            <p>Join our growing network of 1,000+ restaurants!</p>
            <div className="mt-4 animate-pulse">
              <Link to="/restaurants" className="inline-block bg-[#FF6B6B] text-white px-6 py-2 rounded shadow-lg hover:bg-red-700">
                Partner With Us!
              </Link>
            </div>
          </div>

          <div className="text-center p-4 bg-yellow-100 border-2 border-dashed border-red-500 rounded">
            <Utensils className="w-16 h-16 mx-auto mb-4 text-[#FF6B6B]" />
            <h2 className="text-2xl font-bold mb-2">Order Food Now!</h2>
            <p>Delicious food delivered to your doorstep!</p>
            <div className="mt-4 animate-pulse">
              <Link to="/order" className="inline-block bg-[#FF6B6B] text-white px-6 py-2 rounded shadow-lg hover:bg-red-700">
                Order Now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-6 border-4 border-[#FF6B6B] rounded mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#FF6B6B]">⭐ Featured Restaurants ⭐</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Pizza Palace",
              image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
              rating: "⭐⭐⭐⭐⭐"
            },
            {
              name: "Burger Bonanza",
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
              rating: "⭐⭐⭐⭐"
            },
            {
              name: "Sushi Supreme",
              image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop",
              rating: "⭐⭐⭐⭐⭐"
            }
          ].map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}