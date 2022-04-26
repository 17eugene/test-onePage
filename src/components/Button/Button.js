import "../../styles/Button/Button.scss";

const Button = ({ children, type, variant, onClick, disabled }) => {
  return <button disabled={disabled} onClick={onClick} className={`${variant ? "hero-button" : "button"} `} type={type}>{children}</button>;
};

export default Button;
