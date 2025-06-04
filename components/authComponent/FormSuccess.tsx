import {CircleAlertIcon} from "lucide-react";
import React from "react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({message}: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div
      key={message} // Add a key prop that updates when the message prop changes
      className={`flex items-center justify-center bg-link text-link-foreground text-center p-3 uppercase font-bold mb-3 rounded gap-x-5 text-sm`}
    >
      <CircleAlertIcon width={20} height={20} />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
