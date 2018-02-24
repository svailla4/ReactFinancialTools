/* @flow */

export const formatNumber = (input:string): string =>{
  return input.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export const removeNonNumberCharacters = (input:string): string=>{
  return input.replace(/[^\d]/g, "");
}

export const validInterestRateFormat = (input:string): boolean=>{
  let regexInteger = RegExp('(^[1-9]?[0-9](\\.)?$|^$)');
  let regexDecimal = RegExp('(^[1-9]?[0-9](\\.)(\\d{1,2})?$|^$)');
  return regexInteger.test(input) || regexDecimal.test(input)
}

export const formatInterestRate = (input:string): string =>{
  let arr: Array<string> = input.split('.');

  if(arr.length === 1){
    if(arr[0]===''){
      return '0';
    }else{
      return input;
    }
  }else if(arr.length === 2){
    if(arr[0] ===''){
      return  '0.' + arr[1];
    }else if(arr[1]===''){
      return arr[0];
    }
    else{
      return `${arr[0]}.${arr[1]}`;
    }
  }
  return 'error';
}
