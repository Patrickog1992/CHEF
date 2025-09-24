
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    return { id: 'not-found', imageUrl: 'https://placehold.co/600x400?text=Not+Found', description: 'Image not found', imageHint: '' };
  }
  return image;
};

const SectionWrapper = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("w-full py-12 md:py-16 lg:py-20", className)}>
    <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
      {children}
    </div>
  </section>
);

const HeroSection = () => (
  <SectionWrapper className="pt-16 md:pt-24 lg:pt-32 bg-accent/30">
    <Image
      src={getImage('logo').imageUrl}
      alt={getImage('logo').description}
      width={100}
      height={100}
      className="mx-auto mb-6 rounded-full shadow-lg"
      data-ai-hint={getImage('logo').imageHint}
    />
    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-primary">
      Receitas que encantam e surpreendem
    </h1>
    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
      AirFryer: comida quente, limpa e feita na hora. O delivery? Requentado, oleoso e ainda chega atrasado.
    </p>
    <div className="mt-8 mx-auto max-w-3xl">
       <Image
          src={getImage('hero-main').imageUrl}
          alt={getImage('hero-main').description}
          width={1200}
          height={675}
          className="rounded-xl shadow-2xl object-cover"
          data-ai-hint={getImage('hero-main').imageHint}
        />
    </div>
    <p className="mx-auto max-w-[700px] text-lg font-semibold text-primary/90 md:text-xl mt-8">
        + 300 receitas aprovadas pra AirFryer: rápidas, saborosas e direto no ponto. Pra economizar tempo, evitar delivery e comer bem todos os dias.
    </p>
  </SectionWrapper>
);

const ProblemAgitationSection = () => (
    <SectionWrapper>
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
          Você não tá cansada de pagar caro pra se arrepender depois?
        </h2>
        <div className="mt-8 text-center max-w-2xl mx-auto space-y-4 text-foreground/70 text-lg">
            <p>O delivery chega frio. A comida vem oleosa. E mesmo assim, você ainda chama isso de “praticidade”.</p>
            <p>Enquanto isso, a AirFryer que você comprou pra facilitar sua vida… segue parada.</p>
            <p className="font-semibold text-foreground/90">Mais de 5.000 mulheres já quebraram esse ciclo.</p>
            <p>Estão comendo melhor. Gastando menos. E finalmente pararam de depender de aplicativo pra se alimentar.</p>
            <p>Porque você já sabe o que não funciona: Comida cara. Gordurosa. Que pesa no estômago e na consciência.</p>
            <p>E não, não é sobre mudar a sua vida inteira. É sobre parar de repetir o que mais te cobra.</p>
            <p className="font-semibold text-primary text-xl">Comer bem. Gastar menos. Se sentir melhor.</p>
            <p className="font-bold text-foreground text-lg">Simples. Lógico. Imediato.</p>
            <p>E se você sabe disso… então a próxima escolha é sua.</p>
            <p className="text-xl font-bold text-foreground/90">Ou você age agora ou repete tudo de novo amanhã.</p>
        </div>
    </SectionWrapper>
);

const TestimonialsSection = () => (
  <SectionWrapper className="bg-accent/30">
    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
      Veja os depoimentos de quem já comprou
    </h2>
    <p className="mx-auto max-w-[700px] text-foreground/80 md:text-lg mt-2">
      Mulheres reais, resultados reais. Quem experimentou, recomenda.
    </p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[ 'testimonial-1', 'testimonial-2', 'testimonial-3' ].map((id) => {
        const image = getImage(id);
        return (
          <div key={id} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={400}
              height={800}
              className="object-contain w-full h-full"
              data-ai-hint={image.imageHint}
            />
          </div>
        );
      })}
    </div>
  </SectionWrapper>
);

const ClientCommentsSection = () => {
    const comments = [
        {
            id: 'client-1',
            name: 'Fernanda L.',
            comment: 'As receitas são incríveis! Fáceis, rápidas e deliciosas. Minha família amou e eu finalmente parei de gastar com delivery. Super recomendo!',
        },
        {
            id: 'client-2',
            name: 'Juliana P.',
            comment: 'Nunca imaginei que poderia fazer pratos tão saborosos na AirFryer. O e-book é muito prático e as dicas de marinada são fantásticas. Valeu cada centavo!',
        },
        {
            id: 'client-3',
            name: 'Camila S.',
            comment: 'Estou amando! As receitas são perfeitas para a correria do dia a dia. Comida saudável, gostosa e sem sujeira na cozinha. Mudou minha rotina!',
        },
        {
            id: 'client-4',
            name: 'Patrícia M.',
            comment: 'Simplesmente maravilhoso! As opções de cardápio me ajudaram a organizar a semana toda. É muito mais fácil comer bem assim. Indico de olhos fechados!',
        },
    ];

    return (
        <SectionWrapper>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
                Comentários dos nossos clientes:
            </h2>
            <div className="mt-8 relative max-w-3xl mx-auto">
                <Carousel opts={{ loop: true }}>
                    <CarouselContent>
                        {comments.map((comment) => (
                            <CarouselItem key={comment.id} className="md:basis-1/2 lg:basis-1/2">
                                <div className="p-1 h-full">
                                    <Card className="flex flex-col h-full text-left shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                            <Avatar className="w-16 h-16 border-2 border-primary">
                                                <AvatarImage src={getImage(comment.id).imageUrl} alt={comment.name} />
                                                <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="font-bold text-lg text-primary">{comment.name}</div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">"{comment.comment}"</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2" />
                </Carousel>
            </div>
        </SectionWrapper>
    );
};


const PromiseSection = () => (
    <SectionWrapper>
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary font-headline">
          “Mentira que foi você que fez isso... em 12 minutos?”
        </h2>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-lg mt-4">
            Você não vai sujar nada. “Não vai cansar”. E ainda vai ouvir isso.
        </p>
        <Button size="lg" className="mt-8 text-lg font-bold py-8 px-10 shadow-lg bg-green-500 hover:bg-green-600 text-white animate-pulse">
          Quero sair do ciclo agora
        </Button>
    </SectionWrapper>
);

const HowItWorksSection = () => {
    const steps = [
        {
            title: "PASSO 1: Receitas Saborosas de Air Fryer",
            description: "Você vai receber 4 cardápios prontos, com receitas de AirFryer testadas, rápidas e saborosas organizadas pra você não perder tempo pensando, nem repetindo prato. Basta abrir o celular e escolher. Literalmente, em segundos.",
            image: getImage('step-1-recipes')
        },
        {
            title: "PASSO 2: Marinadas Que Fazem Qualquer Proteína Parecer de Restaurante",
            description: "Um manual direto com as marinadas que ninguém te ensina, mas todo mundo sente o cheiro e pergunta. Economiza tempo, turbina o sabor, e transforma peito de frango comum em prato digno de elogio.",
            image: getImage('step-2-marinades')
        },
        {
            title: "PASSO 3: AirFryer no Piloto Automático",
            description: "Colocou, esqueceu, voltou... pronto. Você vai aprender a usar sua AirFryer com lógica de resultado, não só “esquentar coisa”. Enquanto muita gente ainda tá decidindo o que fazer... você já tá comendo — com a pia limpa e o ego em paz.",
            image: getImage('step-3-airfryer')
        }
    ];

    return (
        <SectionWrapper className="bg-accent/30">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
                Esses são os 3 Passos para ter comida quente, saborosa e pronta em 12 minutos
            </h2>
            <p className="mx-auto max-w-[700px] text-primary md:text-lg mt-2 font-semibold">
                Todos os Dias, Sem Fritura, Louça ou Estresse.
            </p>
            <div className="mt-12 text-left space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                           <Image
                              src={step.image.imageUrl}
                              alt={step.image.description}
                              width={600}
                              height={600}
                              className="rounded-xl shadow-lg object-cover aspect-square"
                              data-ai-hint={step.image.imageHint}
                          />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary font-headline">{step.title}</h3>
                            <p className="mt-4 text-foreground/80">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

const OfferStackSection = () => {
    const items = [
        { title: "As 300 Obras-Primas da AirFryer™", description: "O que você encontra aqui não tá no Google. São receitas reais. Testadas. Refinadas. E elogiadas por quem vive de fazer dar certo. A diferença entre “mais uma janta” e “caramba, ficou incrível” tá nessa biblioteca." },
        { title: "Cardápio Blindado: 4 Semanas Sem Estresse™", description: "Você não pensa. Você não improvisa. Você só segue, serve e ouve elogio. 4 semanas resolvidas. Comida certa, na hora certa, com orgulho no final." },
        { title: "Códigos de Marinadas™ O Sabor Invisível", description: "Frango crocante, carne no ponto e tempero que fica. No gosto, na memória, no elogio. Não é só sabor. É finalmente acertar e ouvir da boca dos outros: “isso tá perfeito.”" },
        { title: "Saladas Poderosas™: Energia e Leveza no Mesmo Prato", description: "Não é dieta. É comida de verdade, que enche, limpa e não te faz pedir desculpa depois. Você come, se sente bem e pela primeira vez, não pensa em comer outra coisa." },
        { title: "Gelados Caseiros que Encantam™ Pra Você e Pra Quem Você Ama", description: "Doces cremosos, naturais e sem culpa. Refrescam, alimentam e criam memória. Não pesam, só deixam gosto bom e o pedido: “faz de novo amanhã?”" }
    ];

    return (
        <SectionWrapper>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
                Veja tudo que você vai receber no Receitas de Chefryer
            </h2>
            <div className="mt-10 grid gap-6 max-w-3xl mx-auto">
                {items.map((item) => (
                    <Card key={item.title} className="text-left bg-background/50 border-primary/20 shadow-md hover:border-primary transition">
                        <CardContent className="p-6">
                             <h3 className="text-xl font-bold text-primary font-headline">{item.title}</h3>
                             <p className="mt-2 text-foreground/70">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

const ChecklistSection = () => {
    const points = [
        "Chega em casa exausta, abre a geladeira e suspira: mais uma vez vai ter que “dar um jeito”.",
        "Tá presa nas mesmas 3 receitas, mas não tem tempo nem saco pra testar coisa nova que dá mais louça do que resultado.",
        "Sente culpa por dar comida congelada pro filho. E sente culpa por não conseguir fazer diferente.",
        "Cozinhar virou castigo. Você só queria resolver a comida sem transformar a pia num campo de guerra.",
        "Já abriu o iFood, fechou o app, e ficou com fome e R$ 50 a menos na conta.",
        "Mesmo quando tenta fazer algo novo… parece que ninguém nota. Nenhum elogio. Nenhuma recompensa."
    ];

    return(
        <SectionWrapper className="bg-accent/30">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
                Se você se vê em 2 ou mais dessas frases… então a decisão já tá tomada. Só falta clicar.
            </h2>
            <div className="mt-8 max-w-2xl mx-auto space-y-4 text-left">
                {points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                        <p className="text-foreground/80 md:text-lg">{point}</p>
                    </div>
                ))}
            </div>
             <p className="mt-8 text-lg font-semibold text-foreground max-w-2xl mx-auto">
                O Receita de Chefryer™ não é só um produto. É a chance de você respirar, colocar comida decente na mesa e sentir pela primeira vez em muito tempo que <span className="text-primary">deu certo.</span>
            </p>
        </SectionWrapper>
    );
};

const PricingSection = ({ installmentPlan, isDuplicate = false }: { installmentPlan: string; isDuplicate?: boolean }) => {
    const bonuses = [
        { name: "As 300 Obras-Primas da AirFryer™", value: "R$97,00" },
        { name: "Cardápio Blindado: 4 Semanas Sem Estresse™", value: "R$97,00" },
        { name: "Códigos de Marinadas™ O Sabor Invisível", value: "R$77,00" },
        { name: "Saladas Poderosas™", value: "R$97,00" },
        { name: "Caderno de Ouro dos Temperos™", value: "R$87,00" },
        { name: "Gelados Caseiros que Encantam™", value: "R$64,00" }
    ];

    return (
        <SectionWrapper className={cn(isDuplicate && "bg-background", !isDuplicate && "bg-accent/30")}>
            <div className="bg-card p-6 md:p-10 rounded-xl shadow-2xl border border-primary/20 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
                    Recapitulando tudo que você vai levar hoje com a <span className="text-primary">RAINHA DA AIRFRYER</span>:
                </h2>
                <div className="mt-8 max-w-md mx-auto space-y-3 text-left">
                    {bonuses.map(bonus => (
                        <div key={bonus.name} className="flex justify-between items-center text-foreground/80">
                           <div className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-green-600 shrink-0" />
                                <span>{bonus.name}</span>
                            </div>
                           <span className="font-semibold line-through text-muted-foreground/80">{bonus.value}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-lg text-foreground/80">No total tudo isso sairia por <span className="line-through">R$509,00</span></p>
                <p className="mt-2 text-xl font-bold text-foreground">Mas hoje você leva o pacote completo por:</p>
                <div className="my-6 max-w-sm mx-auto">
                   <Image
                        src={getImage('price-image').imageUrl}
                        alt={getImage('price-image').description}
                        width={600}
                        height={150}
                        className="w-full h-auto"
                        data-ai-hint={getImage('price-image').imageHint}
                    />
                </div>
                 <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                    <p className="font-bold text-primary text-sm uppercase">ACESSO VITALÍCIO IMEDIATO</p>
                    <p className="text-sm text-foreground/70">Pagamento único. Sem mensalidades.</p>
                    <p className="text-5xl md:text-6xl font-black text-primary my-2">{installmentPlan}</p>
                    <p className="text-lg font-semibold text-foreground">ou R$24,90 à vista no Pix ou cartão</p>
                </div>
                <p className="mt-4 text-sm font-semibold text-destructive animate-pulse">Vagas com esse valor podem encerrar ainda hoje.</p>
                <Button size="lg" className="mt-6 text-xl font-bold py-8 px-12 shadow-lg bg-green-500 hover:bg-green-600 text-white animate-pulse w-full md:w-auto">
                    SIM, EU QUERO RECEBER AGORA
                </Button>
                <p className="mt-4 text-sm text-foreground/60">Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do valor.</p>
            </div>
        </SectionWrapper>
    );
};

const AuthorSection = () => (
    <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center max-w-3xl mx-auto text-left">
            <div className="md:col-span-1">
                <Image
                    src={getImage('author-suelen').imageUrl}
                    alt={getImage('author-suelen').description}
                    width={400}
                    height={400}
                    className="rounded-full aspect-square object-cover object-top shadow-xl mx-auto"
                    data-ai-hint={getImage('author-suelen').imageHint}
                />
            </div>
            <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-primary font-headline text-center md:text-left">Chef Suelen Costa</h3>
                <p className="text-lg font-semibold text-foreground/80 mt-1 text-center md:text-left">Criadora do método Receitas de Chefryer™</p>
                <div className="prose prose-lg mt-4 text-foreground/70 space-y-4">
                    <p>Formada em Gastronomia. Treinada na rotina. Forjada no caos. Especialista em derrubar a ilusão de que cozinhar bem exige tempo, talento ou vocação.</p>
                    <p>Eu não vim da TV. Eu vim da vida real.</p>
                    <p className="font-semibold text-foreground">Eu não vendo receitas. Eu vendo tempo, paz, sabor e o direito de você não se sentir culpada por estar cansada.</p>
                    <p>Sou filha de mulher que virava a noite pra garantir almoço no dia seguinte. Cresci ouvindo panela de pressão às 6h da manhã e mãe chorando baixinho na pia.</p>
                    <p>O Receitas de Chefryer™ nasceu disso.</p>
                    <p>De olhar pra mulher comum exausta, real, sem tempo e entregar um método que funciona mesmo quando ela tá no limite.</p>
                    <p>Em 12 minutos. Sem óleo. Sem louça. E sem se sentir um fracasso por não dar conta de tudo.</p>
                    <p>O Receitas de Chefryer™ não é um curso. É um sistema de libertação doméstica.</p>
                    <p>Se você acha que não tem tempo, energia ou talento… então você é exatamente pra quem eu criei isso.</p>
                    <p>Você não precisa provar mais nada pra ninguém.</p>
                    <p>Mas tá na hora de se provar que você consegue fazer diferente.</p>
                    <p>E eu vou te ajudar a fazer isso uma receita por vez.</p>
                    <p className="italic text-primary font-semibold">“Eu já estive aí. E eu não deixo ninguém ficar lá sozinha.”</p>
                </div>
            </div>
        </div>
    </SectionWrapper>
);


const FaqSection = () => {
    const faqs = [
        {
            question: "Como vou receber o material?",
            answer: "O acesso é 100% digital, imediato e vitalício. Após a confirmação do pagamento, você receberá um e-mail com todas as instruções e link para acessar seu material. Você pode ver de qualquer dispositivo: celular, tablet ou computador."
        },
        {
            question: "As receitas são difíceis de fazer?",
            answer: "De forma alguma! O método foi criado para ser o mais rápido e prático possível, com receitas testadas que funcionam. É ideal para quem tem uma rotina corrida e quer comer bem sem complicação."
        },
        {
            question: "Preciso de ingredientes caros ou difíceis de encontrar?",
            answer: "Não. Todas as receitas foram pensadas com ingredientes acessíveis que você encontra em qualquer supermercado. O objetivo é facilitar sua vida, e não complicar."
        },
        {
            question: "E se eu não gostar do produto?",
            answer: "Seu risco é zero. Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeita, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem perguntas."
        },
        {
            question: "O pagamento é seguro?",
            answer: "Sim, o pagamento é processado através da maior plataforma de produtos digitais do Brasil, com total segurança e privacidade para os seus dados."
        }
    ];

    return (
        <SectionWrapper>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
                Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto mt-8 text-left">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/70">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </SectionWrapper>
    );
};


export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <main className="flex flex-col items-center">
        <HeroSection />
        <ProblemAgitationSection />
        <TestimonialsSection />
        <ClientCommentsSection />
        <PromiseSection />
        <HowItWorksSection />
        <OfferStackSection />
        <ChecklistSection />
        <PricingSection installmentPlan="3x de R$8,89" />
        <AuthorSection />
        <PricingSection installmentPlan="6x de R$6,51" isDuplicate />
        <FaqSection />
      </main>
    </div>
  );
}

    
