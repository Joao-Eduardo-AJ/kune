import { HtmlHTMLAttributes, RefAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge as merge } from 'tailwind-merge'

const paragraphy = tv({
  base: 'text-grayscale-700',
  variants: {
    type: {
      p1: 'text-[24px] md:text-[32px] xl:text-[40px] leading-[28px] md:leading-[42px] xl:leading-[56px] font-semibold',
      p2: 'text-[16px] md:text-[18px] xl:text-[20px] leading-[24px] md:leading-[26px] xl:leading-[28px] font-semibold',
      p3: 'text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] font-semibold',
      p4: 'text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] font-normal',
      p5: 'text-[14px] leading-[24px] font-normal',
      p6: 'text-[12px] leading-[22px] font-normal'
    }
  },
  defaultVariants: {
    type: 'p2'
  }
})

type ParagraphyProps = HtmlHTMLAttributes<HTMLParagraphElement> &
  RefAttributes<HTMLParagraphElement> & {
    variant?: VariantProps<typeof paragraphy>['type']
  }

export function Paragraphy({ variant, className, ...props }: ParagraphyProps) {
  return (
    <p className={merge(paragraphy({ type: variant }), className)} {...props} />
  )
}
