import TwitterLogo1 from 'assets/svg/twitter.svg'
import TwitterLogo2 from 'assets/svg/twitter-black.svg'
import DiscordLogo1 from 'assets/svg/discord.svg'
import DiscordLogo2 from 'assets/svg/discord-black.svg'
import MediumLogo1 from 'assets/svg/medium.svg'
import MediumLogo2 from 'assets/svg/medium-black.svg'
import TelegramLogo1 from 'assets/svg/telegram.svg'
import TelegramLogo2 from 'assets/svg/telegram-black.svg'

export const SocialLinks = {
  TWITTER: 'https://twitter.com/Ladder_NFT',
  DISCORD: 'https://discord.gg/FjXpN8wYBq',
  MEDIUM: 'https://medium.com/@ladder_top',
  TELEGRAM: 'https://t.me/LadderAMM'
}

export const DocLink='/'

export const Socials: {
  [key: string]: {
    title: string
    logo1: string
    logo2: string
    link: string
  }
} = {
  TWITTER: {
    title: 'twitter',
    logo1: TwitterLogo1,
    logo2: TwitterLogo2,
    link: SocialLinks.TWITTER
  },
  DISCORD: {
    title: 'discord',
    logo1: DiscordLogo1,
    logo2: DiscordLogo2,
    link: SocialLinks.DISCORD
  },
  MEDIUM: {
    title: 'medium',
    logo1: MediumLogo1,
    logo2: MediumLogo2,
    link: SocialLinks.MEDIUM
  },
  TELEGRAM: {
    title: 'telegram',
    logo1: TelegramLogo1,
    logo2: TelegramLogo2,
    link: SocialLinks.TELEGRAM
  }
}
