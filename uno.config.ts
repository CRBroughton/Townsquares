import { defineTokenSystem } from '@crbroughton/unocss-token-system'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  // presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const tokens = defineTokenSystem({
  name: 'token-system',
  colors: {
    primary: {
      themes: {
        light: 'oklch(0.84 0.18 159 / 100%)',
        dark: 'oklch(0.84 0.18 159 / 100%)',
      },
    },
    secondary: {
      themes: {
        light: 'oklch(0.84 0.18 257 / 100%)',
        dark: 'oklch(0.84 0.18 257 / 100%))',
      },
    },
    warning: {
      themes: {
        light: 'oklch(0.84 0.18 26 / 100%)',
        dark: 'oklch(0.84 0.18 26 / 100%)',
      },
    },
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  rounded: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  sizes: {
    sm: '100px',
    md: '200px',
    lg: '300px',
    full: '100%',
  },
})

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    tokens,
    // presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
