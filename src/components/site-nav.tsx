import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function SiteNav() {
  return (
    <nav className="w-full border-b border-border">
      <div className="container mx-auto flex items-center gap-2 py-3">
        <Link to="/"><Button variant="ghost" size="sm">Home</Button></Link>
        <Link to="/shop"><Button variant="ghost" size="sm">Shop</Button></Link>
        <Link to="/about"><Button variant="ghost" size="sm">About</Button></Link>
        <Link to="/contact"><Button variant="ghost" size="sm">Contact</Button></Link>
        <Link to="/cart"><Button variant="ghost" size="sm">Cart</Button></Link>
      </div>
    </nav>
  )
}
