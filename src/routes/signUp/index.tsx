import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Form, routeAction$ } from '@builder.io/qwik-city';
import { InputGroup } from '../../starter/molecules/inputGroup/inputGroup';
import { Button } from "../../starter/atoms/button/button";
import {signUpData, logInData} from './data';
import s from './signUp.module.css';
import {pb} from '~/utills/db/pocketBase';
import {login} from '~/utills/functions'

// const pb = new PocketBase(process.env.POCKETBASE_URL);

// interface logInDataShema {
//   email: string,
//   password: string,
// }

// const getRecords = async function(data:object) {
//   console.log(data)
//   // pb.collection('Users_Data')
//   // .getFullList({
//   //   sort: '-created',
//   // }).then((value)=>{
//   //   console.log(value);
//   //   return value;
//   // });

//   pb.collection('Users_Data')
//   .getOne('zjpwwuf9ehfo1w1').then((value)=>{
//     console.log(value);
//     return value;
//   });
// }


const createRecords = async (data:object) => {
  console.log(data)

  pb.collection('Users_Data')
  .create(data)
  .then((value)=>{
    console.log(value);
    return value;
  });
  // await pb.collection('Users_Data').requestVerification('akrit.singha11@gmail.com');
}

// const handleLogIn =  (data:logInDataShema) => {
//   console.log(data);
//   const {email, password} = data;
//   pb.admins
//   .authWithPassword(email,password)
  
// }

// const handleLogOut = async () => {
//   pb.authStore.clear();
//   console.log('Admin Logged Out')
// }


export const useSignUpAction = routeAction$(async (props) => {
  // Leave it as an exercise for the reader to implement this.
  // getRecords(props);
  console.log('hello');

  if(props.submit && props.submit === 'signUp'){
    console.log('do signup');
    const userName = props.email.toLocaleString().split("@")[0];
    const data = {
        "username": userName || "Guest",
        "email": props.email,
        "emailVisibility": false,
        "password": props.password,
        "passwordConfirm": props.password,
        "password_test": props.password,
        
    };
    createRecords(data);
  }else if(props.submit && props.submit === 'logIn'){
    console.log('do login');

    const data = await login('admin.auth@pocketbase.com', 'ez2mCbjV-7VYpIUjr6QMBM8nNvNiwkdD');
      console.log(data);
  }else{
    console.log('do nothing')
  }
});



export default component$(() => {

  const formState = useSignal('signUp');
  const logInReqSend = useSignal(false);

  const onLogIn = $(async ()=>{
    formState.value = 'logIn';
    logInReqSend.value = true;
  })


  // useTask$(async function ({ track }) {
  //   track(() => logInReqSend.value);
  //   try {
  //     // const data = await login('admin.auth@pocketbase.com', 'ez2mCbjV-7VYpIUjr6QMBM8nNvNiwkdD');
  //     // console.log(data);
  //     // console.log(window);
  //     // return data;
  //     // handle successful login
  //   } catch (error) {
  //     console.error(error);
  //     // return null;
  //     // handle login error
  //   }
  // });

  const onSignUp = $(()=>{
     formState.value = 'signUp';
     console.log('signUp');
  })

  const signUpBtnProps = {
    layout: {
      appearance: "primary",
      classPrefix: s.signUpButton,
      size: "xl",
      outline: false,
    },
    config: {
      onBtnClick: formState.value === 'signUp' ? onSignUp :  onLogIn,
      attributes: {
        name: "submit",
        value: formState.value
      }
    }
  }

  

  const formInputGroupData = formState.value === 'signUp' ?  signUpData : logInData ;
  const signUpAction = useSignUpAction();



  return (
    <div class={s.signUpFormPage}>
      <div class={s.signUpForm}>
        <div class={s.buttonGroup}>
          <Button {...{
            layout: { appearance: `${formState.value === 'signUp' ? 'success' : 'dark'}`, size: "md", outline: false },
            config: { onBtnClick: $(() => { formState.value = 'signUp' }) }
          }}>
            Sign Up</Button>

          <Button {...{
            layout: { appearance: `${formState.value === 'logIn' ? 'success' : 'dark'}`, size: "md" },
            config: { onBtnClick: $(() => { formState.value = 'logIn' })}
          }}>Log In</Button>
        </div>
        {formInputGroupData.data.heading && <h1 class={s.heading}>{formInputGroupData.data.heading}</h1>}
        <Form action={signUpAction}>
          <InputGroup {...formInputGroupData} />
          <div class={s.bottomButtonGroup}>
            {formInputGroupData.data.btnText && <Button {...signUpBtnProps}>{formInputGroupData.data.btnText}</Button>}

            {/* {formInputGroupData.data.forgotText &&  */}
            <Button {...{
              layout: { appearance: `dark`, size: "small", outline: true, classPrefix: `${s.forgotPassBtn}` },
              config: { onBtnClick: $(() => { formState.value = 'logIn' }) }
            }}>Forgot Text</Button>
            {/* } */}
          </div>
          
        </Form>
      </div>
    </div>
  );
});


export const head: DocumentHead = {
  title: "Sign Up",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};