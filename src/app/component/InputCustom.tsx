"use client";

import { Input } from "@nextui-org/input";
import { ReactNode, useState } from "react";
import {EyeSlashFilledIcon , EyeFilledIcon} from "@/app/component/Icon"

export default function InputCustom({
  startContent,
  eyeVisible,
  label,
  placeholder,
}: {
  startContent: ReactNode,
  eyeVisible: boolean,
  label: string,
  placeholder: string,
}) {
  const [visible, setVisible] = useState(false);
  const toggleEyeVisible = () => setVisible(!visible);

  return (
    <Input
      label={label}
      labelPlacement="outside"
      placeholder={placeholder}
      startContent={startContent}
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
      type= { eyeVisible ? visible ? "text": "password" : "email" }
      variant="underlined"
    />
  );
}
