import { forwardRef } from "react";
import "../../styles/Input/Input.scss";

const Input = forwardRef(
  (
    { name, value, onChange, placeholder, type, id, data_radio, textLabel },
    ref
  ) => {
    return (
      <label className={`${data_radio ? "label-radio" : "label-input"} `}>
        <input
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          id={id}
          className={`${data_radio ? "form-radio" : "form-input"}`}
        />
        <span className={`${id ? "label-input-text" : "label-radio-text"}`}>
          {textLabel}
        </span>
      </label>
    );
  }
);

export default Input;
