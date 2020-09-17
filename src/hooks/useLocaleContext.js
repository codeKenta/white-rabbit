import { useContext } from 'react'
import LocaleContext from '@context/LocaleContext'

export default function useLocaleContext() {
  return useContext(LocaleContext)
}
