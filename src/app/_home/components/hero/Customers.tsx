import * as motion from 'motion/react-client'
import Image from 'next/image'

import { Paragraphy } from '@/components'

import { customers } from './customers-data'

export function Customers() {
  const duplicatedCustomers = [...customers, ...customers]

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
      className="space-y-2 xl:space-y-5"
    >
      <Paragraphy variant="p5">Trusted by</Paragraphy>
      <div className="relative w-full overflow-hidden">
        <span className="fade-x absolute left-0 z-10 h-12 w-full" />
        <div className="flex animate-customers gap-6">
          {duplicatedCustomers.map(({ slug, width }, index) => (
            <Image
              key={index}
              alt={slug}
              src={`/logos/${slug}.svg`}
              height={48}
              width={width}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
