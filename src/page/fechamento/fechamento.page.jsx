import { useContext } from "react";
import Footer from "../../component/footer/footer.component";
import Header from "../../component/header/header.component";
import { UserContext } from "../../contexts/user.context";
import { RequestContext } from "../../contexts/request.context";
import { useForm } from "react-hook-form";
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
} from "./fechamento.styles";
import { useState } from "react";
import CustomButton from "../../component/custom-button/custom-button.component";

const FechamentoPage = () => {
  // const { currentUser, isAuthenticated } = useContext(UserContext);
  const { request } = useContext(RequestContext);

  const { register, handleSubmit } = useForm();

  const [requesFiltred, setRequestFiltred] = useState();

  const TotalRequest = requesFiltred?.reduce((acc) => {
    return acc + 1;
  }, 0);

  const PriceTotalRequest = requesFiltred?.reduce((acc, item) => {
    return acc + item.priceTotal;
  }, 0);

  const PaymentInDinheiro = requesFiltred?.filter((item) => {
    return item.formOfPayment === "dinheiro";
  });
  const PaymentInCreditCard = requesFiltred?.filter((item) => {
    return item.formOfPayment === "cartaoCredito";
  });

  const PaymentInDebitCard = requesFiltred?.filter((item) => {
    return item.formOfPayment === "cartaoDebito";
  });

  const PaymentInPix = requesFiltred?.filter((item) => {
    return item.formOfPayment === "pix";
  });

  const handleSubmitPress = (data) => {
    function adicionaZero(numero) {
      if (numero <= 9) return "0" + numero;
      else return numero;
    }

    let dateInicio = new Date(data.dateInicio); //29/01/2020
    let horaInicio = `${data.horaInicio}:59`;
    let dateFim = new Date(data.dateFim);
    let horaFim = `${data.horaFim}:59`;

    let dataInicioFormatada =
      adicionaZero(dateInicio.getDate() + 1).toString() +
      "/" +
      adicionaZero(dateInicio.getMonth() + 1).toString() +
      "/" +
      dateInicio.getFullYear();

    let dataFimFormatada =
      adicionaZero(dateFim.getDate() + 1).toString() +
      "/" +
      adicionaZero(dateFim.getMonth() + 1).toString() +
      "/" +
      dateFim.getFullYear();

    const requestDateTime = request.filter((request) => {
      return (
        request.currentDate >= dataInicioFormatada &&
        request.currentDate <= dataFimFormatada &&
        request.currentHors >= horaInicio &&
        request.currentHors <= horaFim
      );
    });
    setRequestFiltred(requestDateTime);
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
                ? `R$${PriceTotalRequest}`
                : null}
            </InfoText>
          </FechamentoItemContent>
        </FechamentoContent>
      </FechamentoContainer>
      <Footer />
    </>
  );
};
export default FechamentoPage;
