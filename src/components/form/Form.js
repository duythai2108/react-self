import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [fullname, setFullName] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };
  // const handleTextareaChange = (event) => {
  //   console.log(event.target.value);
  //   setMessage(event.target.value);
  // };
  // const handleSelectChange = (event) => {
  //   console.log(event.target.value);
  //   setCountry(event.target.value);
  // };
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  // const handleInputChange = (e) => {
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // if (type === "checkbox") {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.checked,
  //   });
  // } else {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  // };
  // const { handleChange } = useHandleChange({
  //   fullname: "",
  //   email: "",
  // });
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  // const handleInputChange = (e) => {
  //   const type = e.target.type;
  //   setValues({
  //     ...values,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // if (type === "checkbox") {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.checked,
  //   });
  // } else {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  // };
  // Formik + yup vs React hook form
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your full name is empty");
    } else {
      setNameError("");
    }
  };
  console.log("🚀 ~ file: form.js:76 ~ Form ~ values:", values);
  return (
    <div className="p-5">
      <form className="flex gap-x-3" onSubmit={handleSubmitForm}>
        {/* {fullname} */}
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              name="fullname"
              className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            {nameError}
          </div>
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
      {/* {message}
      <textarea
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
