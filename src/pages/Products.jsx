import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../utils/apiservice";

const Products = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const getProducts = async () => {
    let res = await apiClient({ url: "/products" });
    if (res?.status === 200) {
      setData(res?.data);
    }
  };

  const getCategories = async () => {
    let res = await apiClient({ url: "/products/categories" });
    if (res?.status === 200) {
      setCategories(res?.data);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const filteredProducts = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory ? item.category === selectedCategory : true)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-10/12 mx-auto overflow-hidden">
      <p className="text-2xl font-bold">Mahsulotlar ro'yxati</p>

      <input
        type="text"
        placeholder="Mahsulot nomi bo‘yicha qidirish..."
        className="border-2 rounded-2xl active:bg-amber-300 border-amber-400 p-2 w-full my-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border border-green-500 rounded-2xl bg-amber-400 p-2 my-5 w-full"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Barcha kategoriyalar</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {currentItems.map((item) => (
          <Link
            to={`/product-detail/${item.id}`}
            key={item.id}
            className="card block shadow-md hover:shadow-lg transition border border-green-300 
                 rounded-lg overflow-hidden p-3 hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <img
              className="w-full h-48 object-contain rounded-md"
              src={item.image}
              alt={item.title}
            />
            <p className="text-gray-800 font-semibold mt-2">{item.title}</p>
            <p className="text-lg font-bold text-blue-600 mt-1">
              {" "}
              {item.price} $
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(filteredProducts.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 border transition-all duration-300 transform ${
                currentPage === index + 1
                  ? "bg-green-500 text-white scale-110"
                  : "bg-white text-black hover:scale-105"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
