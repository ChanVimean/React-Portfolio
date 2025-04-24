import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(3, "Required"),
  lastName: z.string().min(3, "Required"),
  email: z.string().email("Invalid Email"),
  password: z.string().min(8, "Min 8 Characters"),
  message: z.string().min(1, "Required"),
});

const Contact = () => {

  const [showPassword, setShowPassowrd] = useState<boolean>(true)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      message: "",
    },
  });

  const onSubmite = () => {};

  return (
    <div
      style={{ backgroundImage: "url('/GradientForm.avif')" }}
      className="w-full h-auto flex items-center bg-cover bg-center
        flex-col lg:flex-row
        p-8 py-16 md:px-24
        lg:py-20 lg:px-32"
    >
      <section className="w-full lg:w-1/2 h-auto">
        <img
          src="Service.png"
          alt="Banner"
          className="w-[90%] h-[90%] object-cover"
        />
      </section>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmite)}
          className="w-full lg:flex-1 space-y-8 lg:space-y-12 pb-12 lg:pb-0"
        >
          <h1 className="text-3xl font-semibold">Get In Touch</h1>

          {/* 1st Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/80 text-black placeholder-gray-600"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/80 text-black placeholder-gray-600"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* 2nd Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/80 text-black placeholder-gray-600"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="bg-white/80 text-black placeholder-gray-600"
                        placeholder="password"
                        type={showPassword ? "password" : "text"}
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassowrd(prev => !prev)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Email - Textarea */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-white/80 text-black placeholder-gray-600"
                    placeholder="Your message..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Submite Button */}
          <button
            type="submit"
            className="custom-white-btn text-black font-semibold"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
