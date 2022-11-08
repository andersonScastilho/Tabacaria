import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = (props) => {
  return (
    <CustomButtonContainer onClick={props.onClick}>
      {props.children}
    </CustomButtonContainer>
  );
};
export default CustomButton;
