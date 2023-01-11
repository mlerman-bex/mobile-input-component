export const regexDefault = /^[a-zA-Z]+$/;
export const regexPassword = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;
export const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
export const regexMobile = /^[1-9][0-9]{9}$/;
export const regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/([0-9]{4})$/;
export const regexIncludeLowercaseLetter = /[a-z]/;
export const regexIncludeUppercaseLetter = /[a-z]/;
export const regexIncludeNumber = /[0-9]+/;
export const regexIncludeSymbol = /\W/;
export const regexBexPin = /^[0-9]{4}$/;
export const regexVerificationCode = /^[0-9]{6}$/; // change to however many numbers sent

export const validateLength = (password) => { return password.length >= 8; };
export const validateCase = (value, caseToMatch) => { return caseToMatch.test(value); };