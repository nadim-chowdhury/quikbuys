"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromWishList,
  clearWishList,
} from "@/store/slices/wishListSlice";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";

const WishList = () => {
  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  const dispatch = useDispatch();

  useEffect(() => {
    // Optionally fetch wish list items from an API or local storage
  }, []);

  const calculateTotalPrice = () => {
    return wishListItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Wish List</h2>
      {wishListItems.length === 0 ? (
        <p className="bg-rose-500 text-white w-full py-2 text-center rounded-md">
          Your wish list is empty.
        </p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {wishListItems.map((item) => (
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
                </div>
                <Button
                  onClick={() => dispatch(removeFromWishList(item.id))}
                  className="bg-rose-500 hover:bg-rose-700 text-white"
                >
                  <AiOutlineDelete className="text-lg" />
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <p className="text-lg font-semibold">
              Total Price: ${calculateTotalPrice()}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => dispatch(clearWishList())}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded"
            >
              Clear Wish List
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default WishList;
