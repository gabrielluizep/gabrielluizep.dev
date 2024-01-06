'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Check, Github, Linkedin, Loader } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  name: z.string().min(3, 'Enter a valid name').max(50, 'The name is too long'),
  email: z.string().email('Enter a valid email address'),
  message: z
    .string()
    .min(10, 'The message must have at least 10 characters')
    .max(500, 'The message must have at most 500 characters'),
});

export const Footer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const isLoading = form.formState.isLoading;
  const isSubmitSuccessful = form.formState.isSubmitSuccessful;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    try {
      await axios.post('/api/send', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-96 bg-foreground text-background">
      <div className="max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto py-8 px-10 md:flex md:justify-between">
        <div className="max-w-96 mb-8">
          <h4 id="contact" className="font-semibold text-lg mb-8">
            Contact
          </h4>
          <p className="mb-8">
            Lets connect! Im on LinkedIn and Github, or send me a message here!
          </p>

          <a href="https://github.com/gabrielluizep/">
            <Button
              variant="link"
              className="text-background flex item-center gap-4"
            >
              <Github />
              <p className="font-mono text-lg">@gabrielluizep</p>
            </Button>
          </a>

          <a
            href="https://linkedin.com/in/gabrielluizep/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="link"
              className="text-background flex item-center gap-4"
            >
              <Linkedin />
              <p className="font-mono text-lg">@gabrielluizep</p>
            </Button>
          </a>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full md:w-1/2"
          >
            <div className="flex gap-4 mb-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="John Doe"
                        className="text-foreground"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.name?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="john@doe.com"
                        className="text-foreground"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Write your message here!"
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.message?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button
              disabled={isLoading || isSubmitSuccessful}
              className="w-full mt-4 bg-foreground"
              variant="outline"
            >
              {isLoading ? (
                <Loader className="animate-spin" />
              ) : isSubmitSuccessful ? (
                <Check />
              ) : (
                'Send'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
