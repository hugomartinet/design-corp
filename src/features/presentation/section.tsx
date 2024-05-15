import { Heading, Text } from '@chakra-ui/react'
import { Section } from '../../components/section'

export const PRESENTATION_SECTION = 'presentation'

export function PresentationSection() {
  return (
    <Section id={PRESENTATION_SECTION}>
      <Heading as="h1" size="4xl">
        Ithaque
      </Heading>

      <Text fontSize="x-large">
        Ithaque est un bureau d'études thermiques engagé pour la <b>rénovation énergétique performante</b>.
      </Text>

      <Text fontSize="x-large">
        Nos engagements portent sur l'<b>expertise technique</b> de nos ingénieur·e·s, l'<b>accompagnement</b> et la{' '}
        <b>pédagogie</b> que nous apportons tout au long du projet.
      </Text>
    </Section>
  )
}
