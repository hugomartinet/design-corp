import { HStack, Heading } from '@chakra-ui/react'
import { Section } from '../../components/section'
import haouraBold from '../../assets/Hauora-Bold.woff2'
import haoura from '../../assets/Hauora-Regular.woff2'
import { FontViewer } from './font-viewer'

export const FONTS_SECTION = 'fonts'

export function FontsSection() {
  return (
    <Section id={FONTS_SECTION}>
      <Heading size="3xl">Fonts</Heading>

      <HStack w="full" spacing={20} align="start">
        <FontViewer title="principale" fontFamily="Hauora-Bold" src={haouraBold} />
        <FontViewer title="secondaire" fontFamily="Hauora" src={haoura} />
      </HStack>
    </Section>
  )
}
