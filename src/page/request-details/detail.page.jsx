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

  //transformando id: string em number
  const idNumber = Number(id);

  const currentRequest = request.filter((request) => {
    return request.id === idNumber;
  });

  return (
    <>
      <Header />
      {currentRequest.map((request) => (
        <DetailsRequestContainer key={request.id}>
          <DetailsRequestContent>
            <div style={{ display: "flex", gap: "4px" }}>
              <h4>Cliente: </h4>
              <p style={{ fontWeight: "500", fontSize: "16px" }}>
                {request.nameClient}
              </p>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              <h4>Mesa:</h4>
              <p style={{ fontWeight: "500", fontSize: "16px" }}>
                {request.tableClient}
              </p>
            </div>
            <div style={{ position: "relative", left: "25px" }}>
              <p>Produtos</p>
              <ol>
                {request.products.map((product) => (
                  <li key={request.id}>{product.name}</li>
                ))}
              </ol>
            </div>
          </DetailsRequestContent>
        </DetailsRequestContainer>
      ))}
      <Footer />
    </>
  );
};
export default DetailsPage;
