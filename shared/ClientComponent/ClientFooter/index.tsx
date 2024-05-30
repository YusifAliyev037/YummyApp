import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black200 text-white p-8">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3">
          <div className="mb-4">
            <div className="mt-[100px] ml-[150px]">
              <h1 className="hover:scale-105 font-mukta text-4xl font-extrabold text-white ">
                Yummy<span className="text-orange">.</span>
              </h1>
            </div>
            <p className="text-gray400 ml-[150px] mt-[10px]">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
            <div className="flex space-x-4 mt-[20px] ml-[150px]">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-orange w-[50px] h-[50px] rounded-[100px] flex items-center justify-center "
              >
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  className="w-[30px] h-[30px]"
                />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-orange w-[50px] h-[50px] rounded-[100px] flex items-center justify-center"
              >
                <img
                  src="/twitter.svg"
                  alt="Twitter"
                  className="w-[30px] h-[30px]"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-orange w-[50px] h-[50px] rounded-[100px] flex items-center justify-center"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-[30px] h-[30px]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-2/3 flex justify-between mt-[140px] ml-[300px] mr-[130px]">
          <div>
            <h3 className="hover:scale-105 font-bold mb-2">Popular</h3>
            <nav>
              <ul>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Programming
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Books for children
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Psychology
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Business
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="hover:scale-105 font-bold mb-2">Store</h3>
            <nav>
              <ul>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Cash
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Delivery
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Payment
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    About the store
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="hover:scale-105 font-bold mb-2">Support</h3>
            <nav>
              <ul>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Help
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Contacts
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Purchase returns
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    Buyer help
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>
          All rights reserved © 2003-2024 Yummy
          <span className="text-orange">.</span>{" "}
          <a
            href="#"
            className="hover:scale-105 text-white hover:underline hover:text-orange"
          >
            TERMS OF USE
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="hover:scale-105 text-white hover:underline hover:text-orange"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
