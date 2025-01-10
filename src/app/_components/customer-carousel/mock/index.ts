import verdecampo from '@public/verdecampo.svg'
import evo from '@public/evo.svg'
import mapletv from '@public/mapletv.svg'
import voltbras from '@public/voltbras.svg'
import hulala from '@public/hulala.svg'
import atom from '@public/atom.svg'
import syonet from '@public/syonet.svg'
import docdoor from '@public/docdoor.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type CustomersLogos = {
  alt: string
  src: StaticImport
  width: number
}

export const customersLogos: CustomersLogos[] = [
  {
    src: verdecampo,
    alt: 'verde campo',
    width: 80
  },
  {
    src: evo,
    alt: 'evo',
    width: 70
  },
  {
    src: mapletv,
    alt: 'maple tv',
    width: 129
  },
  {
    src: voltbras,
    alt: 'voltbras',
    width: 97
  },
  {
    src: hulala,
    alt: 'hulala',
    width: 90
  },
  {
    src: atom,
    alt: 'atom',
    width: 48
  },
  {
    src: syonet,
    alt: 'syonet',
    width: 104
  },
  {
    src: docdoor,
    alt: 'docdoor',
    width: 98
  }
]
