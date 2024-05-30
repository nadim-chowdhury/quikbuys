import { socialIcons } from "@/lib/social-icons";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import Navbar from "./Navbar";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DollarIcon from "@/assets/icons/DollarIcon";
import EuroIcon from "@/assets/icons/EuroIcon";
import Logo from "./Logo";
import { Input } from "../ui/input";
import { userWishlistsCart } from "@/lib/user-wishlists-cart";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      {/* social media, currency selector, dark mode toggle */}
      <div className="border-b py-2">
        <div className="flex items-center justify-between container">
          <div className="flex items-center gap-1">
            {socialIcons.map((item) => (
              <Button key={item.id} variant="outline" size="icon">
                <Link href={item.href}>{item.element}</Link>
              </Button>
            ))}
          </div>
          <h5 className="uppercase">
            Free Shipping This Week Order Over - $55
          </h5>
          <div className="flex items-center gap-1">
            <Select>
              <SelectTrigger className="w-[140px] h-8">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="usd">
                    <div className="flex items-center gap-2">
                      <DollarIcon className="w-4 h-4" /> USD
                    </div>
                  </SelectItem>
                  <SelectItem value="eur">
                    <div className="flex items-center gap-2">
                      <EuroIcon className="w-4 h-4" /> EUR
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* logo, searchbox, profile, wishlists, cart */}
      <div className="border-b py-4">
        <div className="flex items-center justify-between container">
          <Logo />

          <div className="w-full">
            <div className="max-w-3xl mx-auto flex items-center">
              <Input
                placeholder="Search your product"
                className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 border-0 border-x border-y rounded-r-none"
              />
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-0 border-r border-y rounded-l-none"
              >
                <FaSearch />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {userWishlistsCart.map((item) => (
              <Button
                key={item.id}
                variant="outline"
                size="icon"
                className="h-10 w-10"
              >
                <Link href={item.href}>{item.element}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* navbar items */}
      <Navbar />
    </header>
  );
}
