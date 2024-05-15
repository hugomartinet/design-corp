import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { COLORS_SECTION } from '../colors'
import { FONTS_SECTION } from '../fonts'
import { LOGO_SECTION } from '../logo'
import { PRESENTATION_SECTION } from '../presentation'

export function MobileHeader() {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Menu" icon={<HamburgerIcon />} />
      <MenuList>
        <MenuItem as="a" href={`#${PRESENTATION_SECTION}`}>
          Presentation
        </MenuItem>
        <MenuItem as="a" href={`#${LOGO_SECTION}`}>
          Logo
        </MenuItem>
        <MenuItem as="a" href={`#${FONTS_SECTION}`}>
          Fonts
        </MenuItem>
        <MenuItem as="a" href={`#${COLORS_SECTION}`}>
          Colors
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
