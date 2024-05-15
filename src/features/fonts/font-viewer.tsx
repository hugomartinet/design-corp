import { ButtonGroup, Text, VStack } from '@chakra-ui/react'
import { DownloadButton } from '../../components/download-button'

interface FontViewerProps {
  title: string
  fontFamily?: string
  src?: string
}

const SAMPLE_TEXT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!:;()'.split('').join(' ')

export function FontViewer({ title, fontFamily, src }: FontViewerProps) {
  return (
    <VStack spacing={[4, 4, 8]} align="start">
      <Text fontSize="2xl">{title}</Text>

      <Text fontSize="3xl" fontFamily={fontFamily}>
        {SAMPLE_TEXT}
      </Text>

      <VStack align="start">
        <ButtonGroup w="full">
          <DownloadButton src={src} />
        </ButtonGroup>
      </VStack>
    </VStack>
  )
}
