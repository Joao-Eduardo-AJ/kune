import * as motion from 'motion/react-client'

import { twJoin, twMerge } from 'tailwind-merge'

type ButtonPingProps = React.ComponentProps<'button'>

export function CTAButton({ className, ...props }: ButtonPingProps) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', delay: 0.1, duration: 0.5 }}
      className="relative mx-auto w-[232px]"
    >
      <span
        className={twJoin(
          'cta absolute left-0 h-full w-full rounded-xl',
          'animate-bloom opacity-50'
        )}
      />
      <button
        className={twMerge(
          'cta relative w-full rounded-xl bg-left p-2 pl-6 transition-all duration-500',
          'flex items-center justify-between text-xl leading-6.5',
          'hover:bg-right',
          className
        )}
        {...props}
      >
        Book a call
        <span
          className={twJoin(
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
