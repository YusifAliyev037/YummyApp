import type { NextPage } from "next";
import Head from "next/head";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";


const ClientHeader = dynamic(() => import("../shared/ClientComponent/ClientHeader"))
const ClientFooter = dynamic(() => import("../shared/ClientComponent/ClientFooter"))

const AboutUs: NextPage = () => {
  const router = useRouter();
  const locale = router.locale || "en";
  return (
    <>
      <Head>
        <title>{translate("About Us", locale)}</title>
        <meta
          name="description"
          content={translate("Description of About Us", locale)}
        />
      </Head>
      <ClientHeader />

      <div className="animate-slideIn max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="hover:scale-105  text-black mb-[30px] mt-[120px] font-mukta font-semibold text-3xl leading-30 tracking-tighter  w-[191px] h-[36px]">
            {translate("About Us", locale)}
          </h2>
          <p className="hover:scale-105  text-gray300 mb-[620px] font-roboto font-medium text-lg leading-35 tracking-tighter  w-[565px] h-[184px]">
            We are the meeting point of pleasure and enjoyment. We are here to
            add color to your food culture and bring your taste to the highest
            level. Each flavor is carefully selected, and we offer the best
            quality service to our valued customers. Our mission is to make your
            taste experience unforgettable and cater to every taste. We make
            sure that you spend time in a warm and friendly environment while we
            meet you with our dishes prepared with quality ingredients. Our
            vision is to enable you to discover your taste with innovative and
            unique approaches. While searching for the secret of taste in each
            of our dishes, we are proud to offer you the best. Come to the top
            of food culture with us, enjoy the taste to your heart's content. We
            are waiting for you!
          </p>
        </div>

        {/* Right Section */}
        <div className=" w-[687px] h-[407px] mt-[100px] ">
          {/* Background Image */}
          <img
            src="/orangebackground.svg"
            alt="Background Image"
            //  className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hover:scale-105  animate-wiggle transition-transform duration-300 absolute top-[514px] bottom-[-460px] left-[722px] right-[-722px] rounded-20 shadow-md bg-white w-[244px] h-[181px] ">
            <img
              src="/aboutuspizza.svg"
              alt="Product Image"
              className="absolute top-[-50px] w-[120px] h-[118px] rounded-full ml-[100px] mr-[25px] bg-white  "
            />
            <h3 className="ml-[25px] mt-[70px] text-lg font-bold mb-2">
              {translate("Sousage Pizza", locale)}
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

          <div className="hover:scale-105  animate-wiggle transition-transform duration-300  absolute top-[287px] bottom-[-233px] left-[960px] right-[-960px] rounded-20 shadow-md bg-white w-[274px] h-[181px] ">
            <img
              src="/hamburger.svg"
              alt="Product Image"
              className="absolute top-[-40px] w-[120px] h-[118px] rounded-full ml-[120px]  "
            />

            <h3 className="ml-[25px] text-lg font-bold mt-[70px] mb-2">
              {translate(" Hamburger", locale)}
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

          <div className="hover:scale-105  animate-wiggle transition-transform duration-300  absolute top-[605px] bottom-[-552px] left-[1010px] right-[-1010px] rounded-20 shadow-md bg-white w-[274px] h-[181px] ">
            <img
              src="/tomatosoup.svg"
              alt="Product Image"
              className="absolute top-[-40px] w-[120px] h-[118px] rounded-full ml-[120px]  "
            />

            <h3 className="ml-[25px] text-lg font-bold mb-2 mt-[70px]">
              {translate(" Tomato Soup", locale)}

              {/* Tomato Soup{" "} */}
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

          <div className="hover:scale-105  animate-wiggle transition-transform duration-300  absolute  top-[798px] bottom-[-744px] left-[710px] right-[-710px] rounded-20 shadow-md bg-white w-[274px] h-[181px] ">
            <img
              src="/coffee.svg"
              alt="Product Image"
              className="absolute top-[-40px] w-[120px] h-[118px] rounded-full ml-[120px]  "
            />

            <h3 className="text-lg mt-[70px] font-bold mb-2 ml-[25px]">
              {translate("  Yummy Coffee", locale)}
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
