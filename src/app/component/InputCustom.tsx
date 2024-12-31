"use client";

import { Input } from "@nextui-org/input";
import { ChangeEvent, ChangeEventHandler, ReactNode, useState } from "react";
import {EyeSlashFilledIcon , EyeFilledIcon} from "@/app/component/Icon"

export default function InputCustom({
  startContent,
  eyeVisible,
  label,
  placeholder,
  inputType,
  parentValueHandler,
}: {
  startContent: ReactNode,
  eyeVisible: boolean,
  label: string,
  placeholder: string,
  inputType : string,
  parentValueHandler : (value : string) => void
}) {
  const [visible, setVisible] = useState(false);
  const toggleEyeVisible = () => setVisible(!visible);
  const [value, setValue] = useState("");

  const changeHandler = (value : string) => {
    setValue(value)
    parentValueHandler(value)
  }

  return (
    <Input
      label={label}
      labelPlacement="outside"
      onValueChange={changeHandler}
      placeholder={placeholder}
      startContent={startContent}
      value={value}
      autoComplete="off"
      endContent= { eyeVisible ? 
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleEyeVisible}
        >
          {visible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
        :
        ""
      }
      type= { eyeVisible ? visible ? "text": "password" : inputType }
      variant="underlined"
    />
  );
}
