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

const formSchema = z.object({
  mobile: z
    .string()
    .regex(/^01[3-9][0-9]{8}$/, {
      message: "আপনার ১১ ডিজিটের মোবাইল নাম্বার দিন",
    }),
});

const Register = () => {
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
  }

  return (
    <div className="mt-15">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#e8eaed] rounded-xl px-5 py-20 flex flex-col justify-center items-center max-w-[900px] mx-auto shadow-xl bg-white"
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
            <p className="text-3xl font-semibold text-Primary text-center text-nowrap mt-2">
              মোবাইল নাম্বার দিয়ে এগিয়ে যান
            </p>
            <p className="text-xl font-medium text-center text-nowrap mt-1 text-gray-600">
              আপনার কোর্স শুরু করতে আপনার একাউন্টে লগইন করুন
            </p>
          </motion.div>

          {/* Form */}
          <div className="w-7/12 ">
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
                            placeholder="মোবাইল নাম্বার দিন"
                            className="border-2 border-[#e8eaed] py-3 !text-2xl placeholder:font-Noto placeholder:text-xl font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-Primary transition-all"
                            {...field}
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
                    className="text-[22px] font-semibold h-14 text-white bg-gradient-to-r from-Primary to-Primary/80 hover:opacity-90 w-full disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-md transition-all"
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
