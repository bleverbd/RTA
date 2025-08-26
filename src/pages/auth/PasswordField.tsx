import { useState } from "react";
import {EyeIcon, EyeOff} from "lucide-react";
import { Input } from "@/components/ui/input";

const PasswordField = ({...field}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  
  return (
    <div className="relative">
      <Input
        type={isShowPassword ? "text" : "password"}
      className="bg-[#0A0C10] border-none px-4 py-4 mt-1"
        placeholder="Password"
        {...field}
      />
    
      <div
        className="absolute top-1/2 right-[22px] -translate-y-1/2"
        onClick={() => setIsShowPassword((prev) => !prev)}
      >
        {isShowPassword ? (
          <EyeIcon className="cursor-pointer select-none" />
        ) : (
          <EyeOff className="cursor-pointer select-none" />
        )}
      </div>
    </div>
  );
};

export default PasswordField;
