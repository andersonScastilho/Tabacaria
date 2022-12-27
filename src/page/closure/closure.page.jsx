import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import LoadingComponent from "../../component/loading/loading.component";

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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

const ClosurePage = () => {
  const [request, setRequest] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchRequest = async () => {
    try {
      setIsLoading(true);
      const requestFromFirestore = [];
      const querySnapshot = await getDocs(collection(db, "Pedidos"));
      querySnapshot.forEach((doc) => {
        let data = { ...doc.data(), idFromFirestore: doc.id };
        requestFromFirestore.push(data);
      });
      setRequest(requestFromFirestore);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const { register, handleSubmit } = useForm();

  const [requestFiltred, setRequestFiltred] = useState();

  const TotalRequest = requestFiltred?.reduce((acc) => {
    return acc + 1;
  }, 0);

  const totalPrice = requestFiltred?.reduce((acc, item) => {
    return acc + item.priceTotal;
  }, 0);

  const PaymentInCash = requestFiltred?.filter((item) => {
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
    const startDate = new Date(`${data.startDate} ${data.starTime}`).getTime();
    const endDate = new Date(`${data.endDate} ${data.endTime}`).getTime();

    const requestFiltredDate = request.filter((request) => {
      return request.currentDate >= startDate && request.currentDate <= endDate;
    });

    setRequestFiltred(requestFiltredDate);
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      <Header />
      <FechamentoContainer>
        <FechamentoFilterContainer>
          <LabelFilterFechamento>Data inicio: </LabelFilterFechamento>
          <InputFilterFechamento
            type="date"
            {...register("startDate", {
              required: true,
              min: "2022-01-01",
              max: "2026-12-31",
            })}
          />
          <LabelFilterFechamento htmlFor="">Hora inicio:</LabelFilterFechamento>
          <InputFilterFechamento
            type="time"
            {...register("starTime", {
              required: true,
            })}
          />

          <LabelFilterFechamento htmlFor="">Data fim: </LabelFilterFechamento>
          <InputFilterFechamento
            type="date"
            {...register("endDate", {
              required: true,
              min: "2022-01-01",
              max: "2026-12-31",
            })}
          />
          <LabelFilterFechamento htmlFor="">Hora fim: </LabelFilterFechamento>
          <InputFilterFechamento type="time" {...register("endTime")} />

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
              {PaymentInCash !== undefined ? `${PaymentInCash?.length}` : null}
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
              {totalPrice !== undefined ? `R$${totalPrice}` : null}
            </InfoText>
          </FechamentoItemContent>
        </FechamentoContent>
      </FechamentoContainer>
      <Footer />
    </>
  );
};
export default ClosurePage;
