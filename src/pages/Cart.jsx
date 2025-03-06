import { useCart } from "../context/CartContext";
import { useParams, useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { SlBasketLoaded } from "react-icons/sl";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";



const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const isEmpty = cart.length === 0;

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-2xl">
      <button
                className="relative px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-red-500 to-purple-600 rounded-lg 
                      shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95 overflow-hidden"
                onClick={() => navigate(-1)}
            >
                Orqaga
            </button>
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">  Savatcha</h1>

      {isEmpty ? (
        <div className="flex flex-col items-center text-gray-600 mt-10">
          <SlBasketLoaded className="text-7xl text-gray-400 mb-4" />
          <p className="text-lg">Savat bo‘sh!</p>
        </div>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex gap-6 items-center p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <img
                  className="w-28 h-28 object-contain rounded-lg border border-gray-200" data-aos='flip-up' data-aos-data-aos-duration="1000"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                  <p className="text-gray-700 font-semibold">{item.price}$ x {item.quantity}</p>
                </div>
                
                
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition scale-105"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition scale-105"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>

                <button
                  className="relative px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-red-500 to-red-600 rounded-lg 
                      shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95 overflow-hidden"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="O‘chirish"
                >
                  <FiTrash2 size={20} />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-8 p-5 bg-gray-100 rounded-xl shadow-md">
            <h2 className="text-2xl font-extrabold">Jami: {totalPrice.toFixed(2)}$</h2>
            <button
              className="relative px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-red-500 to-purple-600 rounded-lg 
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
