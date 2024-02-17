import { component$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Form, routeAction$ } from '@builder.io/qwik-city';
import { Input } from "~/starter/atoms/input/input";
import { Button } from "../../starter/atoms/button/button";
import {reWriteInputLang, reWriteOutputLang, reWriteInputTextFieldData, reWriteOutputTextFieldData} from './data';
import s from './rewrite.module.css';


// const pb = new PocketBase(process.env.POCKETBASE_URL);

export const useRewriteSubmitAction = routeAction$(async (props) => {
  // Leave it as an exercise for the reader to implement this.
  // getRecords(props);
  console.log(props);
  // const data = await login('admin.auth@pocketbase.com', 'ez2mCbjV-7VYpIUjr6QMBM8nNvNiwkdD');
});

export default component$(() => {
  const rewriteSubmitAction = useRewriteSubmitAction();

  const signUpBtnProps = {
    layout: {
      appearance: "primary",
      classPrefix: s.signUpButton,
      size: "xl",
      outline: false,
    },
    config: {
      // onBtnClick: ()=>{},
      attributes: {
        name: "submit",
        value: "translate"
      }
    }
  }

  return (
    <div class={s.reWritePage}>
      <div class={s.reWritePageContent}>
        <div class={[s.inputForm, s.childform]}>
          <Form action={rewriteSubmitAction}>
            <div class={s.row}>
              <Input {...reWriteInputLang}/>
              <Input {...reWriteOutputLang}/>
            </div>
            <Input {...reWriteInputTextFieldData}/>
            <Button {...signUpBtnProps}>Submit</Button>
          </Form>
        </div>
        <div class={[s.outputForm, s.childform]}>
          {/* <Form action={rewriteSubmitAction}> */}
            <Input {...reWriteOutputTextFieldData}/>
            <Button {...signUpBtnProps}>Discard</Button>
            <Button {...signUpBtnProps}>Copy</Button>
          {/* </Form> */}
        </div>
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