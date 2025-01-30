import { Paragraphy } from '@/components'

export const SocialProof = () => (
  <div className="relative flex flex-col gap-10 bg-no-repeat before:top-1/3 before:hidden before:h-[781px] before:w-[781px] before:bg-[url(/section-bg.svg)] md:flex-row md:justify-between before:lg:block">
    <h2 className="text-white">
      Clients Who Trust, <br /> Results That Shine
    </h2>
    <div className="grid max-w-[592px] gap-20">
      <h3 className="z-10 text-accent">
        “At Kune, we bring together over 20 years of combined experience across
        our Designers, Developers, and Marketing Specialists. Our team excels in
        their fields, delivering innovative and tailored solutions for every
        project.”
      </h3>
      <div>
        <Paragraphy className="text-white">Bernardo Campos</Paragraphy>
        <Paragraphy variant={{ type: 'p2' }} className="text-white">
          CEO / Founder at Doc.Door
        </Paragraphy>
      </div>
    </div>
  </div>
)
