import Section from "../../Section/Section";
import Button from "../../Button/Button";
import CardList from "../../CardList/CardList";
import "../../../styles/Section/Section.scss";

const SectionUser = ({cardList, page, totalPages, showMoreHandler}) => {
  return (
    <Section className="users">
      <h2 className="users__title">
        Working with GET request
      </h2>
      <CardList users={cardList} />
      {page === totalPages ? null : ( 
        <Button onClick={showMoreHandler} type="button" variant>
          Show more
        </Button>
      )}
    </Section>
  );
};

export default SectionUser;