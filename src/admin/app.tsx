import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      "zh",
    ],
    translations: {
      en: {
        "HomePage.header.subtitle": "Welcome to Strapi CMS for Best-Team⚡️",
        "Auth.form.welcome.subtitle":
          "For tactical elites⚡️ Log in with your account",
        "Auth.form.welcome.title": "Welcome to Strapi CMS",
        "Auth.link.forgot-password":
          "忘記密碼請洽管理員，請不要點擊此連結，此連結無效",
      },
      zh: {
        "HomePage.header.subtitle": "歡迎進入管理者面板",
        "Auth.form.welcome.subtitle": "請使用帳號登入",
        "Auth.form.welcome.title": "文件系統內容管理",
        "Auth.link.forgot-password":
          "忘記密碼請洽管理員，請不要點擊此連結，此連結無效",
        "Content Manager": "內容管理",
        "global.plugins.content-manager": "內容管理",
        "global.content-manager": "內容管理",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
