import React from 'react';
import { RestaurantCard } from '../components/RestaurantCard';

const restaurants = [
  {
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    description: "Best pizzas in town! Try our famous pepperoni!"
  },
  {
    name: "Burger Bonanza",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    rating: "⭐⭐⭐⭐",
    description: "Juicy burgers with fresh ingredients!"
  },
  {
    name: "Sushi Supreme",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    description: "Authentic Japanese sushi and rolls"
  },
  {
    name: "Taco Time",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop",
    rating: "⭐⭐⭐⭐",
    description: "Traditional Mexican street tacos"
  },
  {
    name: "Pasta Paradise",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=300&h=200&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    description: "Authentic Italian pasta dishes"
  },
  {
    name: "Curry Corner",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    description: "Spicy Indian curries and more"
  }
];

export function RestaurantsPage() {
  return (
    <div className="bg-white text-black p-6 border-4 border-[#FF6B6B] rounded mb-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#FF6B6B]">🍽️ Our Restaurant Partners 🍽️</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );
}