
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

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(50, { message: "Email must not exceed 50 characters" }),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",

    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitted Values:", values);
  }

  return (
    <div>
      <Container>

        <p className="text-3xl font-semibold text-Primary">মোবাইল নাম্বার দিয়ে এগিয়ে যান

        </p>
        <p className="text-xl "> আপনার কোর্স শুরু করতে আপনার একাউন্টে লগইন করুন

        </p>


        <div>


          <div className="w-full">
            <Form {...form}>

              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="মোবাইল নাম্বার দিন"
                              className=" border-none px-4 py-4"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                </div>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;