import { Paragraphy } from '@/components'

export function SocialProof() {
  return (
    <div className="relative space-y-10 lg:flex lg:justify-between lg:space-y-0">
      <h2 className="z-10 max-w-[300px] text-grayscale-50 xl:max-w-[400px]">
        Clients Who Trust, Results That Shine
      </h2>
      <div className="z-10 max-w-[592px] space-y-20 lg:space-y-28">
        <Paragraphy
          className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent lg:bg-gradient-to-tr"
          variant="p1"
        >
          “At Kune, we bring together over 20 years of combined experience
          across our Designers, Developers, and Marketing Specialists. Our team
          excels in their fields, delivering innovative and tailored solutions
          for every project.”
        </Paragraphy>
        <div>
          <h5 className="text-grayscale-50">Bernardo Campos</h5>
          <Paragraphy variant="p6" className="text-grayscale-50">
            CEO / Founder at Doc.Door
          </Paragraphy>
        </div>
      </div>

      <div
        aria-hidden="true"
        role="presentation"
        className="absolute -left-8 -top-10 h-[545px] w-[545px] bg-[url(/section-bg.svg)] bg-cover lg:left-0 lg:top-[168px] xl:h-[781px] xl:w-[781px]"
      />
    </div>
  )
}
