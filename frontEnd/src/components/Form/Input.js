import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./Common/TextError";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <br />
      <Field
        className="focus:outline-none w-96 border border-lightGray p-2 rounded"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
