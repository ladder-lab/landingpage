import TwitterLogo1 from 'assets/svg/twitter.svg'
import TwitterLogo2 from 'assets/svg/twitter2.svg'
import DiscordLogo1 from 'assets/svg/discord.svg'
import DiscordLogo2 from 'assets/svg/discord2.svg'
import MediumLogo1 from 'assets/svg/medium.svg'
import MediumLogo2 from 'assets/svg/medium2.svg'

export const SocialLinks = {
  TWITTER: 'https://twitter.com',
  DISCORD: 'https://discord.com',
  MEDIUM: 'https://medium.com'
}

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
  }
}
