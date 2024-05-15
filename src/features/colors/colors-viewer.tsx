import { Box, HStack, Text, VStack, Wrap } from '@chakra-ui/react'
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
      <Wrap spacing={4}>
        {colors.map(color => (
          <Color key={color} value={color} />
        ))}
      </Wrap>
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
    <HStack>
      <Box bgColor={hexCode} boxSize={20} rounded="md" />

      <VStack align="start">
        <CopyButton text={hexCode} />
        <CopyButton text={rgb} />
      </VStack>
    </HStack>
  )
}
