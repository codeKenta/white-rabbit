/** @jsx jsx */

import React, { useEffect, useState } from 'react'
import { useThemeUI } from 'theme-ui'

export const useColors = () => {
  const { theme, colorMode } = useThemeUI()

  const [colors, setColors] = useState(theme.colors)

  useEffect(() => {
    if (colorMode === 'dark' || colorMode === 'default') {
      setColors(theme.colors)
    }

    if (colorMode === 'light') {
      setColors(theme.colors.modes.light)
    }

    console.log(colorMode, colors)
  }, [colorMode])

  return colors
}
