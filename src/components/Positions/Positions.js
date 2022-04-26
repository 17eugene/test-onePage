import { getPositions } from "../../services/API-service/api";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import "../../styles/Positions/Positions.scss";

const Positions = ({ register, errors }) => {
  const [positionList, setPositionList] = useState([]);

  useEffect(() => {
    getPositions().then(({ data }) => setPositionList(data.positions));
  }, []);

  return (
    <div className="positions">
      <h3 className="positions__title">Select your position</h3>
      <ul className="positions__list">
        {positionList.map((position) => (
          <li key={position?.id} className="positions__item">
            <Input
              {...register("position")}
              type="radio"
              textLabel={position?.name}
              value={position?.id}
              data_radio
            />
          </li>
        ))}
      </ul>
      <div>{errors?.position && <p className="error-message">{errors?.position?.message}</p>}</div>
    </div>
  );
};

export default Positions;
