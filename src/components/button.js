const Button = (props) => {
    const { label, ...rest } = props;
    return <button {...rest}>{label}</button>;
  };
  
  export default Button;
  