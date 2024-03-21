"use client";

import { navbarItems, navbarCategories } from "@/lib/navigation-menu-items";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-center py-2">
      <Link href="/">
        <Button variant="ghost">Home</Button>
      </Link>

      <Popover>
        <PopoverTrigger asChild className="group">
          <Link href="/">
            <Button variant="ghost">
              Categories
              <ChevronDown
                className="ml-1 h-5 w-5 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </Button>
          </Link>
        </PopoverTrigger>
        <PopoverContent className="flex gap-6 w-full">
          {navbarCategories.map((item) => (
            <div key={item.id}>
              <h3 className="border-b-2">
                <Button
                  variant="link"
                  className="hover:no-underline cursor-auto"
                >
                  {item.name}
                </Button>
              </h3>

              <div className="flex flex-col">
                {item.items.map((data) => (
                  <Link key={data.id} href={data.href}>
                    <Button variant="link">{data.name}</Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </PopoverContent>
      </Popover>

      {navbarItems.map((item) => (
        <Popover key={item.id}>
          <PopoverTrigger asChild className="group">
            <Link href="/">
              <Button variant="ghost">
                {item.name}
                <ChevronDown
                  className="ml-1 h-5 w-5 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <h3 className="border-b-2">
              <Button variant="link" className="hover:no-underline cursor-auto">
                Get Great
                <span className="text-rose-500">&nbsp;{item.name}&nbsp;</span>
                Products!
              </Button>
            </h3>

            <div>
              {item.items.map((data) => (
                <Link key={data.id} href={data.href}>
                  <Button variant="link">{data.name}</Button>
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      ))}

      <Link href="/">
        <Button variant="ghost">Blog</Button>
      </Link>

      <Link href="/">
        <Button variant="ghost">Hot Offers</Button>
      </Link>
    </nav>
  );
}
