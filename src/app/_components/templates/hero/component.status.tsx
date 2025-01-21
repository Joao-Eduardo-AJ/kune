import { Typography } from '@/app/_shared'

type StatusProps = {
  unavailable?: boolean
}

export function Status({ unavailable }: StatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="shadow-waves relative h-[11px] w-[11px] rounded-full bg-accent before:animate-status before:rounded-full before:bg-accent-shadow" />
      <Typography variant="p2">
        {unavailable
          ? 'Unvailable for new projects'
          : 'Available for new projects'}
      </Typography>
    </div>
  )
}
