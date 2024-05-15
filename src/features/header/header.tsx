import { Button, Flex, HStack } from '@chakra-ui/react'
import { COLORS_SECTION } from '../colors'
import { FONTS_SECTION } from '../fonts'
import { LOGO_SECTION } from '../logo'
import { PRESENTATION_SECTION } from '../presentation'

export function Header() {
  return (
    <Flex
      position="fixed"
      top={0}
      w="full"
      p={2}
      bg="white"
      align="center"
      justify="center"
      boxShadow="white 0 0 30px 40px"
    >
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
    </Flex>
  )
}
