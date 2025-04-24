import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  // const form = useForm();
  // destructure the form and get register function
  // console.log(form);
  const { register, handleSubmit } = useForm();
  // console.log(register("name"));
  // when we call register it requires a value for the name property for the input field and returns an object {name: "name", onBlur: (e)=>{}, onChange:(e)=>{}, ref: (ref)=>{}}
  // these properties allow us to programmatically control our form fields, which we can apply them just by destructuring this object into our component, this way all the properties of the register object will be added to our component

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          // id="exampleInputEmail1"
          // aria-describedby="emailHelp"
          {...register("email")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          {...register("password")}
          autoComplete="true"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
