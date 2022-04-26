import Section from "../../Section/Section";

const SectionRegistration = ({ children, success }) => {
  return (
    <Section className="registration">
      <h2 className="registration__title">{`${
        success ? "User successfully registered" : "Working with POST request"
      }`}</h2>
      {children}
    </Section>
  );
};

export default SectionRegistration;
