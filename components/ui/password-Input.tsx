import * as React from "react";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {Input} from "./input";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({className, ...props}, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="flex items-center justify-between gap-8">
        <Input
          suffix={
            showPassword ? (
              <EyeIcon
                aria-label="Show password"
                size={20}
                className="text-foreground select-none cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeOffIcon
                aria-label="Close password"
                size={20}
                className="text-foreground select-none cursor-pointer text-md"
                onClick={() => setShowPassword(true)}
              />
            )
          }
          className={className}
          {...props}
          type={showPassword ? "text" : "password"}
          ref={ref}
          placeholder="12345678"
        />
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export {PasswordInput};
