import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Taro from "@tarojs/taro";
import resources from './langPack';

const { language } = Taro.getSystemInfoSync()

console.log('i18n')
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;