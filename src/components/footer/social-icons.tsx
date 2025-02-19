import { data } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type DivProps = React.ComponentProps<'div'>

export const SocialIcons = ({ className, ...props }: DivProps) => (
  <div {...props} className={twMerge('items-center gap-1', className)}>
    {data.socialIcons.map(({ icon, url }) => (
      <Link
        key={icon}
        href={url}
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-grayscale-700 transition-all duration-300 hover:-translate-y-1"
      >
        <Image alt="" width={16} height={16} src={`/icons/${icon}`} />
      </Link>
    ))}
  </div>
)
