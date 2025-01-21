import { Typography } from '@/app/_shared'
import { customers } from '@/mock'
import Image from 'next/image'

export function Customers() {
  return (
    <div className="grid gap-2 xl:gap-5">
      <Typography variant="p2">Trusted by</Typography>
      <div className="relative max-w-[912px] overflow-hidden">
        <span className="fade-x absolute left-0 z-10 h-12 w-full" />
        <div className="flex animate-customers gap-6">
          {[...customers, ...customers].map(({ alt, src, width }, index) => (
            <Image key={index} alt={alt} src={src} height={48} width={width} />
          ))}
        </div>
      </div>
    </div>
  )
}
