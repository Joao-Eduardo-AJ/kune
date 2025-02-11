import { twMerge as merge } from 'tailwind-merge'

type ButtonPingProps = React.ComponentProps<'button'>

export function ButtonPing({ className, ...props }: ButtonPingProps) {
  return (
    <div className="relative">
      <span
        className={merge(
          'cta absolute left-0 h-full w-full rounded-xl',
          'animate-bloom opacity-50'
        )}
      />
      <button
        className={merge(
          'cta relative w-[232px] rounded-xl bg-left p-2 pl-6 transition-all duration-500',
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
    </div>
  )
}
