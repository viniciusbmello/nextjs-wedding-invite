import I18n from "i18n-js";
import pt from "./lang/pt";

const supportedLanguages = [
  {
    code: "pt",
    label: "Portuguese",
    translations: pt
  },
];

I18n.defaultLocale = "pt";
supportedLanguages.forEach(lang => {
  I18n.translations[lang.code] = lang.translations;
});

export const languageOptions = supportedLanguages.map(lang => ({
  value: lang.code,
  label: lang.label
}));

export const setLocale = locale => {
  I18n.locale = locale;
};

export const t = (name, params = {}) => {
  return I18n.t(name, params);
};

export const Trans = props => (
  <span
    dangerouslySetInnerHTML={{ __html: t(props.i18nKey, { ...props }) }}
  ></span>
);

export const defaultLocale = I18n.defaultLocale;

export const useTranslation = locale => {
  I18n.locale = locale;
  return I18n.t;
};
