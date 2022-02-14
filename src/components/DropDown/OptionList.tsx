import { OptionProps } from "../../types/types";
import "./DropDown.scss"
import MenuOption from "./MenuOption";

type OptionsListProps = {
  items: OptionProps[];
  closeMenu: () => void; 
  left? : boolean;
}

const OptionsList = ({items, ...props}: OptionsListProps) => {
  return (
      <div className={"optionsContainer"}>
        {items.map((item, index) => {
            return (
                <MenuOption 
                key={`${item.label}_${index}`} 
                close={props.closeMenu}
                {...item}
                />
                )
        })}
      </div>
  );
};

export default OptionsList;
