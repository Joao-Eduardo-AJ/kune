import { twJoin } from 'tailwind-merge'

import { Paragraphy } from '@/components'

import { questions } from './questions'

export function FAQ() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 pb-5">
        <h2>Are there any questions left?</h2>
        <span className="material-symbols-outlined text-[32px] text-grayscale-900">
          arrow_downward
        </span>
      </div>

      <ul>
        {questions.map(({ content, title }, index) => (
          <li
            key={title}
            className="group flex items-start border-b px-4 py-10"
          >
            <Paragraphy
              className="text-grayscale-500 md:leading-8 xl:leading-10"
              variant="p1"
            >
              {`0${index + 1}`}
            </Paragraphy>

            <div
              className={twJoin(
                'ml-6 mr-3 transition-all duration-300 group-hover:space-y-6',
                'md ml-20'
              )}
            >
              <h5>{title}</h5>
              <Paragraphy
                variant="p3"
                className={twJoin(
                  'max-h-0 overflow-hidden transition-all duration-300',
                  'group-hover:max-h-[500px]'
                )}
              >
                {content}
              </Paragraphy>
            </div>

            <span className="plus-button relative h-6 w-6 shrink-0" />
          </li>
        ))}
      </ul>
    </>
  )
}
