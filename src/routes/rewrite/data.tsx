export const reWriteInputLang = {
  data: {
    label: "Select Input language",
    options: {
      "hi" : "Hindi",
      "en" : "English",
      "ben" : "Bengali"
    }
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: '',
    size: "md",
    required: true
  },
  config: {
    inputType: "option",
    disabled: false,
     attributes: {
      name: "inputlang",
      required: true
    }
  }
}


export const reWriteOutputLang = {
  data: {
    label: "Select Output language",
    options: {
      "hi" : "Hindi",
      "en" : "English",
      "ben" : "Bengali"
    }
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: '',
    size: "md",
    required: true
  },
  config: {
    inputType: "option",
    disabled: false,
    attributes: {
      name: "outputLang",
      required: true
    }
  }
}


export const reWriteInputTextFieldData = {
  data:{
    label: "Write Your Story Here:",
    placeholder: "Enter text to translate",
    msg: "Make sure Input language should be the same as content",
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: 'formtest',
    size: "md",
    required: true
  },
  config: {
    inputType: "textarea",
    disabled: false,
    attributes: {
      name: "inputtext",
      required: true
    }
  }
}

export const reWriteOutputTextFieldData = {
  data:{
    label: "Output Here:",
    placeholder: "Output text generate here",
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: 'formtest',
    size: "md"
  },
  config: {
    inputType: "textarea",
    disabled: false,
    attributes:{
      name:"outputText"
    }
  }
}

