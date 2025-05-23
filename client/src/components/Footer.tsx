const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="pt-1 flex flex-col md:flex-row md:items-center  justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-hive">
              Buzz<span className="text-honey">Detect</span>
            </h3>
            <p className="text-hive-light mt-1">
              AI-powered Queen Bee detection
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mr-6">
              © {new Date().getFullYear()} BuzzDetect. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 items-center mt-4 md:mt-0">
            {/* Icons Section */}
            <a
              href="https://www.linkedin.com/in/harshh-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.87 0 54.53 
                  0 24.6 24.61 0 53.79 0s53.74 24.6 53.74 54.53c0 29.34-24.56 53.57-53.74 53.57zm394.11 
                  339.9h-92.4V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 
                  0-55.8 37.8-55.8 76.8V448h-92.4V148.9h88.7v40.8h1.3c12.3-23.2 
                  42.3-47.8 87.1-47.8 93 0 110.1 61.2 110.1 140.7V448z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/Harsh-1711"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 
                  12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 
                  1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 
                  3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 
                  0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                  0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 
                  2.04.138 3 .405 2.28-1.552 3.285-1.23 
                  3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                  1.23 1.91 1.23 3.22 0 4.61-2.805 
                  5.625-5.475 5.92.435.375.81 1.096.81 2.215 
                  0 1.6-.015 2.887-.015 3.28 0 .315.21.694.825.576C20.565 
                  22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
