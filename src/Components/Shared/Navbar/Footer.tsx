import React from "react";

const Footer = () => {
  return (
    <div className="flex items-end w-full  bg-white ">
      <footer className="w-full text-gray-700 shadow-xl shadow-blue-950 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <p className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <p className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-xl">
            SudsCart
          </p>
            </p>
            <p className="mt-2 text-sm text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
              Design and Code || Tanvir!
            </p>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Company
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Careers
                  </p>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Support
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Contact Support
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Help Resources
                  </p>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Platform
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Terms &amp; Privacy
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Pricing
                  </p>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Send a Message
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Request p Quote
                  </p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize text-center">
              © 2024 All rights reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
