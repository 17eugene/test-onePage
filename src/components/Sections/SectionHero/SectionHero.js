import Section from "../../Section/Section";
import Button from "../../Button/Button";
import "../../../styles/Section/Section.scss";

const SectionHero = () => {
  return (
    <Section className="hero">
      <h1 className="hero__title">
        Test assignment for front-end developer
      </h1>
      <p className="hero__text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button type="button">Sign up</Button>
    </Section>
  );
};

export default SectionHero;
