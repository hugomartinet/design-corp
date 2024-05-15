import { ButtonGroup, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { DownloadButton } from '../../components/download-button'

interface LogoViewerProps {
  title: string
  pngSrc?: string
  svgSrc?: string
  bgColor?: string
}

export function LogoViewer({ title, pngSrc, svgSrc, bgColor }: LogoViewerProps) {
  return (
    <HStack spacing={8} align="start">
      <Center boxSize={36} bgColor={bgColor} rounded="md" p={2}>
        <Image
          w="full"
          h="full"
          objectFit="contain"
          src={svgSrc ?? pngSrc}
          fallbackSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3hCJKnr0VVAN1K_IcSb2SGsrWt9oFzT_znZnAmDhtQ&s"
        />
      </Center>

      <VStack align="start">
        <Text fontSize="2xl">{title}</Text>

        <ButtonGroup w="full">
          <DownloadButton src={pngSrc} />
          <DownloadButton src={svgSrc} />
        </ButtonGroup>
      </VStack>
    </HStack>
  )
}
