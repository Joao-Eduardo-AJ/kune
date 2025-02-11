import json from './data.json'
import type { DataParams } from './types/data'

export const data = json as unknown as DataParams

export * from './types/data'
