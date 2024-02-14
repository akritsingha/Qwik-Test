export const signUpForm = {
  data: {
    inputFields: [
      {
        data:{
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
          attributes:{
            name:"email"
          }
        }
      },
      {
        data:{
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
          attributes:{
            name:"password"
          }
        }
      },
      {
        data:{
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
          attributes:{
            name:"cfm_password"
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
