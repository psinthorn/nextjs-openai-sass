
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(
  req: Request
) {
    try{
      const { userId } = auth();
      const body = await req.json();
      const { messages } = body; 
      console.log("body msg: ", body);
      console.log("Obj msg: ", messages);

      if(!userId) {
        return new NextResponse("Unauthorize", {status: 401});
      }

      if(!openai.apiKey){
        return new NextResponse("Openai API KEY is not provide", {status: 500});
      }

      if(!messages){
        return new NextResponse("Message is required", {status: 400});
      }

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        // messages: [{'role': 'user', 'content': 'please give me a tutorial how to implement gpt-4 with nextjs on full of details that connect to mogodb database for store all the data'}],
        messages,
      });

      return NextResponse.json(response.choices[0].message);

    } catch (error) {
      console.log("[CONVERSATION_ERROR]", error);
      return new NextResponse("Internal Server Error", {status: 500})
    }
}
