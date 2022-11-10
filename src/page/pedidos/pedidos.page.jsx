import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

import { db } from "../../config/firebase.config";

const RequestPage = () => {
  const [request, setRequest] = useState();

  const date = new Date();
  const currentDate = date.toLocaleDateString();

  const fetchPedidos = async () => {
    try {
      const requestFromFirestore = [];

      const querySnapshot = await getDocs(collection(db, "Pedidos"));
      querySnapshot.forEach((doc) => {
        requestFromFirestore.push(doc.data());
      });

      setRequest(requestFromFirestore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);
};
export default RequestPage;
