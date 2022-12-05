import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase.config";
import { createContext } from "react";

export const RequestContext = createContext({
  request: [],
  countRequest: 0,
  isLoading: false,
  fetchPedidos: () => Promise.resolve(),
});

const RequestContextProvider = ({ children }) => {
  const [request, setRequest] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <RequestContext.Provider value={{ request, isLoading, fetchPedidos }}>
      {children}
    </RequestContext.Provider>
  );
};
export default RequestContextProvider;
