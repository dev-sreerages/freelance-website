import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transforming Ideas into Digital Reality
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Professional web development services tailored to your business needs. We build modern, responsive, and
                high-performance websites and web applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-block rounded-lg bg-background/90 px-4 py-2 backdrop-blur">
                    <p className="text-sm font-medium">Trusted by 100+ businesses</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-background/90 p-4 backdrop-blur">
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-xs text-muted-foreground">Client satisfaction</p>
                    </div>
                    <div className="rounded-lg bg-background/90 p-4 backdrop-blur">
                      <p className="text-2xl font-bold">200+</p>
                      <p className="text-xs text-muted-foreground">Projects delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

