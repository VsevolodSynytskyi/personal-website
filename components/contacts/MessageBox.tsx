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
} from "@/components/aceternity-ui/form";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../aceternity-ui/button";
import { Textarea } from "../aceternity-ui/textarea";

const MessageBox: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("contacts.messageBox");
  const labelText = t("labelText");
  const messagePlaceholderText = t("placeholder");
  const sendText = t("send");

  const formSchema = z.object({
    message: z
      .string()
      .min(1, { message: t("validation.tooShort") })
      .max(2000, { message: t("validation.tooLong") }),
  });

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
        toast.success(t("feedback.sent"), {
          description: values.message,
        });
        form.reset();
      } else {
        toast.error(t("feedback.errorSending"));
      }
    } catch (error) {
      toast.error(t("feedback.error"));
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
                    <Textarea placeholder={messagePlaceholderText} {...field} />
                  </FormControl>
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
            <Send className="w-4 h-4 mr-2" /> {sendText}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MessageBox;
