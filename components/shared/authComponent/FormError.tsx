import {CircleAlertIcon} from "lucide-react";
import React from "react";

interface FormErrorProps {
  message?: string;
}

const FormError = ({message}: FormErrorProps) => {
  if (!message) return null; // Return null if the message prop is empty

  return (
    <div
      className={`flex items-center bg-destructive textdestructive-foreground text-center p-3 uppercase font-bold mb-3 rounded gap-x-5 text-sm `}
    >
      <CircleAlertIcon width={20} height={20} />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
