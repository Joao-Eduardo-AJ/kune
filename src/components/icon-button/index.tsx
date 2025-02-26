import { twJoin } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

export const iconButton = tv({
  base: 'p-2 text-2xl leading-6 rounded-md',
  variants: {
    variant: {
      primary: twJoin(
        'bg-grayscale-900 text-white transition-colors',
        'hover:bg-grayscale-800 active:bg-grayscale-600 disabled:bg-grayscale-400'
      ),
      secondary: twJoin(
        'bg-transparent text-grayscale-900 transition-colors',
        'hover:bg-grayscale-200 active:bg-grayscale-300 disabled:bg-grayscale-400'
      )
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

type IconButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof iconButton>

export function IconButton({ className, variant, ...props }: IconButtonProps) {
  return <button className={iconButton({ className, variant })} {...props} />
}
