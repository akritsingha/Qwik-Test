import  type { RequestHandler } from '@builder.io/qwik-city'
import {pb} from '../../../utills/db/pocketBase'

export const onPost: RequestHandler = async ({ request, json })=>{
    const { email, password } = await request.json();
    await pb.admins.authWithPassword(email, password)
    .then((val)=>{
      console.log(val)
      return json(200, {  val });
    })
    .catch((error) => {
      console.error(error);
      return json(500, { error: error });
    });
}
