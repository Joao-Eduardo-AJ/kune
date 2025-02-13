import Image from 'next/image'

import { Paragraphy } from '@/components'
import { data } from '@/data'

export function WorkStyle() {
  return (
    <>
      <div className="space-y-6 lg:flex lg:justify-between lg:space-y-0">
        <h4>Experience That Delivers Results</h4>
        <Paragraphy variant="p4" className="lg:max-w-[488px]">
          At Kune, we believe that every project is unique and deserves a
          customized approach. That’s why our process is built on three key
          pillars: collaboration, innovation, and results.
        </Paragraphy>
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {data.working.map(({ content, id, symbolsIcon, title }) => (
          <article
            key={id}
            className="mx-auto w-full space-y-36 rounded-xl bg-grayscale-50 p-8 lg:space-y-60"
          >
            <div className="inline-flex rounded-2xl bg-grayscale-100 p-7">
              <Image
                alt="card icon"
                width={40}
                height={40}
                src={`/icons/${symbolsIcon}`}
              />
            </div>
            <div className="space-y-6">
              <h5>{title}</h5>
              <Paragraphy variant="p4">{content}</Paragraphy>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
