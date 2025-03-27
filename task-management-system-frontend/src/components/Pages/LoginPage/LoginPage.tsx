import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

const LoginPage = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <div className="h-full flex items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="p-10 shadow-2xl shadow-black w-100">
              <CardTitle className="flex justify-center -mb-5 font-bold text-lg">
                Welcome Back
              </CardTitle>
              <CardDescription className="flex justify-center mb-3 text-xs">
                Enter your credentials to access your account
              </CardDescription>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
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
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2.5">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground hover:text-neutral-800  hover:cursor-pointer transition-colors"
                  >
                    Remember me
                  </label>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-sm font-normal text-muted-foreground hover:underline cursor-pointer"
                  >
                    Forgot Password
                  </a>
                </div>
              </div>

              <Button type="submit">Sign in</Button>
            </Card>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
