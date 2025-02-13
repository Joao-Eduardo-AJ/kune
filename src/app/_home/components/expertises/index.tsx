import { Paragraphy } from '@/components'
import { data } from '@/data'

import { ItemWrapper } from './item-wrapper'

export function Expertises() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 pb-5">
        <h2>Our Expertises</h2>
        <span className="material-symbols-outlined text-[32px] text-grayscale-900">
          arrow_downward
        </span>
      </div>

      <ul className="space-y-4">
        {data.expertises.map(({ content, id, symbolsIcon, title }, index) => (
          <ItemWrapper key={id} index={index}>
            <span className="material-symbols-outlined text-[40px] font-semibold lg:text-[64px]">
              {symbolsIcon}
            </span>
            <h4 className="col-span-2 lg:col-span-1">{title}</h4>
            <Paragraphy className="col-span-3 lg:col-span-1">
              {content}
            </Paragraphy>
          </ItemWrapper>
        ))}
      </ul>
    </>
  )
}
