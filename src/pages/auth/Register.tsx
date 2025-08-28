import Container from "@/components/common/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImagesProvider } from "@/lib/ImagesProvider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const formSchema = z.object({
  mobile: z.string().regex(/^01[3-9][0-9]{8}$/, {
    message: "আপনার ১১ ডিজিটের মোবাইল নাম্বার দিন",
  }),
});

const Register = () => {
   const nagivate=useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
    },
  });

  const mobileValue = form.watch("mobile");
  const isValidMobile = /^01[3-9][0-9]{8}$/.test(mobileValue);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitted Values:", values);
    form.reset();
     nagivate("/auth/verify-otp")
  }

  return (
    <div className="mt-15">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
         className="border border-gray-200 rounded-2xl px-8 py-12 flex flex-col justify-center items-center max-w-[600px] mx-auto shadow-lg bg-white"
        >
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="overflow-hidden"
          >
            <img
              className="h-20 w-[150px] object-cover"
              src={ImagesProvider.logo}
              alt="Logo"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-4xl font-bold text-Primary text-center text-nowrap mt-2">
              মোবাইল নাম্বার দিয়ে এগিয়ে যান
            </p>
            <p className="text-xl font-medium text-center text-nowrap mt-1 text-black">
              আপনার কোর্স শুরু করতে আপনার একাউন্টে লগইন করুন
            </p>
          </motion.div>

          {/* Form */}
          <div className="w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="mt-3 ">
                          <Input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="মোবাইল নাম্বার দিন"
                            className="border-2 border-[#e8eaed] py-3 !text-2xl placeholder:font-Noto placeholder:text-xl font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-Primary transition-all"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value;
                              const onlyDigits = value.replace(/\D/g, "");
                              field.onChange(onlyDigits);
                            }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 font-medium" />
                    </FormItem>
                  )}
                />
                <div className="mt-5">
                  <motion.button
                    type="submit"
                    disabled={!isValidMobile}
                    className="text-[22px] font-semibold h-14 text-white bg-gradient-to-r from-Primary to-Primary/80 hover:opacity-90 w-full disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    সাবমিট করুন
                  </motion.button>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Register;
