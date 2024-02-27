import { Field } from "formik";

const Select = (props) => {
  console.log(props);
  const { label, options, name } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Field
        as="select"
        className="focus:outline-none p-2 border border-lightGray rounded-md w-44"
        name={name}
      >
        {options.map((option) => {
          const { label, value } = option;
          console.log(option);
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </Field>
    </div>
  );
};

export default Select;
