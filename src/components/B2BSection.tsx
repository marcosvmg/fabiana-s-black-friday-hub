import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, FlaskConical, Bot } from "lucide-react";

const B2BSection = () => {
  const courses = [
    {
      title: "Revolução da Fisioterapia Presencial",
      description: "Torne-se um fisioterapeuta de excelência",
      icon: GraduationCap,
      link: "https://revolucaofisio.com.br/",
      featured: true,
    },
    {
      title: "PROLOEXPERT",
      description: "Domine o método de tratamento avançado",
      icon: FlaskConical,
      link: "https://proloexpert.com/",
    },
    {
      title: "Sua Mega Equipe de Assistentes (IA)",
      description: "Potencialize seu atendimento com inteligência artificial",
      icon: Bot,
      link: "https://megafisio-ia.com.br/",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm sm:text-base mb-8 sm:mb-12">
          Para Fisioterapeutas
        </div>

        <div className="grid gap-6 sm:gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className={`border-2 ${
                  course.featured
                    ? "border-accent bg-gradient-to-br from-card to-secondary/50 shadow-xl shadow-accent/20"
                    : "border-border bg-card hover:border-accent/50"
                } transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6 mb-6">
                    <div className="bg-accent/20 p-3 sm:p-4 rounded-xl">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className={`w-full ${
                      course.featured
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    } font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105`}
                  >
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      Acessar Agora
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
