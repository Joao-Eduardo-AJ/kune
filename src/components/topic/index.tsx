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
  variant?: VariantProps<typeof topic>['color']
  children: React.ReactNode
}

export function Topic({ children, variant }: TopicProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={topic({ color: variant })} />
      <Paragraphy variant={variant === 'gray' ? 'p5' : 'p3'}>
        {children}
      </Paragraphy>
    </div>
  )
}
