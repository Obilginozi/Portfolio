import { useLanguage } from '@context/LanguageContext'
import type { PortfolioData } from '../types/portfolio'

export const usePageData = (): PortfolioData | null => {
  const { language: _language } = useLanguage()
  
  // This hook can be extended to load different data per page
  // For now, it returns null as a placeholder
  return null
}
