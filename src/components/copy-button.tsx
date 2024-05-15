import { Button, useToast } from '@chakra-ui/react'

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const toast = useToast()
  return (
    <Button
      size="sm"
      color="gray.500"
      onClick={() => {
        navigator.clipboard.writeText(text).then(() =>
          toast({
            status: 'success',
            description: 'Copied to clipboard',
            variant: 'subtle',
            duration: 1000,
            position: 'bottom-left',
          })
        )
      }}
    >
      {text}
    </Button>
  )
}
