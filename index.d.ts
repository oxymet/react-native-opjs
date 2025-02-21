declare module "react-native-opjs" {
  interface ValidatorUtils {
    isValidDomain: (email: string) => Promise<boolean>;
    checkFormat: (email: string) => Promise<boolean>;
    validateDomain: (email: string) => Promise<boolean>;
  }

  interface Validator {
    validateEmail: (email: string) => Promise<boolean>;
    isValidEmail: (email: string) => Promise<boolean>;
    checkEmail: (email: string) => Promise<boolean>;
    utils: ValidatorUtils;
  }

  const validator: Validator;
  export default validator;
}
