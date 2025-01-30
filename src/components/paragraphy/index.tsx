import { HtmlHTMLAttributes, RefAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const paragraphy = tv({
  base: '',
  variants: {
    type: {
      p1: 'font-semibold text-[16px] leading-[26px] md:text-[18px] md:leading-[24px] xl:text-[20px] xl:leading-[30px]',
      p2: 'text-[14px] leading-[24px] xl:text-[16px] xl:leading-[26px]',
      p3: ''
    }
  },
  defaultVariants: { type: 'p1' }
})

type ParagraphyProps = HtmlHTMLAttributes<HTMLParagraphElement> &
  RefAttributes<HTMLParagraphElement> & {
    variant?: VariantProps<typeof paragraphy>
  }

export function Paragraphy({ variant, ...props }: ParagraphyProps) {
  const { className } = props

  return (
    <p
      {...props}
      className={`${paragraphy(variant)} ${className ? className : ''}`}
    />
  )
}
