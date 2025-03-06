import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black mt-7 text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Katalog */}
        <div>
          <h2 className="text-lg font-semibold mb-3">КАТАЛОГ</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Одежда</li>
            <li>Обувь</li>
            <li>Аксессуары</li>
            <li>Расчет стоимости</li>
          </ul>
        </div>

        {/* Информация */}
        <div>
          <h2 className="text-lg font-semibold mb-3">ИНФОРМАЦИЯ</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Блог</li>
            <li>Контакты</li>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h2 className="text-lg font-semibold mb-3">КОНТАКТЫ</h2>
          <p className="text-gray-400">info@grafus.info</p>
          <p className="text-gray-400">+998 00 000 00 00</p>
          <div className="flex items-center space-x-3 mt-4">
            <a href="#" className="text-blue-500 text-2xl">
              <FaTelegramPlane />
            </a>
            <a href="#" className="text-pink-500 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Подписка на новости */}
        <div>
          <h2 className="text-lg font-semibold mb-3">ПОДПИСКА НА НОВОСТИ</h2>
          <p className="text-gray-400 text-sm mb-3">
            Будьте в курсе скидок и новостей
          </p>
          <div className="flex items-center bg-gray-800 rounded-lg p-2">
            <input
              type="email"
              placeholder="Ваш email"
              className="bg-transparent text-white flex-1 outline-none px-2"
            />
            <button className="text-white bg-blue-500 px-4 py-1 rounded-md">
              →
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Подписываясь на рассылку, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </div>

      {/* Quyidagi matn */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ | ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</p>
        <p className="mt-2">© 2024 Tezbro. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
