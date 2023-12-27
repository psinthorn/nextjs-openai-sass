"use client"

import * as z from "zod"
import { Code } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

import Heading from '@/components/heading'
import { formSchema } from "./constants"
import { 
  Form,
  FormControl, 
  FormField, 
  FormItem 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import { Empty } from "@/components/empty"
import { Loading } from "@/components/loading"
import { cn } from "@/lib/utils"
import { UserAvatar } from "@/components/user-avatar"
import { BotAvatar } from "@/components/BotAvatar"

const ConversationPage = () => {
  const router = useRouter();

  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
        }
      const newMessages = [...messages, userMessage]

      const response = await axios.post("/api/code", {
        messages: newMessages
      })

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();

    } catch (error: any) {
      //Todo open promodal
      console.log(error);
    } finally {
      router.refresh();
    }
    
  }

  return (
    <div>

      {/* Header component with props */}
      <Heading
        title="Generate code with AI"
        desc="Ask anythings that you need to know"
        icon={Code}
        iconColor='text-sky-400'
        bgColor='bg-slate-800/5'
      />


      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                grid 
                grid-cols-12 
                w-full
                p-4 
                px-4
                gap-2
                border
                rounded-lg
                md:px-6
                focus-within:shadow-sm
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        placeholder="your prompt go here"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )} 
              />
              <Button className="col-span-12 w-full lg:col-span-2" disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <Loading/>
          )}         

          {messages.length === 0 && !isLoading && (
            <Empty label="Put your prompt to start conversation with AI" />
          )}
          <div className="flex flex-col gap-y-4">
                  {messages.map((message: any) => (
                    <div 
                      key={message.content} 
                      className={cn("flex w-full items-start p-8 gap-x-8 rounded-lg", 
                      message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                      )}
                      >
                       {message.role === "user" ? <UserAvatar/> : <BotAvatar/>} 
                       <p className="text-sm">
                        {message.content}
                       </p>                   
                    </div>
                  ))}               
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default ConversationPage

