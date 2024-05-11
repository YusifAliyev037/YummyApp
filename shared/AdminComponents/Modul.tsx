import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Modul = () => {
  const initialValues = {
    image: '',
    name: '',
    cuisine: '',
    deliveryPrice: '',
    deliveryMin: '',
    address: '',
    category: '',
  };

  const validate = (values) => {
    const errors = {};
  
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-blue-900'>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='bg-white p-8 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              Create Add Restaurant
            </h2>

            <div className='mb-4'>
              <label className='block text-gray-800 font-bold mb-2' htmlFor='image'>
                Upload Image
              </label>
              <Field type='file' id='image' name='image' className='p-2 border rounded w-full bg-gray-200 text-gray-800' />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-800 font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <Field type='text' id='name' name='name' className='p-2 border rounded w-full bg-gray-200 text-gray-800' />
              <ErrorMessage name='name' component='div' className='text-red-500' />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-800 font-bold mb-2' htmlFor='cuisine'>
                Cuisine
              </label>
              <Field type='text' id='cuisine' name='cuisine' className='p-2 border rounded w-full bg-gray-200 text-gray-800' />
              <ErrorMessage name='cuisine' component='div' className='text-red-500' />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-800 font-bold mb-2' htmlFor='deliveryPrice'>
                Delivery Price
              </label>
              <Field type='text' id='deliveryPrice' name='deliveryPrice' className='p-2 border rounded w-full bg-gray-200 text-gray-800' />
              <ErrorMessage name='deliveryPrice' component='div' className='text-red-500' />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-800 font-bold mb-2' htmlFor='deliveryMin'>
                Delivery Minimum
              </label>
              <Field type='text' id='deliveryMin' name='deliveryMin' className='p-2 border rounded w-full bg-gray-200 text-gray-800' />
              <ErrorMessage name='deliveryMin' component='div' className='text-red-500' />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-800 font-bold mb-2' htmlFor='address'>
                Address
              </label>
              <Field type='text' id='address' name='address' className='p-2 border rounded w-full bg-gray-200 text-gray-800' />
              <ErrorMessage name='address' component='div' className='text-red-500' />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-800 font-bold mb-2' htmlFor='category'>
                Category
              </label>
              <Field type='text' id='category' name='category' className='p-2 border rounded w-full bg-gray-200 text-gray-800' />
              <ErrorMessage name='category' component='div' className='text-red-500' />
            </div>

            <div className='flex justify-between'>
              <button type='button' className='bg-red-500 text-white py-2 px-4 rounded' disabled={isSubmitting}>
                Cancel
              </button>
              <button type='submit' className='bg-purple-900 text-white py-2 px-4 rounded' disabled={isSubmitting}>
                Create Restaurant
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Modul;
