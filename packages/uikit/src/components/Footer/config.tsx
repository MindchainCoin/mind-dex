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
    href: "https://www.facebook.com/mindchainswap",
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
        label: "Announcements",
        href: "https://t.me/mindchain1",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/MindchainIndonesia",
      },
      {
        label: "Português",
        href: "https://t.me/PancakeSwapPortuguese",
      },
      {
        label: "Bangladesh",
        href: "https://t.me/MindchainBD",
      },
      {
        label: "Filipino",
        href: "https://t.me/MindchainPh",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/MindchainINDIA",
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
