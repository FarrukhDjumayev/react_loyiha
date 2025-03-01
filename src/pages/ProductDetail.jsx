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
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
                onClick={() => navigate(-1)}
            >
                Orqaga
            </button>

            <div className="flex gap-5">
                <img className="w-[300px] h-[300px] object-contain border p-2" src={product.image} alt={product.title} />
                <div>
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <p className="text-lg text-gray-700">{product.description}</p>
                    <p className="text-xl font-semibold">Narxi: {product.price} $</p>
                    <p className="text-sm text-gray-500">Kategoriya: {product.category}</p>
                    <button
                        className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg"
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
