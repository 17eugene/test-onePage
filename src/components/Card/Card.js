import "../../styles/Card/Card.scss";

const Card = ({ name, position, email, phone, photo }) => {
  return (
    <div className="card">
      <div className="card__avatar-wrapper">
        <img className="card__avatar" src={photo} alt="avatar" />
      </div>
      <p className="card__text">{name}</p>
      <p className="card__text">{position}</p>
      <p className="card__text">{email}</p>
      <p className="card__text">{phone}</p>
    </div>
  );
};

export default Card;
