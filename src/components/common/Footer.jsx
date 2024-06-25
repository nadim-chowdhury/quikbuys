import { footerContent } from "@/lib/footer-content";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 border-t mt-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerContent.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">{section.heading}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {item.path.startsWith("http") ? (
                    <Link
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-rose-500 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.path}
                      className="hover:text-rose-500 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="w-full">
          <div className="max-w-3xl mx-auto flex items-center">
            <Input
              placeholder="Enter your email"
              className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 border-0 border-x border-y rounded-r-none"
            />
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-[50%] border-0 border-r border-y rounded-l-none text-rose-500"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-sm mt-2">
            &copy;2024 All Rights Reserved By QuikBuys.
          </p>
        </div>
      </div>
    </footer>
  );
}
