import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Form, routeAction$ } from '@builder.io/qwik-city';
import { InputGroup } from '../../starter/molecules/inputGroup/inputGroup';
import { Button } from "../../starter/atoms/button/button";
import s from './signUp.module.css'
// import { error } from "console";

const signUpData = {
  data: {
    inputFields: [
      {
        data: {
          label: "Email",
          placeholder: "Enter Your Email",
          // msg: "We'll never share your email with anyone else.",
        },
        layout: {
          appearance: "col", // row | col
          classPrefix: '',
          size: "xl",
          required: true
        },
        config: {
          inputType: "email",
          disabled: false,
          attributes: {
            name: "email"
          }
        }
      },
      {
        data: {
          label: "Password",
          placeholder: "Enter Your Password",
          msg: "Password length should be minimum 8 characters",
        },
        layout: {
          appearance: "col", // row | col
          classPrefix: '',
          size: "xl",
          required: true
        },
        config: {
          inputType: "password",
          disabled: false,
          attributes: {
            name: "password"
          }
        }
      },
      {
        data: {
          label: "Confirm Password",
          placeholder: "Enter Confirm Password",
          // msg: "Password length should be minimum 8 characters",
        },
        layout: {
          appearance: "col", // row | col
          classPrefix: '',
          size: "xl",
          required: true
        },
        config: {
          inputType: "password",
          disabled: false,
          attributes: {
            name: "cfm_password"
          }
        }
      }
    ]
  },
  layout: {
    appearance: 'row',
    classPrefix: 'signUpForm',
  }
}

const logInData = {
  data: {
    inputFields: [
      {
        data: {
          label: "Email",
          placeholder: "Enter Your Email",
          // msg: "We'll never share your email with anyone else.",
        },
        layout: {
          appearance: "col", // row | col
          classPrefix: '',
          size: "xl",
          required: true
        },
        config: {
          inputType: "email",
          disabled: false,
          attributes: {
            name: "email"
          }
        }
      },
      {
        data: {
          label: "Password",
          placeholder: "Enter Your Password",
        },
        layout: {
          appearance: "col", // row | col
          classPrefix: '',
          size: "xl",
          required: true
        },
        config: {
          inputType: "password",
          disabled: false,
          attributes: {
            name: "password"
          }
        }
      }
    ]
  },
  layout: {
    appearance: 'row',
    classPrefix: 'signUpForm',
  }
}


export const useSignUpAction = routeAction$((props) => {
  // Leave it as an exercise for the reader to implement this.
  // const records = getRecords();
  // console.log(records);
  const {password} = props;
  console.log('VOTE', props);
  // && password.length >= 8
  if(!(password && password != '')){
    console.log('password incorrect')
    // return null;
  }
  if(props.submit && props.submit === 'signUp'){
    if(!(password === props.cmf_password )){
      console.log('password not matched')
      // return null;
    }
    console.log('do signup')
  }else if(props.submit && props.submit === 'logIn'){
    console.log('do login')
  }else{
    console.log('do nothing')
  }
});


export default component$(() => {
  const formState = useSignal('signUp');

  const signUpBtnProps = {
    layout: {
      appearance: "primary",
      classPrefix: s.signUpButton,
      size: "xl",
      outline: false,
    },
    config: {
      attributes: {
        name: "submit",
        value: formState.value
      }
    }
  }

  const formInputGroupData = formState.value === 'signUp' ?  signUpData : logInData;
  const formHeading = formState.value === 'signUp' ?  "Sign Up" : "Log In";
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
            config: { onBtnClick: $(() => { formState.value = 'logIn' }) }
          }}>Log In</Button>
        </div>
        <h1 class={s.heading}>{formHeading}</h1>
        <Form action={signUpAction}>
          <InputGroup {...formInputGroupData} />
          <Button {...signUpBtnProps}>{formHeading}</Button>
        </Form>
      </div>
    </div>
  );

  // return (
  //   <div class={s.signUpFormPage}>
  //     <div class={s.signUpForm}>
  //       {/* <div class={s.buttonGroup}>
  //         <Button {...{
  //           layout: { appearance: `${formState.value === 'signUp' ? 'success' : 'dark'}`, size: "md", outline: false },
  //           config: { onBtnClick: $(() => { formState.value = 'signUp' }) }
  //         }}>
  //           Sign Up</Button>

  //         <Button {...{
  //           layout: { appearance: `${formState.value === 'logIn' ? 'success' : 'dark'}`, size: "md" },
  //           config: { onBtnClick: $(() => { formState.value = 'logIn' }) }
  //         }}>Log In</Button>
  //       </div> */}
  //       <h1 class={s.heading}>Sign Up</h1>
  //       <Form action={signUpAction}>
  //         <InputGroup {...signUpData} />
  //         <Button {...signUpBtnProps}>Sign Up</Button>
  //       </Form>
  //     </div>
  //   </div>
  // );
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