import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import MetaSeo from "@/shared/MetaSeo";

const ClientHeader = dynamic(() => import("../../shared/ClientComponent/ClientHeader"))
const ClientFooter = dynamic(() => import("../../shared/ClientComponent/ClientFooter"))


const Faq: React.FC = () => {
  const router = useRouter();
  const locale = router.locale || "en";
  return (
    <>
    <Head>
          <title>{translate('FAQ', locale)}</title>
          <MetaSeo
            title={translate('FAQ')}
            desc='Welcome to FAQ!'
          />
          <link
            rel='icon'
            href='/burger.ico'
          />
        </Head>
      <ClientHeader />
      <div className="animate-slideIn  faqCont">
        <h4 className="text-black font-roboto text-5xl font-medium leading-8 text-center mt-16">
          {translate("F.A.Q", locale)}
        </h4>
        <div
          style={{
            maxWidth: "1310px",
            margin: "auto",
            marginBottom: "84px",
          }}
        >
          <div className="pt-32 px-4">
            <div className="mx-auto MyWidth-800">
              <div className="mx-auto h-127 bg-white rounded-xl divide-y divide-black/5 shadow-lg">
                <Disclosure
                  as="div"
                  className="p-6 mb-4 pb-[15px]"
                  defaultOpen={false}
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className=" text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      {translate(
                        "How to contact with Customer Service?",
                        locale
                      )}
                    </span>
                    <ChevronDownIcon className="size-12  fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    {translate(
                      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!",
                      locale
                    )}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4 pb-[15px]">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className=" text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      {translate(
                        "App installation failed, how to update system information?",
                        locale
                      )}
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    {translate(
                      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                      locale
                    )}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4 pb-[15px]">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className=" text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      {translate(
                        "Website response taking time, how to improve?",
                        locale
                      )}
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    {translate(
                      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                      locale
                    )}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4 pb-[15px]">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className=" text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      {translate("How do I create an account?", locale)}
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    {translate(
                      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                      locale
                    )}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4 pb-[15px]">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className=" text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      {translate(
                        "Website response taking time, how to improve?",
                        locale
                      )}
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    {translate(
                      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
                      locale
                    )}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientFooter />
    </>
  );
};

export default Faq;
