import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiClient } from "../utils/apiservice";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
    const { product_id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart(); 

    const getProductDetail = async () => {
        let res = await apiClient({ url: `/products/${product_id}` });
        if (res?.status === 200) {
            setProduct(res?.data);
        }
    };

    useEffect(() => {
        getProductDetail();
    }, [product_id]);

    if (!product) return <p>⏳ Yuklanmoqda...</p>;

    return (
        <div className="container mx-auto p-5">
            <button
                className="relative px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-red-500 to-purple-600 rounded-lg 
                      shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95 overflow-hidden"
                onClick={() => navigate(-1)}
            >
                Orqaga
            </button>

            <div className="flex gap-5">
                <img className="w-[300px] h-[300px] object-contain border m-4 p-2" src={product.image} alt={product.title} />
                <div>
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <p className="text-lg text-gray-700">{product.description}</p>
                    <p className="text-xl font-semibold">Narxi: {product.price} $</p>
                    <p className="text-sm text-gray-500">Kategoriya: {product.category}</p>
                    <button
                        className="relative m-4 px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 
                      bg-gradient-to-r from-green-500 to-purple-600 rounded-lg 
                      shadow-lg shadow-blue-500/50 hover:shadow-purple-500/50 
                      hover:scale-105 active:scale-95 overflow-hidden"
                        onClick={() => addToCart(product)}
                    >
                        Savatga qo‘shish
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
