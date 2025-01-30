type Children = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: Children) => (
  <article className="flex h-[456px] w-full max-w-[337px] flex-col justify-between rounded-xl bg-white p-8 lg:h-[547px] lg:max-w-none">
    {children}
  </article>
)

export const Icon = () => (
  <div className="h-24 w-24 rounded-2xl bg-grayscale-100" />
)

export const Text = ({ children }: Children) => (
  <div className="grid gap-6">{children}</div>
)
