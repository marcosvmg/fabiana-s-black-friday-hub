import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const EbooksSection = () => {
    const ebooks = [
        {
            title: "Protocolo para Dores Articulares",
            link: "https://loja.draartrose.com.br/checkout-dra77/",
        },
        {
            title: "Guia Completo de Suplementação",
            link: "https://loja.draartrose.com.br/checkout-dra81/",
        },
        {
            title: "Protocolo para Dores na Coluna",
            link: "https://loja.draartrose.com.br/checkout-dra75/?checkout_id=959f3170-2638-4db4-9dfc-9ee0044eee5d",
        },
        {
            title: "Tratamento para Dores no Joelho",
            link: "https://loja.draartrose.com.br/checkout-dra262/?checkout_id=faa161dc-fc13-48b9-a2b3-f75307597bf8",
        },
        {
            title: "Protocolo Anti-inflamatório Natural",
            link: "https://loja.draartrose.com.br/checkout-dra73/?checkout_id=c1ac2683-a5fc-4713-803d-1581d95fd685",
        },
    ];

    return (
        <section className="py-12 sm:py-16 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold text-accent mb-3 sm:mb-4 uppercase tracking-wide">
                        E-Books para Dores e Suplementação
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        Protocolos completos e guias especializados
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-6">
                    {ebooks.map((ebook, index) => (
                        <Button
                            key={index}
                            asChild
                            variant="outline"
                            size="lg"
                            // Adicionado 'whitespace-normal' para permitir quebra de linha e 'h-auto' para altura dinâmica
                            className="w-full justify-start text-left h-auto py-4 sm:py-6 px-4 sm:px-6 border-2 border-border hover:border-accent bg-card hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] group whitespace-normal"
                        >
                            <a
                                href={ebook.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                // 'items-start' garante que o ícone fique no topo se o texto quebrar
                                className="flex items-start gap-3 sm:gap-4 w-full"
                            >
                                <div className="bg-accent/20 p-2 sm:p-3 rounded-lg group-hover:bg-accent/30 transition-colors shrink-0">
                                    <Book className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                                </div>

                                {/* Container do título com 'flex-1' e 'min-w-0' para forçar a quebra de texto dentro do flex */}
                                <div className="flex-1 min-w-0">
                  <span className="text-base sm:text-lg font-semibold text-foreground break-words block">
                    {ebook.title}
                  </span>
                                </div>

                                {/* Botão de comprar com 'whitespace-nowrap' para nunca quebrar */}
                                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-accent transition-colors shrink-0 whitespace-nowrap pt-1">
                  Comprar →
                </span>
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EbooksSection;