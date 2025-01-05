import { atom } from 'jotai'

export type ProjectType = 'website' | 'mobileapp' | 'webapp' | 'branding'

export const projectTypeAtom = atom<ProjectType>('website')
