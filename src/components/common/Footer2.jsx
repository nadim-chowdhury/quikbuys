import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";

const footerContent = [
  {
    heading: "Company",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
    ],
  },
  {
    heading: "Support",
    items: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
    ],
  },
];

const socialIcons = [
  { id: 1, element: <FaFacebook />, href: "https://facebook.com" },
  { id: 2, element: <FaTwitter />, href: "https://twitter.com" },
];

export default function Footer2() {
  return (
    <footer className="py-4 border-t mt-4">
      <div className="container mx-auto flex justify-between gap-8">
        {footerContent.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">{section.heading}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path}>
                    <span className="hover:text-rose-500 transition-all duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex justify-center items-center space-x-2">
          {socialIcons.map((item) => (
            <Link key={item.id} href={item.href}>
              <Button
                variant="outline"
                className="text-gray-500 hover:text-rose-500 transition-all duration-300"
              >
                {item.element}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
