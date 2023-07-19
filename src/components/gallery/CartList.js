import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const CartList = () => {
  const { cartItems, removeFromCart } = useGallery();
  // console.log("🚀 ~ file: CartList.js:6 ~ CartList ~ cartItems:", cartItems);

  return (
    <div className="py-10 px-5 flex flex-col gap-5 items-start">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className="inline-flex gap-x-5 justify-between items-center"
          >
            <img
              src={item.url}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-3 rounded-lg bg-red-500 text-white font-semibold text-sm"
            >
              Deleted
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
