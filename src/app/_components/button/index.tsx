import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'relative rounded-lg font-semibold overflow-hidden',
  variants: {
    type: {
      contained:
        'contained bg-grayscale-900 px-6 py-4 text-white transition-shadow duration-[2s] before:absolute hover:shadow-2xl before:bg-grayscale-300',
      text: 'text px-4 py-[10px] text-grayscale-700 before:absolute before:bg-grayscale-700'
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
