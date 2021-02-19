const Input = (props) => {
  const { label, ...rest } = props;
  return (
    <div className="input-container">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};

export default Input;