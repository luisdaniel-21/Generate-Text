import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

if (!openai.apiKey) {
  throw new Error("OpenAI API key is not defined");
}

export async function POST(request) {
  const body = await request.json();

  if (!body.isPrompt || body.isPrompt.length === 0) {
    return NextResponse.error(new Error("El prompt is required"), {
        status: 400,
    })
  }

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: body.isPrompt }],
      model: "gpt-3.5-turbo-0613",
      temperature: 0.7,
      
    });
    return NextResponse.json(response.choices[0].message.content);

  } catch (error) {
    return NextResponse.error(error, {
      status: 500,
    });
  }

}
