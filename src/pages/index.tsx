import { Button } from '@/components/ui/button'
import { toggleCareTips, addToCart } from '@/lib/index-logic'

export function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">GreenLeaf Shop</h1>
        <div className="flex gap-4">
          <a href="/shop" className="text-sm font-medium hover:text-green-600 transition-colors">Shop</a>
          <a href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">About</a>
          <a href="/contact" className="text-sm font-medium hover:text-green-600 transition-colors">Contact</a>
        </div>
      </nav>
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">Discover Your Perfect Plant</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Bring nature indoors with our carefully curated collection of healthy, thriving plants. Easy care tips included.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">Shop All Plants</a>
            <Button variant="outline" size="lg" onClick={toggleCareTips}>Care Tips</Button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-white dark:bg-gray-800 p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Monstera Deliciosa</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">$29</p>
              <Button size="sm" onClick={addToCart}>Add to Cart</Button>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-white dark:bg-gray-800 p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fiddle Leaf Fig</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">$45</p>
              <Button size="sm" variant="outline" onClick={addToCart}>Quick Add</Button>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-white dark:bg-gray-800 p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Snake Plant</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">$19</p>
              <Button size="sm" variant="secondary" onClick={addToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Plant Care Tips</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Keep your plants thriving with these essential care tips</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div type="single" collapsible defaultValue="item-1">
            <div value="item-1">
              <div>💧 Watering Guide</div>
              <div>Water when top 1-2 inches of soil are dry. Use room temperature water and ensure pots have drainage holes. Overwatering is the #1 killer of houseplants.</div>
            </div>
            <div value="item-2">
              <div>☀️ Light Requirements</div>
              <div>Most houseplants prefer bright, indirect light. Rotate plants weekly for even growth. Low light plants like Snake Plant and ZZ Plant are great for offices.</div>
            </div>
            <div value="item-3">
              <div>🌡️️ Temperature & Humidity</div>
              <div>Ideal range: 65-85°F (18-29°C). Most plants love 40-60% humidity. Use pebble trays or humidifiers in dry winter months. Keep away from drafts and heaters.</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
        <div className="container mx-auto px-6 py-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 GreenLeaf Shop. Bringing nature to your home.</p>
        </div>
      </footer>
    </div>
  )
}
