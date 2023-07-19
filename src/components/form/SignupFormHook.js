import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 character or less"),
});
const SignupFormHook = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({ resolver: yupResolver(schemaValidation), mode: "onChange" });
  // console.log(
  //   "🚀 ~ file: SignupFormHook.js:16 ~ SignupFormHook ~ isSubmitting:",
  //   isSubmitting
  // );
  // console.log(
  //   "🚀 ~ file: SignupFormHook.js:17 ~ SignupFormHook ~ isValid:",
  //   isValid
  // );
  // console.log(
  //   "🚀 ~ file: SignupFormHook.js:17 ~ SignupFormHook ~ isDirty:",
  //   isDirty
  // );
  // console.log(
  //   "🚀 ~ file: SignupFormHook.js:17 ~ SignupFormHook ~ dirtyFields:",
  //   dirtyFields
  // );
  const watchShowAge = watch("showAge", false);
  // console.log(
  //   "🚀 ~ file: SignupFormHook.js:36 ~ SignupFormHook ~ watchShowAge:",
  //   watchShowAge
  // );
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("send data to BE");
      // after successfully submitted
      // then reset form
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "duythai");
    setValue("lastName", "nguyen");
    setValue("email", "duythai@gmail.com");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register("firstName")}
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 20,
          // })}
        />
        {errors?.firstName && (
          <div className="text-sm text-red-500">
            {errors.firstName?.message}
          </div>
        )}
        {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-sm text-red-500">
            Must be maximum 20 character
          </div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          type="email"
          control={control}
        ></MyInput>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            name=""
            id=""
            placeholder="Please enter your age"
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div className="flex flex-col mt-5">
        <button
          className="p-4 bg-green-400 text-white rounded-lg"
          onClick={handleSetDemoData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  console.log("🚀 ~ file: SignupFormHook.js:175 ~ MyInput ~ props:", props);
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  // console.log("🚀 ~ file: SignupFormHook.js:180 ~ MyInput ~ field:", field)
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignupFormHook;
