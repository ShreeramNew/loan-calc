import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useGeneralContext from "../../hooks/useGeneralContext";
import { FaCaretDown } from "react-icons/fa6";

export default function BasicMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const { ActiveCurrency, setActiveCurrency } = useGeneralContext();

   return (
      <div>
         <div
            onClick={handleClick}
            className={` ${
               open ? "  !border-blue-500 !border-2" : "border-gray-400"
            } w-[5rem] hover:border-gray-600  h-[3.5rem] border-[1px] relative rounded-[6px] flex justify-center items-center gap-1 cursor-pointer  text-gray-800`}
         >
            <div>{ActiveCurrency}</div>
            <FaCaretDown
               color="#596374"
               className={` ${
                  open ? " rotate-[-180deg]" : " rotate-[0deg]"
               } transition-all  duration-300`}
               rotate={open ? 90 : 0}
            />
            <div
               className={` bg-white absolute top-[-12px] py-[2px] px-[5px] text-[12px] ${
                  open ? "  !text-blue-500 " : "!text-gray-600"
               } `}
            >
               Currency
            </div>
         </div>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               "aria-labelledby": "basic-button",
            }}
         >
            {...["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"].map((item) => {
               return (
                  <MenuItem
                     onClick={() => {
                        setActiveCurrency(item);
                        handleClose();
                     }}
                     className=" cursor-pointer px-[1rem] py-[5px]"
                  >
                     {item}
                  </MenuItem>
               );
            })}
         </Menu>
      </div>
   );
}
