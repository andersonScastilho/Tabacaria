import { LoadingContainer } from "./loading.styles";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingComponent = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  );
};
export default LoadingComponent;
