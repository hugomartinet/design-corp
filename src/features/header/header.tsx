import { Flex } from '@chakra-ui/react'
import { useIsMobile } from '../../hooks/useIsMobile'
import { DesktopHeader } from './desktop-header'
import { MobileHeader } from './mobile-header'

export function Header() {
  const isMobile = useIsMobile()
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
