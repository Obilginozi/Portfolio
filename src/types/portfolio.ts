export interface Skill {
  name: string
  class: string
  level: number
}

export interface Social {
  name: string
  url: string
  class: string
}

export interface BasicInfo {
  name?: string
  titles: string[]
  question: string
  description_header?: string
  contact_header?: string
  contact?: string
  description: string
  description0?: string
  description1?: string
  description2?: string
  description3?: string
  section_name: {
    about: string
    projects: string
    certificates: string
    skills: string
    experience: string
  }
  social?: Social[]
  profile_picture?: string
}

export interface Technology {
  class: string
  name: string
}

export interface Project {
  title: string
  startDate: string
  description: string
  images: string[]
  url: string
  technologies: Technology[]
}

export interface Certificate {
  title: string
  startDate: string
  description: string
  images: string[]
  url: string
  technologies: Technology[]
}

export interface Experience {
  company: string
  title: string
  years: string
  icon: string
  mainTech: string[]
  technologies: string[]
}

export interface PortfolioData {
  basic_info: BasicInfo
  projects?: Project[]
  certificates?: Certificate[]
  experience?: Experience[]
  skills?: {
    icons: Skill[]
  }
}

export interface PageData {
  [key: string]: any
}

export type Language = 'en' | 'tr'
export type Theme = 'light' | 'dark'
