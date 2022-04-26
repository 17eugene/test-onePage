import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../../utils/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  getUsersPerPage,
  getAllUsers,
  getToken,
  submitData,
} from "../../services/API-service/api";
import "../../styles/Section/Section.scss";
import "../../styles/FileInput/FileInput.scss";
import { ReactComponent as SuccessBanner } from "../../images/success-image.svg";

import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Positions from "../Positions/Positions";
import SectionHero from "../Sections/SectionHero/SectionHero";
import SectionUser from "../Sections/SectionUsers/SectionUsers";
import SectionRegistration from "../Sections/SectionRegistration/SectionRegistration";

const MainContainer = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [page, setPage] = useState(1);
  const [countPerPage] = useState(6);
  const [selectedFile, setSelectedFile] = useState(null);
  const [token, setToken] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    getUsersPerPage(page, countPerPage).then(({ data }) =>
      setCardList(data.users)
    );
    getAllUsers()
      .then(({ data }) => setAllUsers(data.total_users))
      .then(setTotalPages(Math.ceil(allUsers / countPerPage)));
  }, [page, countPerPage, allUsers]);

  useEffect(() => {
    getToken().then(({ data }) => setToken(data.token));
  }, []);

  const showMoreHandler = (e) => {
    getUsersPerPage(page + 1, countPerPage).then(
      setPage((prevPage) => prevPage + 1)
    );
  };

  const selectFileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("position_id", data.position);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    const config = {
      headers: { Token: `${token}` },
    };

    submitData(formData, config)
      .then(({ data }) => {
        if (data.success) {
          console.log(data);
          setSuccessRegistration(true);
          setSelectedFile(null);
          getUsersPerPage(page, countPerPage).then(({ data }) => {
            setCardList(data.users)
            setPage(1)
          }
          );
        }
      })
      .catch((err) => console.log(err));

    reset();
  };

  return (
    <main>
      <SectionHero />
      <SectionUser
        cardList={cardList}
        page={page}
        totalPages={totalPages}
        showMoreHandler={showMoreHandler}
      />

      <SectionRegistration success={successRegistration}>
        {successRegistration ? (
          <div className="success">
            <SuccessBanner />
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name")} placeholder="Your name" type="text" />
            <div>
              {errors?.name && (
                <p className="error-message">{errors?.name?.message}</p>
              )}
            </div>
            <Input {...register("email")} placeholder="E-mail" type="text" />
            <div>
              {errors?.email && (
                <p className="error-message">{errors?.email?.message}</p>
              )}
            </div>

            <Input
              {...register("phone")}
              textLabel="+38 (XXX) XXX-XX-XX"
              placeholder="Phone"
              type="text"
              id="phone"
            />
            <div>
              {errors?.phone && (
                <p className="error-message">{errors?.phone?.message}</p>
              )}
            </div>

            <Positions errors={errors} register={register} />

            <div className="upload-file__wrapper">
              <Input
                {...register("file")}
                onChange={selectFileHandler}
                type="file"
                textLabel="Upload"
              />
              <div className="file-name-container">
                <p
                  className={`${
                    selectedFile
                      ? "upload-file__placeholder-filled"
                      : "upload-file__placeholder"
                  }`}
                >
                  {selectedFile ? selectedFile?.name : "Upload your file"}
                </p>
              </div>
            </div>

            <Button disabled={!isValid} type="submit">
              Sign up
            </Button>
          </Form>
        )}
      </SectionRegistration>
    </main>
  );
};

export default MainContainer;
