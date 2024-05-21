import type { NextPage } from "next";
import Head from "next/head";
import ClientHeader from "../shared/ClientComponent/ClientHeader";
import ClientFooter from "../shared/ClientComponent/ClientFooter";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Description of About Us" />
      </Head>
      <ClientHeader />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="text-black mb-[30px] mt-[120px] font-mukta font-semibold text-3xl leading-30 tracking-tighter  w-[191px] h-[36px]">
            About Us
          </h2>
          <p className="text-gray300 mb-[620px] font-roboto font-medium text-lg leading-35 tracking-tighter  w-[565px] h-[184px]">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>

        {/* Right Section */}
        <div className=" w-[687px] h-[407px] ">
          {/* Background Image */}
          <img
            src="/orangebackground.svg"
            alt="Background Image"
            //  className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-[414px] bottom-[-460px] left-[752px] right-[-752px] rounded-20 shadow-md bg-white w-[244px] h-[171px] ">
            <img
              src="/aboutuspizza.svg"
              alt="Product Image"
              className="absolute top-[-50px] w-[120px] h-[118px] rounded-full ml-[100px] mr-[25px] bg-white  "
            />
            <h3 className="ml-[25px] mt-[70px] text-lg font-bold mb-2">
              Sousage Pizza
            </h3>
            <div className="ml-[25px] flex mb-2">
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-gray300">&#9733;</span>
            </div>
            <p className="ml-[25px] text-lg font-bold">$7.90</p>
          </div>

          <div className="absolute top-[187px] bottom-[-233px] left-[970px] right-[-970px] rounded-20shadow-md bg-white w-[274px] h-[171px] ">
            <img
              src="/hamburger.svg"
              alt="Product Image"
              className="absolute top-[-40px] w-[120px] h-[118px] rounded-full ml-[120px]  "
            />

            <h3 className="ml-[25px] text-lg font-bold mt-[70px] mb-2">
              Hamburger
            </h3>

            <div className="ml-[25px] flex mb-2">
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-gray300 mr-1">&#9733;</span>
              <span className="text-gray300">&#9733;</span>
            </div>
            <p className="ml-[25px] text-lg font-bold">$5.90</p>
          </div>

          <div className=" absolute top-[495px] bottom-[-552px] left-[1060px] right-[-1060px] rounded-20 shadow-md bg-white w-[274px] h-[171px] ">
            <img
              src="/tomatosoup.svg"
              alt="Product Image"
              className="absolute top-[-40px] w-[120px] h-[118px] rounded-full ml-[120px]  "
            />

            <h3 className="ml-[25px] text-lg font-bold mb-2 mt-[70px]">
              Tomato Soup{" "}
            </h3>

            <div className="ml-[25px] flex mb-2">
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-gray300 mr-1">&#9733;</span>
              <span className="text-gray300 mr-1">&#9733;</span>
              <span className="text-gray300">&#9733;</span>
            </div>
            <p className="text-lg ml-[25px] font-bold">$7.90</p>
          </div>

          <div className="absolute  top-[698px] bottom-[-744px] left-[730px] right-[-730px] rounded-20 shadow-md bg-white w-[274px] h-[171px] ">
            <img
              src="/coffee.svg"
              alt="Product Image"
              className="absolute top-[-40px] w-[120px] h-[118px] rounded-full ml-[120px]  "
            />

            <h3 className="text-lg mt-[70px] font-bold mb-2 ml-[25px]">
              Yummy Coffee
            </h3>

            <div className="ml-[25px] flex mb-2">
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100 mr-1">&#9733;</span>
              <span className="text-yellow100">&#9733;</span>
            </div>
            <p className="ml-[25px] text-lg font-bold">$1.90</p>
          </div>
        </div>
      </div>

      <ClientFooter />
    </>
  );
};

export default AboutUs;
