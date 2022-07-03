import ReadWhitePaper from 'assets/image/readwhitepaper.png'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'

export default function ReadWhitepaper() {
  return (
    <ExternalLink href={'/'}>
      <Image src={ReadWhitePaper} alt={`read-whitepaper`} />
    </ExternalLink>
  )
}
