import { Button } from '@/app/_shared'
import { Logo } from './component.logo'

export const Header = () => (
  <header className="bg-grayscale-100 px-7 py-3 xl:px-28 xl:py-6">
    <div className="container flex justify-between">
      <Logo />
      <Button>Book a Call</Button>
    </div>
  </header>
)
