import Image from 'next/image'

type Children = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: Children) => (
  <article className="flex h-[456px] w-full max-w-[337px] flex-col justify-between rounded-xl bg-white p-8 lg:h-[547px] lg:max-w-none">
    {children}
  </article>
)

export const Icon = ({ icon }: { icon: string }) => (
  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-grayscale-100">
    <Image alt="card icon" width={40} height={40} src={`/icons/${icon}.svg`} />
  </div>
)

export const Text = ({ children }: Children) => (
  <div className="grid gap-6">{children}</div>
)
