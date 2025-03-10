import { Code, ShoppingCart, Smartphone, Globe, BarChart, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Custom websites designed to showcase your brand and engage your audience.",
      icon: <Globe className="h-12 w-12 text-primary" />,
      features: ["Responsive Design", "SEO Optimization", "Content Management", "Analytics Integration"],
    },
    {
      title: "Web Application Development",
      description: "Powerful web applications that solve complex business problems.",
      icon: <Code className="h-12 w-12 text-primary" />,
      features: ["Custom Functionality", "User Authentication", "API Integration", "Real-time Features"],
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores that drive sales and provide seamless shopping experiences.",
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      features: ["Product Management", "Secure Payments", "Inventory Tracking", "Customer Accounts"],
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that work on iOS and Android.",
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      features: ["Native-like Experience", "Offline Functionality", "Push Notifications", "App Store Deployment"],
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing services to grow your online presence.",
      icon: <BarChart className="h-12 w-12 text-primary" />,
      features: ["SEO/SEM", "Content Strategy", "Social Media", "Email Marketing"],
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support to keep your digital products running smoothly.",
      icon: <Rocket className="h-12 w-12 text-primary" />,
      features: ["Regular Updates", "Performance Optimization", "Security Patches", "Technical Support"],
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive web development solutions to help your business thrive online
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

