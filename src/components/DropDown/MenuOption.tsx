import { OptionProps } from "../../types/types";

const MenuOption = (props: OptionProps & {close: () => void}) => {

  // console.log(props);

  const action = () => {
    if(props.toggle) {
      props.optionAction(); 
      props.close();
    } else {
      props.optionAction();
    }
  }

  return (
    <button className={` ${props.primary && `primary`} option`} onClick={action}> 
      {props.label.toUpperCase()}
    </button>
  );
};

export default MenuOption;
