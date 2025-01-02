import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'relative rounded-lg font-semibold',
  variants: {
    type: {
      contained:
        'contained overflow-hidden bg-grayscale-900 px-6 py-4 text-white transition-shadow duration-[2s] before:absolute hover:shadow-2xl hover:before:bg-grayscale-100',
      text: 'text px-4 py-[10px] text-grayscale-700 after:absolute after:bg-grayscale-700'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  defaultVariants: {
    type: 'text'
  }
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof button>
}

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button(variant)} />
}
