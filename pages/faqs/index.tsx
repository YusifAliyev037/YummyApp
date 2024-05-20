import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import ClientHeader from "../../shared/ClientComponent/ClientHeader";
import ClientFooter from "../../shared/ClientComponent/ClientFooter";

const Faq: React.FC = () => {
  return (
    <>
      <ClientHeader />
      <div className="faqCont">
        <h4 className="text-black font-roboto text-5xl font-medium leading-8 text-center mt-16">
          F.A.Q
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
                <Disclosure as="div" className="p-6 mb-4" defaultOpen={false}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      How to contact with Customer Service?
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    Our Customer Experience Team is available 7 days a week and
                    we offer 2 ways to get in contact.Email and Chat . We try to
                    reply quickly, so you need not to wait too long for a
                    response!.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      App installation failed, how to update system information?
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      Website reponse taking time, how to improve?
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      How do I create a account?
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 mb-4">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-2xl font-medium text-black group-data-[hover]:text-black/80">
                      Website reponse taking time, how to improve?
                    </span>
                    <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
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
