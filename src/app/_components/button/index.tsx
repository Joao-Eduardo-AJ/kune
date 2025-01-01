import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'font-semibold rounded-lg relative',
  variants: {
    type: {
      contained:
        'contained text-white px-6 py-4 bg-grayscale-900 before:absolute hover:before:bg-grayscale-100 overflow-hidden hover:shadow-2xl transition-shadow duration-[2s]',
      text: 'text text-grayscale-700 px-4 py-[10px] after:absolute after:bg-grayscale-700'
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
