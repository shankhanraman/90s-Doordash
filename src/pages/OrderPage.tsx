import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Margherita Pizza", price: 12.99, category: "Pizza" },
  { id: 2, name: "Pepperoni Pizza", price: 14.99, category: "Pizza" },
  { id: 3, name: "Classic Burger", price: 9.99, category: "Burgers" },
  { id: 4, name: "Cheese Burger", price: 10.99, category: "Burgers" },
  { id: 5, name: "California Roll", price: 8.99, category: "Sushi" },
  { id: 6, name: "Dragon Roll", price: 12.99, category: "Sushi" }
];

export function OrderPage() {
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  };

  const total = cart.reduce((sum, { item, quantity }) => sum + item.price * quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your order! We will deliver it soon! 🚚');
    setCart([]);
    setName('');
    setAddress('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white text-black p-6 border-4 border-[#FF6B6B] rounded">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#FF6B6B]">🍕 Menu 🍕</h2>
        {['Pizza', 'Burgers', 'Sushi'].map(category => (
          <div key={category} className="mb-6">
            <h3 className="text-2xl font-bold mb-4">{category}</h3>
            <div className="space-y-4">
              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-[#FF6B6B] text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white text-black p-6 border-4 border-[#FF6B6B] rounded">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#FF6B6B]">🛒 Your Order 🛒</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        ) : (
          <div className="mb-6">
            {cart.map(({ item, quantity }) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {quantity}</span>
                <span>${(item.price * quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between items-center font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={cart.length === 0}
            className="w-full bg-[#FF6B6B] text-white py-2 px-4 rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}