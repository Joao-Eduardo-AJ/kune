type StatusProps = {
  unavailable?: boolean
}

export function Status({ unavailable }: StatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="status relative h-[11px] w-[11px] rounded-full bg-accent before:absolute before:animate-status before:bg-accent-shadow" />
      <p>
        {unavailable
          ? 'Unvailable for new projects'
          : 'Available for new projects'}
      </p>
    </div>
  )
}
