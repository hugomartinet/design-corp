import { Heading, Stack } from '@chakra-ui/react'
import haouraBold from '../../assets/Hauora-Bold.woff2'
import haoura from '../../assets/Hauora-Regular.woff2'
import { Section } from '../../components/section'
import { FontViewer } from './font-viewer'

export const FONTS_SECTION = 'fonts'

export function FontsSection() {
  return (
    <Section id={FONTS_SECTION}>
      <Heading size="3xl">Fonts</Heading>

      <Stack flexDir={['column', 'column', 'row']} w="full" spacing={[8, 8, 16, 20]} align="start">
        <FontViewer title="principale" fontFamily="Hauora-Bold" src={haouraBold} />
        <FontViewer title="secondaire" fontFamily="Hauora" src={haoura} />
      </Stack>
    </Section>
  )
}
