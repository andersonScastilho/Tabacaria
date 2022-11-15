import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase.config";
import { createContext } from "react";

export const RequestContext = createContext({
  request: [],
  countRequest: 0,
});

const RequestContextProvider = ({ children }) => {
  const [request, setRequest] = useState([]);

  const countRequest = request.length;

  const fetchPedidos = async () => {
    try {
      const pedidosFromFirestore = [];
      const querySnapshot = await getDocs(collection(db, "Pedidos"));
      querySnapshot.forEach((doc) => {
        let data = { ...doc.data(), idFromFirestore: doc.id };
        pedidosFromFirestore.push(data);
      });
      setRequest(pedidosFromFirestore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  return (
    <RequestContext.Provider value={{ request, countRequest }}>
      {children}
    </RequestContext.Provider>
  );
};
export default RequestContextProvider;
