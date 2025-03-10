import { Check } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for small businesses and personal websites",
      price: "$999",
      features: [
        "Responsive website (up to 5 pages)",
        "Basic SEO setup",
        "Contact form",
        "Mobile-friendly design",
        "Social media integration",
        "1 month of support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and e-commerce",
      price: "$2,499",
      features: [
        "Responsive website (up to 10 pages)",
        "E-commerce functionality",
        "Advanced SEO optimization",
        "Content Management System",
        "Blog setup",
        "Payment gateway integration",
        "Google Analytics setup",
        "3 months of support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large businesses",
      price: "Custom",
      features: [
        "Custom web application",
        "Advanced functionality",
        "User authentication system",
        "Database integration",
        "API development",
        "Third-party integrations",
        "Performance optimization",
        "6 months of support",
        "Dedicated project manager",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Transparent Pricing</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Choose the perfect plan for your business needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col border shadow-sm ${plan.popular ? "border-primary shadow-md relative" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.name !== "Enterprise" && <span className="text-muted-foreground ml-1">/project</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${plan.popular ? "" : "variant-outline"}`}>
                  <Link href="#contact">{plan.name === "Enterprise" ? "Contact Us" : "Get Started"}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link href="#contact" className="text-primary font-medium">
              Contact us
            </Link>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}

