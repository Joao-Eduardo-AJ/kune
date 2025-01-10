import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'relative rounded-lg px-4',
  variants: {
    type: {
      contained:
        'contained bg-grayscale-900 xl:px-6 py-2 xl:py-[15px] text-white transition-shadow duration-[2s] before:absolute hover:shadow-2xl before:bg-grayscale-300 leading-[26px]',
      text: 'text py-[10px] text-grayscale-700 before:absolute before:bg-grayscale-700'
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
