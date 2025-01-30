type HeaderProps = {
  children: React.ReactNode
  dark?: boolean
}

export const HeaderSection = ({ children, dark }: HeaderProps) => (
  <div className="flex items-center justify-between border-b border-gray-300 pb-5">
    <h2 className={dark ? 'text-grayscale-100' : ''}>{children}</h2>
    <span
      className={`material-symbols-outlined ${dark ? 'text-grayscale-100' : ''}`}
    >
      arrow_downward
    </span>
  </div>
)
