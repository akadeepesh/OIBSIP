"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import toast from "react-hot-toast";
import { AlertCircle } from "lucide-react";

const stringToNumber = z.string().transform((val) => val.length);

const FormSchema = z.object({
  pizza_name: z.string(),
  toppings: z.string(),
  price: z
    .object({
      medium: stringToNumber.optional(),
      small: stringToNumber.optional(),
    })
    .refine((data) => data.medium !== undefined || data.small !== undefined, {
      message: "At least one of medium or small pizza price must be provided",
      path: ["price"],
    }),
  quantity: stringToNumber,
});

const Admin = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log("Form : ", JSON.stringify(data, null, 2));
    toast.success(JSON.stringify(data, null, 2));
  }

  return (
    <div className="flex justify-center max-w-screen-lg mx-auto mt-20 sm:mt-24 md:mt-28 lg:mt-36">
      <div className="bg-secondary rounded-3xl w-5/6 flex justify-center items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-5/6 space-y-6 py-10"
          >
            <FormField
              control={form.control}
              name="pizza_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pizza Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Pepperoni Pizza..."
                      className="ml-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="toppings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mention toppings</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Cheese, Capsicum, Tomatoes..."
                      {...field}
                      className="ml-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center flex-row gap-6">
              <FormField
                control={form.control}
                name="price.small"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Small Pizza Price</FormLabel>
                    <FormControl>
                      <Input
                        step={1}
                        type="number"
                        placeholder="299"
                        {...field}
                        required={false}
                        className="ml-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price.medium"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Medium Pizza Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step={1}
                        placeholder="499"
                        className="ml-3"
                        {...field}
                        required={false}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <FormDescription className="flex text-primary gap-1 font-Annapura ml-5 items-center justify-center">
              <AlertCircle size={18} />
              At least one of medium or small pizza price must be provided
            </FormDescription> */}
            {form.formState.errors.price && (
              <FormDescription className="flex text-primary gap-1 font-Annapura ml-5 items-center justify-center">
                <AlertCircle size={18} />
                <div className="text-primary">
                  {form.formState.errors.price.message}
                </div>
              </FormDescription>
            )}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step={1}
                      placeholder="25"
                      className="ml-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Quantity of the pizza available in the store
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Admin;
