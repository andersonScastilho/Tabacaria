import { useContext } from "react";
import { RequestContext } from "../../contexts/request.context";
import { useParams } from "react-router-dom";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";

import {
  DetailsRequestContainer,
  DetailsRequestContent,
} from "./details.style";

const DetailsPage = () => {
  const { request } = useContext(RequestContext);
  const { id } = useParams();

  const currentRequest = request.filter((request) => {
    return request.id == id;
  });

  return (
    <>
      <Header />
      {currentRequest.map((request) => (
        <DetailsRequestContainer key={request.id}>
          <DetailsRequestContent>
            <p>{request.nameClient}</p>
          </DetailsRequestContent>
        </DetailsRequestContainer>
      ))}
      <Footer />
    </>
  );
};
export default DetailsPage;
