import { Heading } from '@chakra-ui/react'
import { Section } from '../../components/section'
import logoBlanc from '../../assets/ithaque-blanc.png'
import logoBleu from '../../assets/ithaque-bleu.png'
import { LogoViewer } from './logo-viewer'

export const LOGO_SECTION = 'logo'

export function LogoSection() {
  return (
    <Section id={LOGO_SECTION}>
      <Heading size="3xl">Logo</Heading>
      <LogoViewer title="principal" pngSrc={logoBleu} />
      <LogoViewer title="blanc" pngSrc={logoBlanc} bgColor="gray.800" />
    </Section>
  )
}
