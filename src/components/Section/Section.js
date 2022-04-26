import Container from "../Container/Container";

const Section = ({ className, children }) => {
  return (
    <section className={className}>
      <Container>
          {children}
      </Container>
    </section>
  );
};

export default Section;
