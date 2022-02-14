import { useState } from "react";
import { MoreIcon } from "../../icons/MoreIcon";
import { OptionProps } from "../../types/types";
import "./DropDown.scss";
import OptionsList from "./OptionList";


type DropDownOptions = {
  options: OptionProps[];
  left? : boolean;
}

const DropDown = (props: DropDownOptions) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => { 
    setOpen(!open);
  };

  return (
    <div className={"dropDown"}>
      <button className={`${props.left && "left"} iconContainer`} onClick={openMenu}>
        <MoreIcon size={45} />
      </button>
      { open && <OptionsList closeMenu={openMenu} items={props.options}/> }
    </div>
  );
};

export default DropDown;
