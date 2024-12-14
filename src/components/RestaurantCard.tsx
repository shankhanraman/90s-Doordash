import React from 'react';

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: string;
  description?: string;
}

export function RestaurantCard({ name, image, rating, description }: RestaurantCardProps) {
  return (
    <div className="border-2 border-dashed border-[#FF6B6B] p-4 text-center bg-white">
      <img 
        src={image} 
        alt={name}
        className="w-full h-40 object-cover mb-2"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{rating}</p>
      {description && <p className="mt-2 text-sm">{description}</p>}
    </div>
  );
}