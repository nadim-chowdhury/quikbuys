import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

export const userWishlistsCart = [
  {
    id: 1,
    name: "User",
    href: "/profile",
    element: <FaUser />,
  },
  {
    id: 2,
    name: "Wishlist",
    href: "/wish-list",
    element: <FaHeart />,
  },
  {
    id: 3,
    name: "Cart",
    href: "/shopping-cart",
    element: <FaShoppingBag />,
  },
];
