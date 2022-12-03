import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, FacebookIcon, LinkedInIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/pancakeswap",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/mindchaincoin",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/MindChain1",
  },
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/mindchain.info",
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/user/mindchaincoin",
  },

  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/mindchain_official",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/mindchainMIND",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancakeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/PancakeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/pancakeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/pancakeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/pancakeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/PancakeSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/PancakeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/pancakeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/pancakeswapfr",
      },
      {
        label: "Deutsch",
        href: "https://t.me/PancakeSwap_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Pancakeswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/PancakeSwapGeorgia",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/PancakeSwapINDIA",
      },
      {
        label: "Announcements",
        href: "https://t.me/PancakeSwapAnn",
      },
    ],
  },
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/mindchaincoin/",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/mindchaincoin/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/mindchaincoin",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/mindchaincoin",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
