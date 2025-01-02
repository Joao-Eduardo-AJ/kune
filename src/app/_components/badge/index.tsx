import { ButtonHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

const badge = tv({
  base: 'rounded-full px-[14px] py-[5px] text-xl font-semibold transition-all duration-300 overflow-hidden',
  variants: {
    type: {
      contained: 'bg-grayscale-900 text-white',
      outlined:
        'badge relative border border-gray-300 text-grayscale-700 before:absolute before:bg-white hover:bg-grayscale-100 hover:text-grayscale-900'
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
