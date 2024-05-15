import { ChakraProvider } from '@chakra-ui/react'
import { ColorsSection } from './features/colors'
import { FontsSection } from './features/fonts'
import { Header } from './features/header'
import { LogoSection } from './features/logo'
import { PresentationSection } from './features/presentation'
import { ImportedFonts, theme } from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ImportedFonts />

      <Header />
      <PresentationSection />
      <LogoSection />
      <FontsSection />
      <ColorsSection />
    </ChakraProvider>
  )
}

export default App
