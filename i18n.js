
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const NextI18Next = require('next-i18next').default
const ICU = require("i18next-icu");
const de = require("i18next-icu/locale-data/de");
const en = require("i18next-icu/locale-data/en");

module.exports = new NextI18Next({
  use: [
    new ICU({
      localeData: [de, en],
    }),
  ],
  otherLanguages: ['de'],
  localeSubpaths,
  saveMissing: true,
})
