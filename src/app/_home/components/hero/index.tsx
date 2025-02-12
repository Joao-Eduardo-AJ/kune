import * as motion from 'motion/react-client'

import { Topic, Paragraphy } from '@/components'

import { ButtonPing } from './ButtonPing'
import { Customers } from './Customers'
import { useTranslation } from 'react-i18next'

export function Content() {
  return (
    <div className="w-full space-y-10">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <Topic>Available for new projects</Topic>
        <h1>
          Strategic UX/UI & Branding Agency for Tech Startups | Data-Driven Impact
        </h1>
        <Paragraphy>
          Take the first step to turn your idea into reality. Chat with us for
          10 minutes and explore simple, impactful solutions made for you.
        </Paragraphy>
      </motion.div>
      <ButtonPing />
    </div>
  )
}

export function Carousel() {
  return (
    <div>
      <Customers />
    </div>
  )
}
