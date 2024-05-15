import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { DesktopHeader } from './desktop-header'
import { MobileHeader } from './mobile-header'

export function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Flex
      position="fixed"
      top={0}
      w="full"
      p={2}
      bg="white"
      align="center"
      justify={['start', 'start', 'center']}
      boxShadow="white 0 0 30px 40px"
    >
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </Flex>
  )
}
