import { useContext } from "react";
import Footer from "../../component/footer/footer.component";
import Header from "../../component/header/header.component";
import { UserContext } from "../../contexts/user.context";
import { RequestContext } from "../../contexts/request.context";
import { useForm } from "react-hook-form";
import {
  FechamentoContainer,
  FechamentoFilterContainer,
  InputFilterFechamento,
  LabelFilterFechamento,
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

    let dataInicioFormatada =
      adicionaZero(dateInicio.getDate() + 1).toString() +
      "/" +
      adicionaZero(dateInicio.getMonth() + 1).toString() +
      "/" +
      dateInicio.getFullYear();

    let dateFim = new Date(data.dateFim);

    let horaFim = `${data.horaFim}:59`;

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
        <div
          style={{
            background: "#fff",
            height: "250px",
            margin: "auto",
            border: "2px solid black",
            borderRadius: "7px",
          }}
        >
          {/* <h3>{`Fechamento de ${}`}</h3> */}

          <p>Pagamento em dinheiro: {`${PaymentInDinheiro?.length}`}</p>
          <p>Pagamento no cartao debito: {`${PaymentInDebitCard?.length}`}</p>
          <p>Pagamento no cartao credito: {`${PaymentInCreditCard?.length}`}</p>
          <p>Pagamento no pix: {`${PaymentInPix?.length}`}</p>
          <p> Lucro Total: {`R$${PriceTotalRequest}`}</p>
          <p>Total de pedidos: {`${TotalRequest}`}</p>
        </div>
      </FechamentoContainer>
      <Footer />
    </>
  );
};
export default FechamentoPage;
