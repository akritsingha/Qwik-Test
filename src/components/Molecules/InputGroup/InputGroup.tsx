import { component$} from "@builder.io/qwik";
import s from './InputGroup.module.scss';
import classNames from 'classnames';
import {Input, type InputProps} from '../../Atoms/Input/Input'
 

// export 
// interface InputGroupProps extends Array<InputProps>{}

export interface InputGroupProps {
  data: {
    inputFields: Array<InputProps>;
  },
  layout: {
    appearance?: string,
    classPrefix?: string,
  }
}

export const InputGroup = component$<InputGroupProps>(({data, layout}) => {
  const {
    inputFields=[], 
  } = data;

  const {
    appearance='',
    classPrefix='',
  } = layout;


  const InputClassList = classNames(s.inputGroup, classPrefix, {
    [s.row]: appearance === 'row',
    [s.col]: appearance === 'col',
  })

  return (
    <div class={InputClassList}>
      {inputFields.map((item, index)=>(
        <div key={`input_${index}`}>
          <Input {...item}/>
        </div>
      ))} 
    </div>
  );
});