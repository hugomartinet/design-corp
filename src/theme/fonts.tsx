import { Global } from '@emotion/react'

export function ImportedFonts() {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'Hauora-Bold';
        font-style: normal;
        font-weight: 700;
        src: url(./src/assets/Hauora-Bold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Hauora';
        font-style: normal;
        font-weight: 400;
        src: url(./src/assets/Hauora-Regular.woff2) format('woff2');
      }
      `}
    />
  )
}
