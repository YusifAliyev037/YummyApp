import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  image: '',
  name: '',
  cuisine: '',
  deliveryPrice: '',
  deliveryMin: '',
  address: '',
  category: ''
};

const validate = values => {
  const errors = {};

  

  return errors;
};

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
};

const Modul = () => (
  <div className="flex justify-center items-center h-screen color-grey10 bg-blue10" style={{ backgroundColor: "#38394E" }}>
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="bg-gray-100 p-8 rounded shadow-md color-grey10" style={{ width: "948px", height: "1086px", left: "493px", gap: "0px", opacity: "0px", }}>
          <h2 className="text-2xl font-bold mb-4 color-grey " >Create Add Restaurant</h2>

          <div className="mb-4" style={{ width: "526px", height: "122px", top: "98px", left: "854px", }}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image" style={{ color: "#C7C7C7" }}>Upload Image</label>
            <Field type="file" id="image" name="image" className="p-2 border rounded w-full" style={{ backgroundColor: "#43445A", color: "#C7C7C7" }} />
          </div>



          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name" style={{ color: "#C7C7C7" }}>Name</label>
            <Field type="text" id="name" name="name" className="p-2 border rounded w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cuisine" style={{ color: "#C7C7C7" }}>Cuisine</label>
            <Field type="text" id="cuisine" name="cuisine" className="p-2 border rounded w-full" />
            <ErrorMessage name="cuisine" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 color-grey10" htmlFor="deliveryPrice" >Delivery Price</label>
            <Field type="text" id="deliveryPrice" name="deliveryPrice" className="p-2 border rounded w-full" />
            <ErrorMessage name="deliveryPrice" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 color-grey10" htmlFor="deliveryMin" >Delivery Minimum</label>
            <Field type="text" id="deliveryMin" name="deliveryMin" className="p-2 border rounded w-full" />
            <ErrorMessage name="deliveryMin" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-grey10" htmlFor="address" >Address</label>
            <Field type="text" id="address" name="address" className="p-2 border rounded w-full" />
            <ErrorMessage name="address" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="category" style={{ color: "#C7C7C7" }}>Category</label>
            <Field type="text" id="category" name="category" className="p-2 border rounded w-full" />
            <ErrorMessage name="category" component="div" className="text-red-500" />
          </div>

          <div className="flex justify-between">
            <button type="button" className="bg-red-500 text-white py-2 px-4 rounded" disabled={isSubmitting}>Cancel</button>
            <button type="submit" className="bg- #C035A2 text-white py-2 px-4 rounded" disabled={isSubmitting}>Create Restaurant</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Modul;
