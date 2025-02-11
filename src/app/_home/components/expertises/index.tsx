import { Paragraphy } from '@/components'
import { HeaderSection } from '../shared/HeaderSection'
import { data } from '@/data'
import Image from 'next/image'

export const Header = () => <HeaderSection>Our Expertises</HeaderSection>

export const List = () => (
  <ul>
    {data.expertises.map(({ icon, title, content }) => (
      <li
        key={title}
        className="flex flex-col gap-12 border-b border-grayscale-300 py-6 last:border-b-0 last:pb-0 md:flex-row lg:gap-[160px] lg:py-20"
      >
        <div className="flex items-center gap-12 lg:gap-[160px]">
          <Image
            alt="list item icon"
            width={64}
            height={64}
            src={`/icons/${icon}`}
            className="h-auto w-10 lg:w-auto"
          />
          <h4 className="md:w-[294px]">{title}</h4>
        </div>
        <Paragraphy>{content}</Paragraphy>
      </li>
    ))}
  </ul>
)
