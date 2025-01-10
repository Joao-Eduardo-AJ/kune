import { HtmlHTMLAttributes } from 'react'

interface ITypography extends HtmlHTMLAttributes<HTMLParagraphElement> {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p1'
    | 'p2'
    | 'span'
    | 'strong'
}

export function Typography({ variant, ...props }: ITypography) {
  const isP1 = variant === 'p1'
  const isP2 = variant === 'p2'

  type ClassName = string

  const p1Classes: ClassName =
    'font-semibold text-[16px] leading-[26px] md:text-[18px] md:leading-[24px] xl:text-[20px] xl:leading-[30px]'
  const p2Classes: ClassName =
    'text-[14px] leading-[24px] xl:text-[16px] xl:leading-[26px]'

  const Component = isP1 || isP2 ? 'p' : variant

  return (
    <Component
      {...props}
      className={`${isP1 ? p1Classes : ''} ${isP2 ? p2Classes : ''} ${props.className}`}
    />
  )
}
