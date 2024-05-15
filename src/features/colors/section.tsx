import { Heading } from '@chakra-ui/react'
import { Section } from '../../components/section'
import { ColorsViewer } from './colors-viewer'

export const COLORS_SECTION = 'colors'

export function ColorsSection() {
  return (
    <Section id={COLORS_SECTION}>
      <Heading size="3xl">Colors</Heading>
      <ColorsViewer title="principales" colors={['#08305e', '#1EAB66']} />
      <ColorsViewer title="secondaires" colors={['#fb5151', '#F8BC00', '#949DA8']} />
    </Section>
  )
}
