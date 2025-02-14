'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectPortal,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from '@radix-ui/react-select'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

type LanguageSwitcherProps = {
  footer?: boolean
}

const locales = [
  { locale: 'en', label: 'Eng' },
  { locale: 'es', label: 'Esp' },
  { locale: 'pt', label: 'Pt' }
]

export const LanguageSwitcher = ({ footer }: LanguageSwitcherProps) => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()
  const locale = locales.find(
    ({ locale }) => locale === pathName.split('/')[1]
  )?.label

  const onOpenChange = () => setOpen(prev => !prev)

  function onValueChange(newLocale: string) {
    if (locale === newLocale) return
    const path = pathName.split('/').slice(2).join('/')
    router.push(`${newLocale}/${path}`)
  }

  return (
    <Select
      open={open}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      <SelectTrigger
        aria-label="languages"
        className={`flex h-7 content-center gap-1 outline-none ${footer ? 'text-grayscale-50' : 'text-grayscale-900'}`}
      >
        <SelectValue placeholder={locale} />
        <SelectIcon>
          <span
            className={`material-symbols-outlined transition-all duration-300 ${open ? 'rotate-180' : ''}`}
          >
            stat_minus_1
          </span>
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          className="shadow-dropdown z-10 rounded-xl bg-grayscale-50 px-3 py-2 text-grayscale-700"
          position="popper"
          sideOffset={4}
        >
          <SelectViewport>
            <SelectGroup>
              {/*  <SelectLabel>languages</SelectLabel> */}
              {locales.map(item => (
                <SelectItem
                  key={item.locale}
                  value={item.locale}
                  disabled={item.label === locale}
                  className={`h-8 w-[164px] cursor-pointer px-4 py-1 font-semibold outline-none transition-colors duration-300 first-of-type:rounded-t-lg last-of-type:rounded-b-lg ${item.label === locale ? 'bg-grayscale-900 text-grayscale-100' : 'hover:bg-grayscale-100'}`}
                >
                  <SelectItemText>{item.label}</SelectItemText>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  )
}
