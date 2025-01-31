import { HTMLAttributes } from 'react'

export const Container = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`mx-auto max-w-[1216px] ${className}`} />
)
