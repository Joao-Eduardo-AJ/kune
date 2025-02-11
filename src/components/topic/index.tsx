import { Paragraphy } from '@/components'
import { tv, VariantProps } from 'tailwind-variants'

const topic = tv({
  slots: {
    animation: 'h-[11px] w-[11px] rounded-full animate-ping-slow absolute',
    base: 'h-[11px] w-[11px] rounded-full'
  },
  variants: {
    color: {
      green: {
        animation: 'bg-accent/25',
        base: 'bg-accent'
      },
      gray: {
        animation: 'bg-grayscale-700/25',
        base: 'bg-grayscale-700 '
      }
    }
  },
  defaultVariants: {
    color: 'green'
  }
})

type TopicProps = VariantProps<typeof topic> & {
  children: React.ReactNode
}

export function Topic({ children, color }: TopicProps) {
  const { animation, base } = topic({ color })

  return (
    <div className="flex items-center gap-2">
      <span className={animation()} />
      <span className={base()} />
      <Paragraphy variant={color === 'gray' ? 'p5' : 'p3'}>
        {children}
      </Paragraphy>
    </div>
  )
}
