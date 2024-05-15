import { BoxProps, Center, VStack } from '@chakra-ui/react'

export function Section({ children, ...props }: BoxProps) {
  return (
    <Center as="section" w="full" minH="100vh" {...props}>
      <VStack spacing={8} align="start" maxW="800px" w="full" p={8}>
        {children}
      </VStack>
    </Center>
  )
}
