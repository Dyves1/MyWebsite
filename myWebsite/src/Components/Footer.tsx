function Footer() {
  return (
    <footer style={{ background: "#189765", color: "white" }}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div
              style={{ color: "#C75B21" }}
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              MY
            </div>
            <div
              style={{ color: "white" }}
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue"
            >
              LOGO
            </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="block text-sm  sm:text-center ">
          © 2023 Kigali-Rwanda All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
