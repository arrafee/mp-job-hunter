/* eslint-disable react/prop-types */
const Input = ({ type, name, id, className, placeholder, onChange }) => {
  return (
    <>
      <input
        type={type ? type : ""}
        name={name ? name : ""}
        id={id ? id : ""}
        className={className ? className : ""}
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange ? onChange : ""}
      />
    </>
  );
};

export default Input;
