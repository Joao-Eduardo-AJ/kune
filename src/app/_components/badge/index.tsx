import { HTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

const badge = tv({
  base: 'border rounded-full px-3 py-[3px] xl:px-[13px] xl:py-[7px] xl:text-base xl:font-semibold transition-all duration-300 overflow-hidden text-sm leading-[24px] text-nowrap',
  variants: {
    type: {
      contained: 'bg-grayscale-900 text-white',
      outlined:
        'relative border-gray-300 text-grayscale-700 before:bg-white hover:bg-grayscale-100 hover:text-grayscale-900'
    }
  }
})

type BadgeProps = HTMLAttributes<HTMLButtonElement> & {
  selected?: boolean
}

export function Badge({ selected, ...props }: BadgeProps) {
  return (
    <button
      {...props}
      disabled={selected}
      className={badge(selected ? { type: 'contained' } : { type: 'outlined' })}
    />
  )
}
