import { Typography } from '@/app/_components'

export const Header = () => (
  <div className="my-[19px] flex items-center justify-between border-b border-gray-300 pb-5 lg:my-0">
    <h2>Our way of Working</h2>
    <span>\/</span>
  </div>
)

export const Info = () => (
  <div className="grid gap-6 lg:flex lg:justify-between">
    <Typography variant="p1">What you can expect</Typography>
    <Typography variant="p2" className="max-w-[488px]">
      At Kune, we believe that every project is unique and deserves a customized
      approach. That’s why our process is built on three key pillars:
      collaboration, innovation, and results.
    </Typography>
  </div>
)

export const Content = () => (
  <div className="hidden-scroll overflow-x-scroll">
    <div className="grid justify-items-center gap-8 md:flex">
      <article className="flex h-[456px] w-full max-w-[337px] flex-col justify-between rounded-xl bg-white p-8 lg:h-[547px] lg:max-w-none">
        <div className="h-24 w-24 rounded-2xl bg-grayscale-100" />
        <div className="grid gap-6">
          <h5>Collaboration</h5>
          <Typography variant="p2">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Typography>
        </div>
      </article>
      <article className="flex h-[456px] w-full max-w-[337px] flex-col justify-between rounded-xl bg-white p-8 lg:h-[547px] lg:max-w-none">
        <div className="h-24 w-24 rounded-2xl bg-grayscale-100" />
        <div className="grid gap-6">
          <h5>Collaboration</h5>
          <Typography variant="p2">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Typography>
        </div>
      </article>
      <article className="flex h-[456px] w-full max-w-[337px] flex-col justify-between rounded-xl bg-white p-8 lg:h-[547px] lg:max-w-none">
        <div className="h-24 w-24 rounded-2xl bg-grayscale-100" />
        <div className="grid gap-6">
          <h5>Collaboration</h5>
          <Typography variant="p2">
            We work closely with our clients, understanding their goals,
            challenges, and vision. This partnership ensures that every decision
            we make aligns with their needs.
          </Typography>
        </div>
      </article>
    </div>
  </div>
)
