import { atom } from 'jotai'

export type ProjectType = 'branding' | 'mobile' | 'web' | 'website'

export const projectTypeAtom = atom<ProjectType>('website')
