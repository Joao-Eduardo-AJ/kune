import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge as merge } from 'tailwind-merge'

const button = tv({
  base: 'rounded-lg h-14 px-4 py-2 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: merge(
        'bg-grayscale-900 text-white transition-colors',
        'hover:bg-grayscale-800 disabled:bg-grayscale-400'
      ),
      secondary: merge(
        'border border-grayscale-300 text-grayscale-900 transition-colors',
        'hover:border-grayscale-900 disabled:border-grayscale-400 disabled:text-grayscale-400'
      )
    },
    size: {
      md: 'text-base',
      lg: 'text-xl leading-6.5'
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary'
  }
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export function Button({ size, variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ size, variant })} />
}
