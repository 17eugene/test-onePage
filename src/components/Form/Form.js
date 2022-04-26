import "../../styles/Form/Form.scss";

const Form = ({ children, onSubmit }) => {
  return <form className="registration__form" onSubmit={onSubmit}>{children}</form>;
};

export default Form;
