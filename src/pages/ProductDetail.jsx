import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { apiClient } from "../utils/apiservice";
import { useCart } from "../context/CartContext";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaStar,
  FaTags,
  FaTruck,
} from "react-icons/fa";

const ProductDetail = () => {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const { addToCart } = useCart();

  const randomReviews = [
    "Juda yaxshi mahsulot, sifatiga gap yo‘q!",
    "Narxiga nisbatan ancha yaxshi ekan.",
    "Kutilganidan ham yaxshiroq chiqdi!",
    "Tez yetkazib berishdi, rahmat!",
    "Sifat yomon emas, lekin yaxshiroq bo‘lishi mumkin edi.",
    "Harid qilishga arziydi, tavsiya qilaman!",
  ];

  const getProductDetail = async () => {
    let res = await apiClient({ url: `/products/${product_id}` });
    if (res?.status === 200) {
      setProduct(res?.data);
      getSimilarProducts(res?.data.category);
    }
  };

  const getSimilarProducts = async (category) => {
    let res = await apiClient({ url: `/products/category/${category}` });
    if (res?.status === 200) {
      setSimilarProducts(res?.data.filter((item) => item.id !== product_id));
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [product_id]);

  if (!product) return <p>⏳ Yuklanmoqda...</p>;
  return (
    <div className="container mx-auto p-5">
      <button
        className="forsticky flex fixed items-center gap-2 px-4 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-red-500 to-purple-600 rounded-lg 
                      shadow-lg hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Orqaga
      </button>

      <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-8 mt-5">
        <img
          className="w-[350px] h-[350px] object-contain border-2 border-yellow-500 p-4 rounded-lg hover:-translate-y-1 hover:scale-105 duration-300 shadow-md"
          src={product.image}
          alt={product.title}
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-lg text-gray-700 mt-3">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mt-2">
            Narxi: {product.price} $
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
            {" "}
            <FaTags /> {product.category}
          </p>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            {" "}
            <FaTruck /> Yetkazib berish: 3-5 kun
          </p>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {product.rating.rate} (
            {product.rating.count} ta sharh)
          </p>
          <p className="text-sm text-gray-500">
            🛍 Sotuvchi:{" "}
            <span className="font-medium text-blue-600">BestShop</span>
          </p>

          <button
            className="flex items-center gap-2 mt-4 px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                          bg-gradient-to-r from-green-500 to-blue-600 rounded-lg 
                          shadow-lg hover:shadow-blue-500/50 
                          hover:scale-105 active:scale-95"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart /> Savatga qo‘shish
          </button>
        </div>
      </div>

      <div className="w-4/5 mx-auto mt-8 border-t pt-5">
        <h3 className="text-2xl font-bold text-gray-800">
          Foydalanuvchilar sharhlari
        </h3>
        {randomReviews.map((review, index) => (
          <div key={index} className="mt-2 p-3 border rounded-md shadow-sm">
            <p className="text-gray-800">{review}</p>
            <div className="flex text-yellow-500 mt-1">
              {[...Array(Math.floor(Math.random() * 3) + 3)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-4/5 mx-auto mt-8 border-t pt-5">
      <h3 className="text-2xl font-bold text-gray-800">O‘xshash mahsulotlar</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {similarProducts.length > 0 ? (
          similarProducts.map((item) => (
            <Link
              to={`/product-detail/${item.id}`}
              key={item.id}
              className="border-2 border-green-500 p-4 active: rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-transform duration-300 block"
            >
              <img
                className="w-full active:scale-95 active:rotate-12 active:transition-all active:duration-200
 h-48 object-contain rounded-md"
                src={item.image}
                alt={item.title}
              />
              <p className="text-gray-800 font-semibold mt-2 line-clamp-2">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">Kategoriya: {item.category}</p>
              <p className="text-lg font-bold text-blue-600 bg-yellow-100 px-2 py-1 rounded-md inline-block mt-2">
                {item.price} $
              </p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-4">Mahsulotlar yo‘q</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
