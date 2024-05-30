// import { ChangeEvent, useState, FormEvent } from 'react';

// interface FormRegister {
//   contact?: string;
//   username?: string;
//   fullname?: string;
//   email?: string;
//   address?: string;
//   password?: string;
// }

// const useForm = (initialValues: FormRegister) => {
//   const [formData, setFormData] = useState<FormRegister>(initialValues);
//   const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const file = e.target.files?.[0] || null;
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreviewUrl(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e: FormEvent, updateProfile: (data: FormRegister) => Promise<any>) => {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email || '')) {
//       alert('Please enter a valid email address.');
//       return;
//     }
//     try {
//       const response = await updateProfile(formData);
//       alert('Profile updated successfully!');
//       setFormData(initialValues); 
//       console.log('Profile updated successfully:', response);
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     }
//   };

//   const resetForm = () => {
//     setFormData(initialValues);
//   };

//   return {
//     formData,
//     setFormData,
//     handleInputChange,
//     handleImageChange,
//     handleSubmit,
//     resetForm,
//     imagePreviewUrl,
//   };
// };

// export default useForm;
