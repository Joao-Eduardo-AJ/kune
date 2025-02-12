import * as motion from 'motion/react-client'

import { twMerge as merge } from 'tailwind-merge'

type ButtonPingProps = React.ComponentProps<'button'>

export function ButtonPing({ className, ...props }: ButtonPingProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.5, delay: 0.25 }}
      className="relative mx-auto w-[232px]"
    >
      <span
        className={merge(
          'cta absolute left-0 h-full w-full rounded-xl',
          'animate-bloom opacity-50'
        )}
      />
      <button
        className={merge(
          'cta relative w-full rounded-xl bg-left p-2 pl-6 transition-all duration-500',
          'flex items-center justify-between text-xl leading-6.5',
          'hover:bg-right',
          className
        )}
        {...props}
      >
        Book a call
        <span
          className={merge(
            'material-symbols-outlined block cursor-pointer rounded-md p-2',
            'bg-grayscale-900 text-grayscale-100'
          )}
        >
          arrow_right_alt
        </span>
      </button>
    </motion.div>
  )
}
