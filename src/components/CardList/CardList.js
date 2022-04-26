import Card from "../Card/Card";
import "../../styles/CardList/CardList.scss";
import { ReactComponent as DefaultUserAvatar } from "../../images/photo-cover.svg";

const CardList = ({ users }) => {
  return (
    <>
      {users.length === 0 && <div>User(s) not found. Create one!</div>}
      <ul className="card-list">
        {users.map((card) => (
          <li className="card-list__item" key={card?.id}>
            <Card
              email={card?.email}
              name={card?.name}
              phone={card?.phone}
              position={card?.position}
              photo={`${card.photo ? card.photo : <DefaultUserAvatar/>}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardList;
