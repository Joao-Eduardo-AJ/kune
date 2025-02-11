import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const button = tv({
  base: 'rounded-lg h-14 px-4 py-2',
  variants: {
    type: {
      primary: twMerge(
        'bg-grayscale-900 text-white transition-colors',
        'hover:bg-grayscale-800 disabled:bg-grayscale-400'
      ),
      secondary: ''
    },
    size: {
      md: 'text-base',
      lg: 'text-xl leading-6.5'
    }
  },
  defaultVariants: {
    type: 'primary',
    size: 'md'
  }
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof button>
}

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button(variant)} />
}
