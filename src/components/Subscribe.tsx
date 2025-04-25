import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { FaCircleInfo } from "react-icons/fa6";
import { Input } from "./ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";

// TODO Schema
const formSchema = z.object({
  email: z.string().email("Invalid Emial"),
});

// ! Type
type FormData = z.infer<typeof formSchema>;

const res: string[] = [
  "⚠️ Oops! This feature isn't ready yet. Check back soon!",
  "🚧 This part is still under construction — hang tight!",
  "👀 Nice try! But this form doesn't actually work yet.",
  "🤷‍♂️ This feature is a work-in-progress, thanks for your patience!",
  "😅 You caught me! This form doesn't do anything yet, but we're working on it!"
];

const Subscribe = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [text] = useTypewriter({
    words: res,
    loop: true,
    deleteSpeed: 25,
    typeSpeed: 50,
    delaySpeed: 1500,
    onLoopDone: () => setIsTyping(false),
  });

  const handleSubscribe = () => {
    setIsTyping(true);
    form.setValue("email", "");
  };

  const handleInputFocus = () => {
    if (isTyping) setIsTyping(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isTyping) setIsTyping(false);
    form.setValue("email", e.target.value);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubscribe)}
        className="flex flex-col md:flex-row
          w-full md:w-5/6 lg:w-3/5
          space-y-4 md:space-y-0
          items-center justify-between mx-auto
          bg-white text-black rounded-lg
          p-4 lg:p-6"
      >
        <h1 className="text-lg lg:text-xl font-semibold">
          Subscribe for updates
        </h1>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-5/6 md:w-3/5">
              <FormControl>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    value={isTyping ? text : field.value}
                    onFocus={handleInputFocus}
                    onChange={handleInputChange}
                    // disabled={isTyping}
                    className="px-4 py-4 border border-black rounded-none focus:outline-none"
                    // {...field}
                  />
                  <aside className="absolute inset-y-0 right-2 flex items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <FaCircleInfo className="text-lg text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            This is just here to look fancy — nothing gets sent.
                            🤷‍♂️
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </aside>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="custom-blue-btn text-white text-sm md:text-lg font-medium cursor-pointer"
        >
          Send
        </button>
      </form>
    </Form>
  );
};

export default Subscribe;
