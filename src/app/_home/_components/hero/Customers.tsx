import { Paragraphy } from '@/components'
import Image from 'next/image'
import { customers } from './customers-data'


export function Customers() {
  return (
    <div className="grid gap-2 xl:gap-5">
      <Paragraphy variant={{ type: 'p2' }}>Trusted by</Paragraphy>
      <div className="relative max-w-[912px] overflow-hidden">
        <span className="fade-x absolute left-0 z-10 h-12 w-full" />
        <div className="flex animate-customers gap-6">
          {[...customers, ...customers].map(({ slug, width }, index) => (
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
    </div>
  )
}
