import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Form, routeAction$ } from '@builder.io/qwik-city';
// import PocketBase from 'pocketbase';

// const pb = new PocketBase(process.env.POCKETBASE_URL);

// const getRecords = async function() {
//   const records = await pb.collection('Users_Data').getFullList({
//     sort: '-created',
//   }).then((value)=>console.log(value));
//   return records;
// }

export const useSignUpAction = routeAction$((props) => {
  // Leave it as an exercise for the reader to implement this.
  // const records = getRecords();
  // console.log(records);
  // console.log('VOTE', props);
});


export default component$(() => {
  const signUpAction = useSignUpAction();
  return (
    <>
      <section class="section bright">
          <Form action={signUpAction}>
            <label>Name</label>
            <input type="text" name="name"/>
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Password</label>
            <input type="password" name="password"/>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword"/>
            <button name="submit" value="signUp">Submit</button>
          </Form>
        </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
