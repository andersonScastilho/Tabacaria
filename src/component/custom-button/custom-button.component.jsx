import { CustomButtonStyle } from "./custom-button.style";

const CustomButton = (props) => {
  return (
    <CustomButtonStyle onClick={props.onClick}>
      {props.children}
    </CustomButtonStyle>
  );
};
export default CustomButton;
