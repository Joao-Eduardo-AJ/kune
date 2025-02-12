import { twMerge as merge } from 'tailwind-merge'

type ContainerProps = React.ComponentProps<'div'>

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div className={merge('mx-auto max-w-[1216px]', className)} {...props} />
  )
}
