"use client";
import React, { useState, useRef, useEffect } from 'react';
import clsx from "clsx";
import { FaCaretDown } from "@/constants/icons";
const CustomSelect = ({ options = [], placeholder = "Select an option", onChange, className}) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);


  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onChange && onChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={clsx("relative", className)} ref={selectRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-white border text-[#949494] border-[#707070] p-[12px] primary-font text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#000] focus:border-[#000] ${className}`}
      >
        <span className="block truncate">
          {selected ? selected.label : placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <FaCaretDown />
        </span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-[#000] hover:text-white"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
