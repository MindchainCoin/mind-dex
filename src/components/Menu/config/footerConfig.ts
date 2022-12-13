import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About Mindchain'),
    items: [
      {
        label: t('Contact'),
        href: 'https://mindchain.info/contact-us',
        isHighlighted: true,
      },
      {
        label: t('About'),
        href: 'https://mindchain.info/about-mindchain',
      },
      {
        label: t('Blog'),
        href: 'https://mindchain.info/blog',
      },
      {
        label: t('Join DeFi'),
        href: 'https://mindchainwallet.com/login/',
      },
    ],
  },
  {
    label: t('Find More'),
    items: [
      {
        label: t('Explorer'),
        href: 'https://bscscan.com/token/0x258ea33a949d8562a2683e1c54d4baead2949f9e',
      },
      {
        label: t('CoinMooner'),
        href: 'https://coinmooner.com/coin/mindchain-coin-mind',
      },
      {
        label: t('CoinmarketCap'),
        href: 'https://coinmarketcap.com/currencies/mindchain/',
      },
      {
        label: t('Wallet'),
        href: 'https://mindchainwallet.com/login/',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mindchaincoin',
      },
      {
        label: t('Documentation'),
        href: 'https://mindchain.info/docs',
      },
     
      {
        label: t('Audits'),
        href: 'https://paladinsec.co/',
      },
      {
        label: t('Careers'),
        href: 'https://mindchain.info/careers',
      },
    ],
  },
]