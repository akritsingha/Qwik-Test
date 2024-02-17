import { $ } from "@builder.io/qwik";

export const getValidMobileNumber = $((mobile: string, withoutPrefix:boolean):string => {
    const regMobile = withoutPrefix
      ? /^[6789]\d{9}$/
      : /^(\+91)?[0]?[6789]\d{9}$/;
    const notAllowedNumbers = [
      '6666666666',
      '7777777777',
      '8888888888',
      '9999999999',
    ];
    let mobileNo = '';
    if (regMobile.test(mobile)) {
      mobileNo = mobile.substring(mobile.length - 10, mobile.length);
    }

    if (notAllowedNumbers.indexOf(mobileNo) !== -1) {
      mobileNo = '';
    }
    return mobileNo;
});

export const getValidEmailId = $((email:string): string => {
    // eslint-disable-next-line no-useless-escape
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
    let emailId = '';
    if (regEmail.test(email)) {
      emailId = email;
    }
    return emailId;
});