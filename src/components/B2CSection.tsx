import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const B2CSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm sm:text-base mb-8 sm:mb-12">
          Pacientes
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          Recupere Sua Qualidade de Vida
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
          Atendimento personalizado com os melhores profissionais de fisioterapia
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary/50 animate-pulse hover:animate-none w-full sm:w-auto"
        >
          <a
            href="https://api.whatsapp.com/message/VIWX4XLLNCLDA1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3"
          >
            <Calendar className="w-6 h-6" />
            Agende Sua Consulta
          </a>
        </Button>
      </div>
    </section>
  );
};

export default B2CSection;
