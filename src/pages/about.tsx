import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function About() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">About Our Plant Shop</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">Rooted in passion for greenery, we're dedicated to bringing nature's beauty into your home.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white/70 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2018</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Founding Roots</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Started as a small backyard nursery with 12 plant varieties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white/70 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2021</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Online Bloom</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Launched e-commerce platform serving 5,000+ happy plant parents.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white/70 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2024</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Green Future</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Expanded to sustainable packaging and local plant rescue programs.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meet the Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436524717288-0bd92885fff7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Emma Green</h3>
                    <p className="text-sm text-emerald-600 font-medium">Founder & Plant Whisperer</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">20+ years nurturing rare tropicals and teaching plant parenting.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80')] bg-cover bg-center opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Liam Soil</h3>
                    <p className="text-sm text-emerald-600 font-medium">Horticulture Expert</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Soil scientist specializing in organic growing mediums.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Plant Care Philosophy</h2>
          <div type="single" collapsible defaultValue="care">
            <div value="care">
              <div className="hover:no-underline">Less is More: The Art of Plant Neglect</div>
              <div className="pt-4">Plants thrive on benign neglect. Water when soil is dry 2" deep, provide bright indirect light, and let them be. Overwatering kills more plants than all pests combined.</div>
            </div>
            <div value="light">
              <div>Light: Read the Leaves</div>
              <div className="pt-4">Leaves stretching toward light? Too dark. Yellowing or crispy tips? Too much direct sun. Rotate plants weekly for even growth.</div>
            </div>
            <div value="soil">
              <div>Soil: The Foundation</div>
              <div className="pt-4">Use well-draining soil with perlite or orchid bark. Repot every 2 years in spring. Always choose pots with drainage holes.</div>
            </div>
            <div value="community">
              <div>Community Over Competition</div>
              <div className="pt-4">Plants grouped together create their own humid microclimate. Our arrangements foster plant friendships for healthier growth.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20 pt-16 border-t border-gray-200/50 dark:border-gray-700/50">
          <Button variant="outline" size="lg" className="w-full sm:w-auto group">
            <a href="/">← Back to Home</a>
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
            <a href="/shop">Visit Shop →</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
