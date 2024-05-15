import { DownloadIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

interface DownloadButtonProps {
  src?: string
}

export function DownloadButton({ src }: DownloadButtonProps) {
  if (!src) return null
  const extension = src.split('.').pop()!.split('?')[0]
  return (
    <Button as="a" href={src} download size="sm" color="gray.500" leftIcon={<DownloadIcon />}>
      {extension.toUpperCase()}
    </Button>
  )
}
