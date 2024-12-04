import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";

const footerItems = [
  {
    name: "Solution",
    children: [
      { name: "Marketing", href: "/marketing" },
      { name: "Analytics", href: "/analytics" },
      { name: "Commerce", href: "/commerce" },
      { name: "Insights", href: "/insights" },
    ],
  },
  {
    name: "Company",
    children: [
      { name: "About", href: "/about" },
      { name: "Customers", href: "/customers" },
      { name: "Press", href: "/press" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "Blog", href: "/blog" },
      { name: "Developers", href: "/developers" },
      { name: "Guides", href: "/guides" },
      { name: "Webinars", href: "/webinars" },
    ],
  },
  {
    name: "Legal",
    children: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

const socials = [
  { name: "Facebook", Icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", Icon: Instagram, href: "https://instagram.com/sdmrfa" },
  { name: "Twitter", Icon: Twitter, href: "https://twitter.com/sdmrf" },
  { name: "Github", Icon: Github, href: "https://github.com/sdmrf" },
  { name: "Youtube", Icon: Youtube, href: "https://youtube.com" },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Branding */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl font-bold">Elysian</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Elysian is a modern eCommerce platform that provides a comprehensive
              solution for marketing, analytics, commerce, and insights.
            </p>
            <div className="flex mt-6 space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-muted-foreground hover:text-primary"
                >
                  <social.Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          {/* Footer Links */}
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerItems.map((item) => (
              <div key={item.name}>
                <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                <ul className="mt-2 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <Link
                        to={child.href}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elysian, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
