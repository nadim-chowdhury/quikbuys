"use client";

import {
  adjustQuantity,
  clearCart,
  removeItem,
} from "@/store/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="bg-rose-500 text-white w-full py-2 text-center rounded-md">
          Your cart is empty.
        </p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex items-center space-x-4">
                <div className="flex-shrink-0 w-20 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button
                      onClick={() =>
                        dispatch(
                          adjustQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      className="bg-gray-200 hover:bg-gray-300 text-black"
                      size="sm"
                    >
                      -
                    </Button>
                    <span className="text-lg px-2">{item.quantity}</span>
                    <Button
                      onClick={() =>
                        dispatch(
                          adjustQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="bg-gray-200 hover:bg-gray-300 text-black"
                      size="sm"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="bg-rose-500 hover:bg-rose-700 text-white"
                >
                  <AiOutlineDelete className="text-lg" />
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <p className="text-lg font-semibold">
              Total Price: ${calculateTotalPrice().toFixed(2)}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => dispatch(clearCart())}
              className="bg-rose-500 hover:bg-rose-700 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
