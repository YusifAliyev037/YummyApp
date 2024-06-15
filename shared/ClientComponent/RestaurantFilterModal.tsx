import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Form, getCategories } from "../AdminComponents/Services/axios";

interface RestaurantFilterModalProps {
  onClose: () => void;
  onClick: (id: string | undefined) => void;
}

export const RestaurantFilterModal: FC<RestaurantFilterModalProps> = ({
  onClick,
  onClose,
}) => {
  const handleFilterButtonClick = () => {
    onClose();
  };

  const [categories, setCategories] = useState<Form[]>([
    { name: "", slug: "", img_url: "" },
  ]);

  async function renderCategories() {
    const res = await getCategories();
    if (res?.status === 200) {
      setCategories(res?.data?.result?.data);
    }
  }

  useEffect(() => {
    renderCategories();
  }, []);
  return (
    <div className="fixed bottom-0 left-0 w-full min-h-screen z-50 bg-black bg-opacity-50 flex items-end justify-center">
      <div className="bg-white p-6 rounded-t-3xl max-h-[65vh] w-full flex flex-col">
        <button className="mx-auto mb-4" onClick={handleFilterButtonClick}>
          <Image
            width={50}
            height={0}
            src={"closeFilter.svg"}
            alt="closeFilter"
          />
        </button>
        <ul className=" overflow-y-auto flex flex-col gap-8 px-2">
          {categories?.map((item: Form) => {
            return (
              <li
                onClick={() => onClick(item?.name)}
                className=" border-b-2 border-b-whiteLight2 text-2xl font-semibold pb-2 pl-4"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};