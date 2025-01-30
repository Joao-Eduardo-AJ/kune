import data from './team.json'
import type { TeamData } from './types/team'

export const team = data as unknown as TeamData

export * from './types/team'
