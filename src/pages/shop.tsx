'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Shop() {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Our Flowers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent>
            <img src="/images/rose.jpg" alt="Red Rose" className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-medium">Red Rose Bouquet</h3>
            <p className="text-gray-600">$25.00</p>
            <Button variant="outline" size="sm" asChild>
              <a href="/product/rose-bouquet" className="text-primary">View</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent>
            <img src="/images/tulip.jpg" alt="Yellow Tulip" className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-medium">Yellow Tulip Bouquet</h3>
            <p className="text-gray-600">$22.00</p>
            <Button variant="outline" size="sm" asChild>
              <a href="/product/tulip-bouquet" className="text-primary">View</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}