import { useCart } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

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
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FiTrash2 className="mr-2" /> O‘chirish
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-end mt-4">
            <button
              className="p-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg 
                   shadow-lg hover:shadow-xl transition duration-300 ease-in-out 
                   ring-2 ring-blue-400 hover:ring-4 focus:outline-none"
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
