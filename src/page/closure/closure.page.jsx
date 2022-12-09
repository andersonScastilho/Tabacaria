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
import moment from "moment/moment";

const ClosurePage = () => {
  // const { currentUser, isAuthenticated } = useContext(UserContext);
  const { request, fetchRequest } = useContext(RequestContext);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetchRequest();
  }, []);

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
    const dateInicio = moment(data.dateInicio).format("DD/MM/YYYY");
    const dateFim = moment(data.dateFim).format("DD/MM/YYYY");

    const horaFim = data.horaFim;
    const horaInicio = data.horaInicio;

    const requestEd = request.filter((request) => {
      const dateRequest = moment(`${request.currentDate}`);

      const horaRequest = moment(`${request.currentHors}`);

      return (
        (dateRequest._i >= dateInicio && dateRequest._i <= dateFim) ||
        (horaRequest._i >= horaInicio && horaRequest._i <= horaFim)
      );
    });

    console.log(requestEd);
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
