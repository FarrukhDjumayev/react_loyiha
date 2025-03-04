import { useCart } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { SlBasketLoaded } from "react-icons/sl";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Savatcha</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Savat bo‘sh!</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow"
              >
                <span className="text-lg font-medium text-gray-800">
                <img className="w-full h-[200px] object-contain" src={item.image} alt={item.title} /> {item.title} - <strong>{item.price}$</strong>
                </span>
                <button
                  className="relative px-6 py-3 flex items-center text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-red-500 to-red-400 rounded-lg 
                      shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95 overflow-hidden"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FiTrash2 className="mr-2" /> O‘chirish
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-end mt-4">
            <button
              className="relative px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg 
                      shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95 overflow-hidden"
              onClick={clearCart}
            >
              Savatchani tozalash
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
