import { ButtonHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

const badge = tv({
  base: 'rounded-full px-[14] py-[5] text-xl font-semibold transition-all duration-300',
  variants: {
    type: {
      contained: 'bg-grayscale-900 text-white',
      outlined:
        'border border-gray-300 text-grayscale-700 hover:bg-grayscale-100 hover:scale-105'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  }
})

type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean
}

export function Badge({ selected, ...props }: BadgeProps) {
  return (
    <button
      {...props}
      className={badge(selected ? { type: 'contained' } : { type: 'outlined' })}
    />
  )
}
