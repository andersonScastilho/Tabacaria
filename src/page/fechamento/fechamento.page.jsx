import { useContext } from "react";
import Footer from "../../component/footer/footer.component";
import Header from "../../component/header/header.component";
import { UserContext } from "../../contexts/user.context";
import { RequestContext } from "../../contexts/request.context";
import { useForm } from "react-hook-form";
import {
  FechamentoContainer,
  FechamentoFilterContainer,
} from "./fechamento.styles";
import { useState } from "react";

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
          <label>Data inicio: </label>
          <input
            type="date"
            {...register("dateInicio", {
              required: true,
            })}
          />
          <label htmlFor="">Hora inicio: </label>
          <input type="time" {...register("horaInicio")} />

          <label htmlFor="">Data fim: </label>
          <input
            type="date"
            {...register("dateFim", {
              required: true,
            })}
          />
          <label htmlFor="">Hora fim: </label>
          <input type="time" {...register("horaFim")} />

          <button onClick={() => handleSubmit(handleSubmitPress)()}>
            Teste
          </button>
        </FechamentoFilterContainer>
      </FechamentoContainer>
      <Footer />
    </>
  );
};
export default FechamentoPage;
