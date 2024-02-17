
import  type { RequestHandler } from '@builder.io/qwik-city'
import { GoogleGenerativeAI } from "@google/generative-ai";

export const onPost: RequestHandler = async ({ request, json })=>{
    const { prompt } = await request.json();
    const genAI = new GoogleGenerativeAI("AIzaSyCnIdK9HkQ8x_5ezCr7cgj10ObIYi8eFjI");
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    await model.generateContent(prompt)
    .then((result)=>{
        const text = result.response.text();
        console.log(result);
        return json(200, {  data: text });
    })
    .catch((error) => {
      console.error(error);
      return json(500, { error: error });
    });
}
