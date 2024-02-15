import { component$, $, Slot } from "@builder.io/qwik";
import s from './button.module.css';
import classNames from 'classnames';
 
export interface ButtonProps {
  layout: {
    appearance?: string,
    classPrefix?: string,
    size?: string,
    outline?: boolean,
  },
  config: {
    active?: boolean,
    disabled?: boolean,
    loading?: boolean,
    attributes?:{},
    onBtnClick?: any
  }
}
 

export const Button = component$<ButtonProps>(({layout, config}) => {
  const {appearance, classPrefix, size, outline} = layout;
  const {active, disabled, loading, attributes, onBtnClick} = config;

  const handleClick = $(
   () =>{
    if(onBtnClick && typeof onBtnClick === 'function'){
      onBtnClick();
    }
  }
);

  const buttonClassList = classNames(s.button, classPrefix, {
    [s.bg_danger]: appearance === 'danger',
    [s.bg_success]: appearance === 'success',
    [s.bg_primary]: appearance === 'primary',
    [s.bg_dark]: appearance === 'dark',
    [s.size_md]: size === 'md',
    [s.size_small]: size === 'small',
    [s.size_xl]: size === 'xl',
    [s.disabled]: disabled === true,
    [s.loading]: loading === true,
    [s.active]: active === true,
    [s.outline]: outline === true
  })

  return (
    <button class={buttonClassList} onClick$={handleClick} {...attributes}>
      <Slot/>
    </button>
  );
});