import { $ } from "@builder.io/qwik";

export const makeApiCall = $(async (apiUrl:string, props:any) => {
    try {
      await fetch(apiUrl, props)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log("error");
        return error;
      });
    } catch (err) {
       console.error(err);
       return err;
    }
});
interface options {
    method: string
    headers: any
    body: any
    redirect: any
}
export async function login(email: string, password: string) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    email,
    password
  });

  const requestOptions:options = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch('http://localhost:5173/api/login', requestOptions);
  const data = await response.text();

  return data;
}