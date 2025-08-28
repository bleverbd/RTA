import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ImagesProvider } from "@/lib/ImagesProvider";
import { motion } from "framer-motion";

const VerifyOTP = () => {
  const [timeLeft, setTimeLeft] = useState(5); 
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    if (!canResend) return;
    setTimeLeft(5); 
    setCanResend(false);
   
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="mt-10 flex justify-center items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-gray-200 rounded-2xl px-8 py-12 flex flex-col justify-center items-center max-w-[600px] mx-auto shadow-lg bg-white"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="overflow-hidden mb-6"
          >
            <img
              className="h-16 w-[140px] object-contain"
              src={ImagesProvider.logo}
              alt="Logo"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-6"
          >
            <p className="text-3xl font-bold text-Primary">
              ওটিপি যাচাইকরন
            </p>
            <p className="text-base font-medium text-gray-700 mt-2 leading-relaxed">
              আপনার মোবাইল নম্বর <span className="font-semibold">01533333333</span> এ পাঠানো OTP প্রবেশ করুন। <br />
              পাসওয়ার্ড রিসেট করার জন্য OTP যাচাই করা আবশ্যক।
            </p>
          </motion.div>

          {/* OTP Input */}
          <div className="mt-4 flex justify-center">
            <InputOTP maxLength={6}>
              {[...Array(6)].map((_, i) => (
                <>
                  <InputOTPSlot
                    key={i}
                    index={i}
                  />
                  {i < 5 && <InputOTPSeparator />}
                </>
              ))}
            </InputOTP>
          </div>

          {/* Resend OTP with Timer */}
          <div className="mt-6 flex flex-col items-center">
            {canResend ? (
              <button
                onClick={handleResend}
                className="text-lg cursor-pointer font-semibold text-Primary hover:underline transition-all"
              >
                ওটিপি পুনরায় পাঠান
              </button>
            ) : (
              <p className="text-base text-gray-600 font-medium cursor-not-allowed">
              {formatTime(timeLeft)} পরে পুনরায় পাঠানো যাবে
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-4 w-full">
            <button
              type="submit"
              className="w-full  cursor-pointer text-[20px] py-3 font-semibold text-white bg-gradient-to-r from-Primary to-Primary/80 hover:opacity-90 rounded-xl shadow-md transition-all"
            >
              সাবমিট করুন
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default VerifyOTP;
