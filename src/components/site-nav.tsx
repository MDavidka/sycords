import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function SiteNav() {
  return (
    <nav className="w-full border-b border-border">
      <div className="container mx-auto flex items-center gap-2 py-3">
        <Link to="/"><Button variant="ghost" size="sm">Home</Button></Link>
        <Link to="/features"><Button variant="ghost" size="sm">Features</Button></Link>
        <Link to="/pricing"><Button variant="ghost" size="sm">Pricing</Button></Link>
        <Link to="/docs"><Button variant="ghost" size="sm">Documentation</Button></Link>
        <Link to="/contact"><Button variant="ghost" size="sm">Contact</Button></Link>
      </div>
    </nav>
  )
}
