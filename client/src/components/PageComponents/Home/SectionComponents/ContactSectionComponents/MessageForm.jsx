import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Enter a valid email Id",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function MessageForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col mx-8 mt-2"
      >
        <FormField
          control={form.control}
          name="fullname"
          className="border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <h1 className="text-xl font-semibold">Full Name</h1>
              </FormLabel>
              <FormControl className="border-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-0">
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="border-b-2 ring-0 text-2xl shadow-none focus:outline-none focus:ring-0 focus:border-0"
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <h1 className="text-xl font-semibold">Email Id</h1>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@gmail.com"
                  className="border-0 border-b-2 ring-0 text-2xl shadow-none focus:outline-none focus:ring-0 focus:border-0"
                  type="email"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <h1 className="text-xl font-semibold">Message</h1>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here ..."
                  className="border-0 border-b-2 ring-0 text-2xl shadow-none focus:outline-none focus:ring-0 focus:border-0"
                  type="text"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#0a2955] border-[#0a2955] cursor-pointer hover:border-[#65656580] border-2"
        >
          <h1 className="text-lg font-bold ">Submit</h1>
        </Button>
      </form>
    </Form>
  );
}
