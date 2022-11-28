import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase.config";
import { createContext } from "react";

export const RequestContext = createContext({
  request: [],
  countRequest: 0,
  isLoading: false,
  fetchPedidos: () => {},
});

const RequestContextProvider = ({ children }) => {
  const [request, setRequest] = useState([]);
  const [requestAllMoment, setRequestAllMoment] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const countRequest = request.length;
  const fetchPedidos = async () => {
    try {
      setIsLoading(true);
      const pedidosFromFirestore = [];
      const querySnapshot = await getDocs(collection(db, "Pedidos"));
      querySnapshot.forEach((doc) => {
        let data = { ...doc.data(), idFromFirestore: doc.id };
        pedidosFromFirestore.push(data);
      });
      setRequest(pedidosFromFirestore);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPedidosAllMoment = async () => {
    try {
      setIsLoading(true);
      const pedidosFromFirestore = [];
      const querySnapshot = await getDocs(collection(db, "Pedidos"));
      querySnapshot.forEach((doc) => {
        let data = { ...doc.data(), idFromFirestore: doc.id };
        pedidosFromFirestore.push(data);
      });
      setRequestAllMoment(pedidosFromFirestore);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchPedidos();
    }, 5000);
  }, []);

  return (
    <RequestContext.Provider
      value={{ request, countRequest, isLoading, fetchPedidos }}
    >
      {children}
    </RequestContext.Provider>
  );
};
export default RequestContextProvider;
