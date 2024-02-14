import { component$, $ } from "@builder.io/qwik";
import s from './Input.module.scss';
import classNames from 'classnames';
 
export interface InputProps {
  data:{
    label?: string,
    placeholder?: string,
    msg?: string,
  },
  layout: {
    appearance?: string,
    classPrefix?: string,
    size?: string,
    required?:boolean
  },
  config: {
    inputType?:string,
    disabled?: boolean,
    onInputChange?: any,
    attributes?:{}
  }
}


export const Input = component$<InputProps>(({data, layout, config}) => {
  const {
    label='', 
    placeholder= '', 
    msg= '',
  } = data;
  const {
    appearance='',
    classPrefix='',
    size='',
    required=false
  } = layout;
  const {
    inputType = 'text', 
    disabled=false, 
    onInputChange = ()=>{}, 
    attributes
  } = config;

  const InputClassList = classNames(s.input, classPrefix, {
    [s.checkbox]: inputType === 'checkbox',
    [s.row]: appearance === 'row',
    [s.col]: appearance === 'col',
    [s.size_md]: size === 'md',
    [s.size_small]: size === 'small',
    [s.size_xl]: size === 'xl',
    [s.disabled]: disabled === true,
    [s.required]: required === true,
  })

  const handleEvent = $((ev: Event) => {
    //Do something
    if(onInputChange && typeof onInputChange === 'function') {
      onInputChange(ev);
    }
  });

  return (
    <div class={InputClassList}>
      {
        label &&
        <label>{label}</label>
      }
      <div class={s.inputWrapper}>
        <input type={inputType} placeholder={placeholder} onInput$={handleEvent} {...attributes} />
        {
          msg &&
          <p class={s.inputMsg}>{msg}</p>
        }
      </div>
      
    </div>
  );
});