import { Paragraphy } from '@/components'
import { tv, VariantProps } from 'tailwind-variants'

const topic = tv({
  base: 'shadow-waves relative h-[11px] w-[11px] rounded-full before:animate-topic before:rounded-full',
  variants: {
    color: {
      green: 'bg-accent before:bg-accent-shadow',
      gray: 'bg-grayscale-700 before:bg-grayscale-800'
    }
  },
  defaultVariants: {
    color: 'green'
  }
})

type TopicProps = {
  variant?: VariantProps<typeof topic>
  children: React.ReactNode
}

export function Topic({ children, variant }: TopicProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={topic(variant)} />
      <Paragraphy variant={{ type: 'p2' }}>{children}</Paragraphy>
    </div>
  )
}
