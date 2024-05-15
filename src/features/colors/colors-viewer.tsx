import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { colord } from 'colord'
import { CopyButton } from '../../components/copy-button'

interface ColorsViewerProps {
  title: string
  colors: string[]
}

export function ColorsViewer({ title, colors }: ColorsViewerProps) {
  return (
    <>
      <Text fontSize="2xl">{title}</Text>
      <HStack spacing={8}>
        {colors.map(color => (
          <Color key={color} value={color} />
        ))}
      </HStack>
    </>
  )
}

interface ColorProps {
  value: string
}

function Color({ value }: ColorProps) {
  const color = colord(value)
  const hexCode = color.toHex()
  const rgb = color.toRgbString()

  return (
    <HStack spacing={4}>
      <Box bgColor={hexCode} boxSize={24} rounded="md" />

      <VStack align="start">
        <CopyButton text={hexCode} />
        <CopyButton text={rgb} />
      </VStack>
    </HStack>
  )
}
