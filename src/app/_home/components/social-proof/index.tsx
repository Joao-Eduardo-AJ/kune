import { Paragraphy } from '@/components'

export const SocialProof = () => (
  <div className="relative flex flex-col gap-10 md:flex-row md:justify-between">
    <div
      aria-hidden="true"
      role="presentation"
      className="absolute -left-8 -top-10 h-[545px] w-[545px] bg-[url(/section-bg.svg)] bg-cover lg:left-0 lg:top-[168px] xl:h-[781px] xl:w-[781px]"
    />
    <h2 className="z-10 text-white">
      Clients Who Trust, <br /> Results That Shine
    </h2>
    <div className="z-10 grid max-w-[592px] gap-20">
      <Paragraphy
        className="bg-gradient-to-tr from-accent to-accent-light bg-clip-text text-transparent"
        variant="p1"
      >
        “At Kune, we bring together over 20 years of combined experience across
        our Designers, Developers, and Marketing Specialists. Our team excels in
        their fields, delivering innovative and tailored solutions for every
        project.”
      </Paragraphy>
      <div>
        <h5 className="text-white">Bernardo Campos</h5>
        <Paragraphy variant="p6" className="text-white">
          CEO / Founder at Doc.Door
        </Paragraphy>
      </div>
    </div>
  </div>
)
