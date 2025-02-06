import json from './data.json'
import type { Data } from './types/data'

export const data = json as unknown as Data

export * from './types/data'
