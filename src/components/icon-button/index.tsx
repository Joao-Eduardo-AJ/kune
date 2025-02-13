import { twJoin } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

export const iconButton = tv({
  base: 'p-2 text-2xl leading-6 rounded-md material-symbols-outlined',
  variants: {
    variant: {
      primary: twJoin(
        'bg-grayscale-900 text-white transition-colors',
        'hover:bg-grayscale-800 disabled:bg-grayscale-400'
      ),
      secondary: twJoin(
        'bg-transparent text-grayscale-900 transition-colors',
        'hover:bg-grayscale-200 disabled:bg-grayscale-300'
      )
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

type IconButtonProps = React.ComponentProps<'span'> &
  VariantProps<typeof iconButton>

export function IconButton({
  className,
  children,
  variant,
  ...props
}: IconButtonProps) {
  return (
    <button>
      <span className={iconButton({ className, variant })} {...props}>
        {children}
      </span>
    </button>
  )
}
