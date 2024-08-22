// components/CatalogCards.js
import Image from "next/image";

const CatalogCards = () => {
  const items = [
    { id: 1, price: "₱850", title: "T-Shirt", image: "/assets/item-1.png" },
    { id: 2, price: "₱850", title: "Jacket", image: "/assets/item-1.png" },
    { id: 3, price: "₱850", title: "Jeans", image: "/assets/item-1.png" },
    { id: 4, price: "₱850", title: "Sneakers", image: "/assets/item-1.png" },
    { id: 4, price: "₱850", title: "T-Shirt", image: "/assets/item-1.png" },
    { id: 6, price: "₱850", title: "Jacket", image: "/assets/item-1.png" },
    { id: 7, price: "₱850", title: "Jeans", image: "/assets/item-1.png" },
    { id: 8, price: "₱850", title: "Sneakers", image: "/assets/item-1.png" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-8">
      {items.map((item) => (
        <div key={item.id}>
          <div className="bg-white shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={431}
              height={647}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex items-center justify-center">
            <h3 className="text-md font-semibold text-gray-700">
              {item.title} - {item.price}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogCards;
