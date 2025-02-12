import * as motion from 'motion/react-client'
import { tv } from 'tailwind-variants'

const badge = tv({
  base: 'relative border rounded-full px-3.5 py-2 transition-all overflow-hidden text-base text-nowrap font-semibold',
  variants: {
    actived: {
      true: 'text-white',
      false: 'border-grayscale-300 text-grayscale-700 hover:text-grayscale-900'
    }
  }
})

type BadgeProps = React.ComponentProps<'button'> & {
  actived?: boolean
}

export function Badge({ children, actived, ...props }: BadgeProps) {
  const style = badge({ actived })

  return (
    <button className={style} {...props}>
      <motion.div
        className="absolute inset-0 rounded-full bg-grayscale-900 transition-colors hover:bg-grayscale-800"
        initial={{ scale: 0 }}
        animate={{ scale: actived ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  )
}
