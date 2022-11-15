import { useContext } from "react";
import { useAlert } from "react-alert";
import { db } from "../../config/firebase.config";
import { doc, updateDoc } from "firebase/firestore";

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
  const alert = useAlert();

  const currentRequest = request.filter((request) => {
    return request.idFromFirestore === id;
  });

  const handleChangeStatus = async () => {
    if (currentRequest[0].status === "pendente") {
      const requestRef = doc(db, "Pedidos", id);
      await updateDoc(requestRef, {
        status: "realizado",
      });
      alert.success("O status do pedido foi alterado");
      setTimeout(() => {
        window.location.reload(true);
      }, 700);
    } else {
      alert.error("Não foi possivel alterar o status do pedido");
    }
  };

  return (
    <>
      <Header />
      <DetailsRequestContainer>
        {currentRequest.map((request) => (
          <DetailsRequestContent key={request.idFromFirestore}>
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
                  <li key={product.id}>{product.name}</li>
                ))}
              </ol>
              <button onClick={handleChangeStatus}>
                Marcar como realizado
              </button>
            </div>
          </DetailsRequestContent>
        ))}
      </DetailsRequestContainer>
      <Footer />
    </>
  );
};
export default DetailsPage;
