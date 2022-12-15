import { useState, useContext, useEffect } from "react";
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

const ClosurePage = () => {
  const { request, fetchRequest } = useContext(RequestContext);
  useEffect(() => {
    fetchRequest();
  }, []);

  const { register, handleSubmit } = useForm();

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
    const dateInicio = new Date (`${data.dateInicio} ${data.horaInicio}`).getTime()
    const dateFim = new Date (`${data.dateFim} ${data.horaFim}`).getTime()

    const requestFiltredDate = request.filter((request) => {
      return request.currentDate >= dateInicio && request.currentDate <= dateFim
    });

    setRequestFiltred(requestFiltredDate);
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
              required: true, min:'2022-01-01', max: '2026-12-31'
            })}
          />
          <LabelFilterFechamento htmlFor="">Hora inicio:</LabelFilterFechamento>
          <InputFilterFechamento type="time" {...register("horaInicio", {
            required: true,
          })} />

          <LabelFilterFechamento htmlFor="">Data fim: </LabelFilterFechamento>
          <InputFilterFechamento
            type="date"
            {...register("dateFim", {
              required: true, min:'2022-01-01', max:'2026-12-31'
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
