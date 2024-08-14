"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const labelText = `Поле, щоб привітатись.`;
const messagePlaceholder = `Повідомлення.`;

const formSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Не скупіться на слова." })
    .max(2000, { message: "Давайте почнем діалог лаконічніше." }),
});

const MessageBox: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Повідомлення відправлено", {
          description: values.message,
        });
        form.reset();
      } else {
        toast.error("Помилка при відправленні повідомлення");
      }
    } catch (error) {
      toast.error("Сталася помилка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>{labelText}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={messagePlaceholder} {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  lorem ipsum
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            disabled={!form.formState.isValid || loading}
            className="w-full"
          >
            <Send className="w-4 h-4 mr-2" /> Відправити
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MessageBox;
