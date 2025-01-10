import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'relative rounded-lg px-4',
  variants: {
    type: {
      contained:
        'contained bg-grayscale-900 py-[7px] leading-[26px] text-white transition-shadow duration-[2s] hover:shadow-2xl xl:px-6 xl:py-[15px] before:bg-grayscale-300',
      text: ''
    }
  },
  defaultVariants: {
    type: 'contained'
  }
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantProps<typeof button>
}

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button(variant)} />
}
