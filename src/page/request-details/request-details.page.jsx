import { useContext } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { BsFillPersonFill, BsEyeSlashFill } from "react-icons/bs";
import { BiX, BiCheck } from "react-icons/bi";
import { GiTable } from "react-icons/gi";
import { useForm } from "react-hook-form";

import { db } from "../../config/firebase.config";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { UserContext } from "../../contexts/user.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";

import {
  DataRequestContainer,
  DataRequestText,
  DetailsRequestContainer,
  DetailsRequestContent,
  RequestProductsContent,
  RequestProductsContainer,
  TitleProductText,
  StatusText,
  SelectOfPayment,
  OptionOfPayment,
} from "./request-details.style";
import { useState } from "react";

const RequestDatilsPage = () => {
  const { currentUser } = useContext(UserContext);

  const { id } = useParams();
  const alert = useAlert();

  const { register, handleSubmit } = useForm();

  const [currentRequest, setCurrentRequest] = useState({
    currentDate: "",
    currentHOrs: "",
    formOfPayment: "",
    nameClient: "",
    observation: "",
    paymentStats: "",
    priceTotal: "",
    products: [],
    status: "",
    tableClient: "",
  });

  // onSnapshot(doc(db, "Pedidos", id), (doc) => {
  //   setCurrentRequest(doc.data());
  // });

  const allProductOfRequest = currentRequest?.products.every((item) => {
    return item.status === "realizado";
  });

  const handleFinalizeItem = async (product) => {
    const frankDocRef = doc(db, "Pedidos", id);

    let dataProducts = [...currentRequest.products];

    let dataProductSemCurrentProduct = dataProducts.filter((item) => {
      return item.id !== product.id;
    });

    if (product.status !== "realizado") {
      if (product.mark) {
        await updateDoc(frankDocRef, {
          products: [
            ...dataProductSemCurrentProduct,
            {
              id: product.id,
              imageUrl: product.imageUrl,
              name: product.name,
              price: product.price,
              quantity: product.quantity,
              status: "realizado",
              mark: product.mark,
            },
          ],
        });
      } else {
        await updateDoc(frankDocRef, {
          products: [
            ...dataProductSemCurrentProduct,
            {
              id: product.id,
              imageUrl: product.imageUrl,
              name: product.name,
              price: product.price,
              quantity: product.quantity,
              status: "realizado",
            },
          ],
        });
      }
      alert.success("O status do item foi alterado");
    } else {
      alert.error("Item ja foi finalizado");
    }
  };
  const handleFinalizeRequest = async (data) => {
    const requestRef = doc(db, "Pedidos", id);

    if (allProductOfRequest === true) {
      if (
        currentRequest.formOfPayment !== "false" &&
        currentRequest.paymentStats === "realizado"
      ) {
        await updateDoc(requestRef, {
          status: "finalizado",
        });
        alert.success("O status do pedido foi alterado");
      } else if (
        currentRequest.formOfPayment === "false" &&
        data.formOfPayment !== "false"
      ) {
        await updateDoc(requestRef, {
          status: "finalizado",
          formOfPayment: data.formOfPayment,
          paymentStats: "realizado",
        });

        alert.success("O status do pedido foi alterado");
      } else {
        alert.error("Informe a forma de pagamento");
      }
    } else {
      alert.error("Tem item pendente");
    }
  };

  return (
    <>
      <Header />
      <DetailsRequestContainer>
        <DetailsRequestContent>
          <DataRequestContainer>
            <DataRequestText>
              <BsFillPersonFill color="black" size={25} />
            </DataRequestText>
            <DataRequestText>Cliente:</DataRequestText>
            <DataRequestText>{currentRequest.nameClient}</DataRequestText>
          </DataRequestContainer>
          <DataRequestContainer>
            <DataRequestText>
              <GiTable color="black" size={29} />
            </DataRequestText>
            <DataRequestText>Mesa:</DataRequestText>
            <DataRequestText>{currentRequest.tableClient}</DataRequestText>
          </DataRequestContainer>
          <DataRequestContainer>
            <DataRequestText>
              <BsEyeSlashFill />
            </DataRequestText>
            <DataRequestText>Observação:</DataRequestText>
            <DataRequestText>{currentRequest.observation}</DataRequestText>
          </DataRequestContainer>
          {currentRequest.paymentStats === "pendente" ? (
            <>
              <SelectOfPayment
                {...register("formOfPayment", {
                  required: true,
                })}
              >
                <OptionOfPayment value="false"></OptionOfPayment>
                <OptionOfPayment value="dinheiro">Dinheiro</OptionOfPayment>
                <OptionOfPayment value="cartaoDebito">
                  Cartão - Debito
                </OptionOfPayment>
                <OptionOfPayment value="cartaoCredito">
                  Cartao - Credito
                </OptionOfPayment>
                <OptionOfPayment value="pix">Pix</OptionOfPayment>
              </SelectOfPayment>
            </>
          ) : null}
          <DataRequestContainer>
            <DataRequestText>Pagamento</DataRequestText>
            <StatusText status={currentRequest.paymentStats}>
              {currentRequest.paymentStats}
            </StatusText>
            {currentRequest.paymentStats === "pendente" ? (
              <DataRequestContainer>
                <DataRequestText style={{ position: "relative", top: "5px" }}>
                  <BiX size={25} color="red" />
                </DataRequestText>
              </DataRequestContainer>
            ) : (
              <DataRequestText>
                <BiCheck size={25} color="green" />
              </DataRequestText>
            )}
          </DataRequestContainer>
          <DataRequestContainer>
            <DataRequestText>Status Pedido</DataRequestText>
            <StatusText status={currentRequest.status}>
              {currentRequest.status}
            </StatusText>
            {currentRequest.status === "em andamento" ? (
              <DataRequestContainer>
                <DataRequestText style={{ position: "relative", top: "5px" }}>
                  <BiX size={25} color="red" />
                </DataRequestText>
              </DataRequestContainer>
            ) : (
              <DataRequestText>
                <BiCheck size={25} color="green" />
              </DataRequestText>
            )}
          </DataRequestContainer>
          <TitleProductText>Produtos</TitleProductText>
          <RequestProductsContainer>
            {currentRequest.products.map((product) => (
              <RequestProductsContent key={product.id}>
                {product.mark ? (
                  <DataRequestText>{`item: ${product.mark} - ${product.name}`}</DataRequestText>
                ) : (
                  <DataRequestText>{`item: ${product.name}`}</DataRequestText>
                )}
                <DataRequestText>
                  Quantidade: {product.quantity}
                </DataRequestText>
                <DataRequestContainer>
                  <DataRequestText>Status:</DataRequestText>
                  <StatusText status={product.status}>
                    {product.status}
                  </StatusText>
                </DataRequestContainer>
                <CustomButton onClick={() => handleFinalizeItem(product)}>
                  Finalizar item
                </CustomButton>
              </RequestProductsContent>
            ))}
          </RequestProductsContainer>
          Total Pedido: ${currentRequest.priceTotal}
          {currentUser.email === "userteste@gmail.com" ? (
            <CustomButton onClick={() => handleSubmit(handleFinalizeRequest)()}>
              Finalizar Pedido
            </CustomButton>
          ) : null}
        </DetailsRequestContent>
      </DetailsRequestContainer>
      <Footer />
    </>
  );
};
export default RequestDatilsPage;
