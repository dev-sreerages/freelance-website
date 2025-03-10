import { Code, Database, Layout, Layers, Server, Smartphone } from "lucide-react"

export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 mb-2" />,
      techs: ["React", "Next.js", "Vue.js", "HTML5/CSS3", "Tailwind CSS", "Material UI"],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 mb-2" />,
      techs: ["Node.js", "Express", "Django", "Ruby on Rails", "PHP/Laravel"],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 mb-2" />,
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-8 w-8 mb-2" />,
      techs: ["React Native", "Flutter", "Progressive Web Apps"],
    },
    {
      category: "DevOps",
      icon: <Layers className="h-8 w-8 mb-2" />,
      techs: ["Docker", "AWS", "Vercel", "Netlify", "CI/CD Pipelines"],
    },
    {
      category: "Languages",
      icon: <Code className="h-8 w-8 mb-2" />,
      techs: ["JavaScript", "TypeScript", "Python", "PHP", "Ruby"],
    },
  ]

  return (
    <section id="tech" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Tech Stack</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We use cutting-edge technologies to build fast, scalable, and secure applications
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-background rounded-lg border shadow-sm">
              {tech.icon}
              <h3 className="text-xl font-bold mb-3">{tech.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {tech.techs.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

