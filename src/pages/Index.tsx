import ScheduleAlertBar from "@/components/ScheduleAlertBar";
import HeroSection from "@/components/HeroSection";
import B2BSection from "@/components/B2BSection";
import B2CSection from "@/components/B2CSection";
import EbooksSection from "@/components/EbooksSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <ScheduleAlertBar />
      <HeroSection />
      <B2BSection />
      <B2CSection />
      <EbooksSection />
      
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2025 Revolução da Fisioterapia. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;
