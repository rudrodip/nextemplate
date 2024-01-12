import { siteConfig } from "@/config/site";

const MobileFooter = () => {
  return (
    <footer className="backdrop-blur-sm">
      <div className="bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row s">
          <p className="text-sm text-center sm:text-left flex flex-row justify-center">
            © {`${new Date().getFullYear()} `},
            <a
              href="/"
              rel="noopener noreferrer"
              className="ml-1 p-0"
              target="_blank"
            >
              {siteConfig.name}
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-400"
              href={siteConfig.links.twitter}
              target="_blank"
              id="contact"
            >
              <span className="text-blue-500 inline-block">rds_agi</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
