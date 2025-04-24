import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { Input } from "./ui/input"


const formSchema = z.object({
  email: z.string().email("Invalid Emial")
})

const Subscribe = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  })

  const handleSubscribe = () => {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubscribe)}
        action={handleSubscribe}
        className="flex flex-col md:flex-row
          w-full md:w-5/6 lg:w-3/5
          space-y-4 md:space-y-0
          items-center justify-between mx-auto
          bg-white text-black rounded-lg
          p-4 lg:p-6"
      >
        <h1 className="text-lg lg:text-xl font-semibold">Subscribe for updates</h1>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) =>
            <FormItem className="w-5/6 md:w-3/5">
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  className="px-4 py-4 border border-black rounded-none focus:outline-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          }
        />

        <button
          type="submit"
          className="custom-blue-btn text-white text-sm md:text-lg font-medium cursor-pointer">
          Send
        </button>
      </form>
    </Form>
  )
}

export default Subscribe