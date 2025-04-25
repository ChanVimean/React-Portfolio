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
import emailjs from "emailjs-com";

const maxMessageLength: number = 200;

const formSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid Email"),
  title: z.string().min(1, "Required"),
  message: z.string().min(1, "Required").max(maxMessageLength, "Too long"),
  time: z.string(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      message: "",
      time: "",
    },
  });

  const messageValue = form.watch("message");
  const messageLength = messageValue?.length || 0;
  const remaining = maxMessageLength - messageLength;

  const onSubmite = async (data: ContactFormValues) => {
    // ? Update Message Length
    const currentTime = new Date().toLocaleDateString();
    const fullData = { ...data, time: currentTime };

    const templateParams = {
      name: `${fullData.firstName} ${fullData.lastName}`,
      email: fullData.email,
      title: fullData.title,
      message: fullData.message,
      time: fullData.time,
    };

    try {
      const result = await emailjs.send(
        "service_gyckshl", // ! Service ID
        "template_q5cqqcf", // ! Template ID
        templateParams,
        "9r04oOFnJ4rkt5Hhm" // ! API Keys: Public Key
      );

      console.log("Email sent:", result.text);
      form.reset();
      alert("Custom success");
    } catch (error) {
      console.error("Email send failed", error);
      alert("Failed to send message. Try again later.");
    }
  };

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

          {/* 1st: Name -> Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/80 text-black placeholder-gray-600 rounded-none"
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
                      className="bg-white/80 text-black placeholder-gray-600 rounded-none"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* 2nd: Title & Email -> Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/80 text-black placeholder-gray-600 rounded-none"
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/80 text-black placeholder-gray-600 rounded-none"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* 3rd: Message - Textarea */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <div>
                    <Textarea
                      className="bg-white/80 text-black placeholder-gray-600 rounded-none"
                      placeholder="Your message..."
                      {...field}
                    />
                    <p
                      className={`text-sm text-right mt-1
                      ${remaining < 0 ? "text-amber-500" : "text-gray-300"}`}
                    >
                      {messageLength}/{maxMessageLength}
                    </p>
                  </div>
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
