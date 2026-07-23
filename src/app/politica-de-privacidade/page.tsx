import type { Metadata } from "next";
import Link from "next/link";
import { ADDRESS, CNPJ, LEGAL_NAME, SOCIETY_OAB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade | MRM Advogados",
  description:
    "Saiba como o MRM Advogados coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <Link
        href="/"
        className="text-sm text-foreground/50 hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Voltar ao site
      </Link>

      <h1
        className="text-4xl font-bold mb-2"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Política de Privacidade
      </h1>
      <p className="text-sm text-foreground/50 mb-10">
        Última atualização: 21 de julho de 2026
      </p>

      <div className="prose prose-sm max-w-none space-y-8 text-foreground/80 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Quem somos</h2>
          <p>
            Este site é operado por <strong>MRM Advogados</strong>, nome utilizado por {LEGAL_NAME},
            inscrita no CNPJ sob nº {CNPJ} e registrada na OAB/MT sob nº {SOCIETY_OAB.replace("OAB/MT ", "")},
            com sede na {ADDRESS.streetAddress}, bairro {ADDRESS.neighborhood}, {ADDRESS.city}-{ADDRESS.state},
            CEP {ADDRESS.postalCode}, doravante denominada <em>Controladora</em> para fins da Lei Geral
            de Proteção de Dados (LGPD – Lei nº 13.709/2018).
          </p>
          <p className="mt-2">
            Contato do encarregado de dados:{" "}
            <a
              href="https://wa.me/5565992618251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              WhatsApp: (65) 99261-8251
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. Dados que coletamos</h2>
          <p>Coletamos apenas os dados estritamente necessários para prestação dos serviços:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Dados fornecidos voluntariamente:</strong> nome, número de
              telefone (WhatsApp) e informações sobre o caso jurídico que você
              descreve ao iniciar contato.
            </li>
            <li>
              <strong>Dados de navegação:</strong> endereço IP, tipo de
              navegador, páginas visitadas e tempo de sessão, coletados
              automaticamente por ferramentas de análise de tráfego.
            </li>
          </ul>
          <p className="mt-2">
            Não coletamos dados sensíveis (saúde, biometria, origem racial,
            convicções políticas ou religiosas) sem consentimento específico.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. Finalidade do tratamento</h2>
          <p>Seus dados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Responder à sua solicitação de atendimento jurídico;</li>
            <li>Analisar a viabilidade do seu caso;</li>
            <li>Cumprir obrigações legais e regulatórias aplicáveis à advocacia;</li>
            <li>Melhorar a experiência de navegação no site (dados agregados e anonimizados).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. Base legal</h2>
          <p>O tratamento dos seus dados se fundamenta nas seguintes bases legais da LGPD:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Consentimento (art. 7º, I):</strong> ao entrar em contato
              pelo formulário ou WhatsApp, você consente com o uso dos dados
              para atendimento.
            </li>
            <li>
              <strong>Legítimo interesse (art. 7º, IX):</strong> para análise
              de navegação e melhoria do site.
            </li>
            <li>
              <strong>Cumprimento de obrigação legal (art. 7º, II):</strong>{" "}
              quando exigido pelo Estatuto da OAB ou outras normas aplicáveis.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Compartilhamento de dados</h2>
          <p>
            Não vendemos, alugamos nem comercializamos seus dados pessoais. O
            compartilhamento ocorre apenas nas seguintes situações:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Com autoridades judiciais ou administrativas, quando exigido por lei;</li>
            <li>
              Com prestadores de serviços técnicos (hospedagem, análise de
              tráfego) sob acordos de confidencialidade e na medida mínima
              necessária.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Retenção dos dados</h2>
          <p>
            Os dados são mantidos pelo prazo necessário ao atendimento da
            finalidade que motivou sua coleta ou pelo prazo mínimo exigido pela
            legislação vigente (Estatuto da OAB, Código de Ética e Disciplina
            da OAB). Após esse período, os dados são eliminados ou anonimizados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Seus direitos (LGPD, art. 18)</h2>
          <p>Você tem direito a:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Confirmar a existência de tratamento dos seus dados;</li>
            <li>Acessar os dados que mantemos sobre você;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação dos dados;</li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Obter informações sobre com quem compartilhamos seus dados.</li>
          </ul>
          <p className="mt-2">
            Para exercer qualquer um desses direitos, entre em contato pelo{" "}
            <a
              href="https://wa.me/5565992618251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              WhatsApp: (65) 99261-8251
            </a>
            . Responderemos em até 15 dias úteis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">8. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger
            seus dados contra acesso não autorizado, perda, alteração ou
            divulgação indevida, incluindo transmissão via HTTPS e controle de
            acesso restrito.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">9. Cookies</h2>
          <p>
            Cookies e armazenamento necessários mantêm segurança e preferências. O Google Analytics
            e tecnologias de publicidade permanecem desativados até sua escolha no banner. Você pode
            recusar, aceitar ou configurar separadamente audiência e publicidade, além de alterar a
            decisão a qualquer momento em “Preferências de cookies”, no rodapé. Não enviamos a essas
            ferramentas o conteúdo da mensagem, documentos, banco, processo ou detalhes do caso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">10. Alterações nesta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. A versão mais
            recente estará sempre disponível nesta página, com a data da última
            revisão indicada no topo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">11. Contato e encarregado de dados (DPO)</h2>
          <p>
            Em caso de dúvidas sobre esta política ou sobre o tratamento dos
            seus dados, entre em contato:
          </p>
          <ul className="list-none mt-2 space-y-1">
            <li>
              <strong>Responsável:</strong> Dr. Marlon Rocha – OAB/MT 35.470
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/5565992618251"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                (65) 99261-8251
              </a>
            </li>
            <li>
              <strong>Publicidade:</strong> em conformidade com o Provimento OAB
              nº 205/2021
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
