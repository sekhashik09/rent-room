import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative w-full bg-gray-100 py-6">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            Material Tailwind
          </Typography>
          <div className="grid grid-cols-3 gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-70"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a
              href="https://material-tailwind.com/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material Tailwind
            </a>
            . All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900">
            {/* Social Icons */}
            {[
              "facebook",
              "instagram",
              "twitter",
              "github",
              "linkedin",
            ].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
                aria-label={platform}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
