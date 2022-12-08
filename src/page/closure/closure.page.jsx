import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { RequestContext } from "../../contexts/request.context";

import Header from "../../component/header/header.component";
import Footer from "../../component/footer/footer.component";
import CustomButton from "../../component/custom-button/custom-button.component";

import {
  FechamentoContainer,
  FechamentoContent,
  FechamentoFilterContainer,
  FechamentoItemContent,
  InfoNameText,
  InfoText,
  InputFilterFechamento,
  LabelFilterFechamento,
  TitleFechamento,
} from "./closure.styles";
import { useEffect } from "react";

const ClosurePage = () => {
  // const { currentUser, isAuthenticated } = useContext(UserContext);
  const { request, fetchRequest } = useContext(RequestContext);

  const { register, handleSubmit } = useForm();
fetchRequest();

  const [requestFiltred, setRequestFiltred] = useState();

  const TotalRequest = requestFiltred?.reduce((acc) => {
    return acc + 1;
  }, 0);

  const PriceTotalRequest = requestFiltred?.reduce((acc, item) => {
    return acc + item.priceTotal;
  }, 0);

  const PaymentInDinheiro = requestFiltred?.filter((item) => {
    return item.formOfPayment === "dinheiro";
  });
  const PaymentInCreditCard = requestFiltred?.filter((item) => {
    return item.formOfPayment === "cartaoCredito";
  });

  const PaymentInDebitCard = requestFiltred?.filter((item) => {
    return item.formOfPayment === "cartaoDebito";
  });

  const PaymentInPix = requestFiltred?.filter((item) => {
    return item.formOfPayment === "pix";
  });

  const handleSubmitPress = (data) => {

    const dateInicio = data.dateInicio.split("-").reverse().join("/");
    const dateFim = data.dateFim.split("-").reverse().join("/");

    const requestsFromDate = request.filter((request) => {
      return (
        request.currentDate >= dateInicio &&
        request.currentDate <= dateFim &&
        request.currentHors >= data.horaInicio &&
        request.currentHors <= data.horaFim
      );
    });
    setRequestFiltred(requestsFromDate);
  };

  return (
    <>
      <Header />
      <FechamentoContainer>
        <FechamentoFilterContainer>
          <LabelFilterFechamento>Data inicio: </LabelFilterFechamento>
          <InputFilterFechamento
            type="date"
            {...register("dateInicio", {
              required: true,
            })}
          />
          <LabelFilterFechamento htmlFor="">Hora inicio:</LabelFilterFechamento>
          <InputFilterFechamento type="time" {...register("horaInicio")} />

          <LabelFilterFechamento htmlFor="">Data fim: </LabelFilterFechamento>
          <InputFilterFechamento
            type="date"
            {...register("dateFim", {
              required: true,
            })}
          />
          <LabelFilterFechamento htmlFor="">Hora fim: </LabelFilterFechamento>
          <InputFilterFechamento type="time" {...register("horaFim")} />

          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            consultar fechamento
          </CustomButton>
        </FechamentoFilterContainer>
        <FechamentoContent>
          <TitleFechamento>Fechamento</TitleFechamento>
          <FechamentoItemContent>
            <InfoNameText>Quantidade de pedidos: </InfoNameText>
            <InfoText>
              {TotalRequest !== undefined ? `${TotalRequest}` : null}
            </InfoText>
          </FechamentoItemContent>
          <FechamentoItemContent>
            <InfoNameText>Pagamento em dinheiro: </InfoNameText>
            <InfoText>
              {PaymentInDinheiro !== undefined
                ? `${PaymentInDinheiro?.length}`
                : null}
            </InfoText>
          </FechamentoItemContent>
          <FechamentoItemContent>
            <InfoNameText>Pagamento no cartao debito:</InfoNameText>
            <InfoText>
              {PaymentInDebitCard !== undefined
                ? `${PaymentInDebitCard?.length}`
                : null}
            </InfoText>
          </FechamentoItemContent>
          <FechamentoItemContent>
            <InfoNameText>Pagamento no cartao credito:</InfoNameText>
            <InfoText>
              {PaymentInCreditCard !== undefined
                ? `${PaymentInCreditCard?.length}`
                : null}
            </InfoText>
          </FechamentoItemContent>
          <FechamentoItemContent>
            <InfoNameText>Pagamento no pix:</InfoNameText>
            <InfoText>
              {PaymentInPix !== undefined ? `${PaymentInPix?.length}` : null}
            </InfoText>
          </FechamentoItemContent>
          <FechamentoItemContent>
            <InfoNameText>Lucro Total:</InfoNameText>
            <InfoText>
              {PriceTotalRequest !== undefined
                ? `R$${PriceTotalRequest},00`
                : null}
            </InfoText>
          </FechamentoItemContent>
        </FechamentoContent>
      </FechamentoContainer>
      <Footer />
    </>
  );
};
export default ClosurePage;
