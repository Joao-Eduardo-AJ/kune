import Image from 'next/image'
import { Typography } from '../typography'
import { customersLogos } from './mock'

export function CustomerCarousel() {
  return (
    <div className="grid gap-2 xl:gap-5">
      <Typography variant="p2">Trusted by</Typography>
      <div className="relative max-w-[912px] overflow-hidden">
        <span className="customers-fade absolute left-0 z-10 h-12 w-full" />
        <div className="flex animate-customers-fade gap-6">
          {[...customersLogos, ...customersLogos].map(
            ({ alt, src, width }, index) => (
              <Image
                key={index}
                alt={alt}
                src={src}
                height={48}
                width={width}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}
