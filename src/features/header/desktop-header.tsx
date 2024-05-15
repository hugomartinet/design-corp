import { Button, HStack } from '@chakra-ui/react'
import { COLORS_SECTION } from '../colors'
import { FONTS_SECTION } from '../fonts'
import { LOGO_SECTION } from '../logo'
import { PRESENTATION_SECTION } from '../presentation'

export function DesktopHeader() {
  return (
    <HStack spacing={4}>
      <Button as="a" href={`#${PRESENTATION_SECTION}`}>
        Presentation
      </Button>
      <Button as="a" href={`#${LOGO_SECTION}`}>
        Logo
      </Button>
      <Button as="a" href={`#${FONTS_SECTION}`}>
        Fonts
      </Button>
      <Button as="a" href={`#${COLORS_SECTION}`}>
        Colors
      </Button>
    </HStack>
  )
}
