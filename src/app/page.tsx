import { Header, Footer, GoldRate, GoldRateCalculator } from "compositions";
import { AllProviders } from "data";

export default function HomePage() {
  return (
    <AllProviders>
      <Header cartCount={2} />
      <main className="min-h-screen bg-gray-50">
        <GoldRate />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <GoldRateCalculator />
        </div>
      </main>
      <Footer />
    </AllProviders>
  )
}