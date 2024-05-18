import React, { useRef } from 'react';
import { Form, updateCategories } from './Services/axios';
import { useToast } from '@chakra-ui/react';
import { CategoryType } from './TableCategory';
import { useSelector } from 'react-redux';

export interface Category extends CategoryType {
  created: number;
}

function AddCategoryInput() {
  const categoryRef = useRef<HTMLInputElement>(null);
  const slugRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const toast = useToast();

  const categories: Category[] = useSelector((state: any) => state.global.category);

  async function updateCategory() {
    const category = categoryRef?.current?.value;
    const slug = slugRef?.current?.value;
    const img = imgRef?.current?.value;

    const form: Form = {
      name: category,
      slug,
      img_url: img
    };

    if (!isInputValid(category, slug, img)) {
      toast({
        title: "Please fill all the inputs!!",
        status: "error",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
      return;
    }

    const res = await updateCategories(category ?? '', form);

    if (res?.status === 200) {
      toast({
        title: "Category updated successfully!",
        status: "success",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });

      const updatedData = categories.map((item) => {
        if (item.id === category) {
          return res.data.data;
        }
        return item;
      });

      // Dispatch updated categories to the global state here
      // dispatch({ type: 'UPDATE_CATEGORIES', payload: updatedData });
    }
  }

  function isInputValid(
    category: string | undefined,
    slug: string | undefined,
    img: string | undefined
  ): boolean {
    return !!category && !!slug && !!img;
  }

  return (
    <div className="bg-[#43445A] w-[60%] rounded-xl flex flex-col max-h-[400px]">
      <div className="p-[23px] flex flex-col gap-[8px]">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Name
        </p>
        <input
          ref={categoryRef}
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="Sea Food"
        />
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Slug
        </p>
        <input
          ref={slugRef}
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 p-2 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="Add slug for category"
        />
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Image URL
        </p>
        <input
          ref={imgRef}
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 p-2 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="Add image URL for category"
        />
      </div>
      <button onClick={updateCategory} className="bg-blue-500 text-white p-2 rounded">
        Update Category
      </button>
    </div>
  );
}

export default AddCategoryInput;
