# BlueApp — Site institucional

Landing page estática do BlueApp. Sem build, sem dependências: é HTML, CSS e
JavaScript puro. Basta abrir o `index.html` no navegador.

```
PageWeb/
├── index.html
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/            ← coloque as imagens aqui (ver LEIA-ME.txt)
```

## Como visualizar

Abrir o `index.html` direto no navegador já funciona. Para ficar igual ao
ambiente de produção (caminhos absolutos, fontes, etc.), rode um servidor local:

```bash
npx serve .
# ou, com Python:
python -m http.server 8000
```

---

## O que você precisa preencher

Procure por `TODO` no `index.html` e no `main.js`. Em resumo:

| Onde | O quê |
|---|---|
| `assets/img/lucas.jpg` | Sua foto (ver `assets/img/LEIA-ME.txt`) |
| `assets/img/og.jpg` | Imagem 1200x630 de compartilhamento |
| Botões das lojas | Trocar `href="#"` pelos links reais da Play Store / App Store |
| Seção Equipe | Duplicar o card modelo para cada integrante |
| Redes sociais | Os `href="#"` dos ícones nos cards |
| Rodapé | Criar as páginas de Privacidade, Termos e LGPD |
| `main.js` → `MAIL_DOMAIN` | Domínio de e-mail real |
| `main.js` → `FORM_ENDPOINT` | Endpoint do formulário (opcional, veja abaixo) |
| Preços | **Todos os valores são fictícios** — ver nota abaixo |

### Preços

Os valores em `#planos` são **placeholders**: Essencial R$ 0, Família R$ 19,90,
Básico R$ 49,90, Pro R$ 99,90, Max R$ 179,90. Os nomes dos planos profissionais
(Básico/Pro/Max) seguem o que já existe no código do app.

Antes de publicar, defina os preços reais a partir do custo medido de IA por
profissional/mês (a tabela `ai_usage` do backend já registra isso por serviço).

---

## Formulário de contato

Funciona **sem backend**. Se `FORM_ENDPOINT` estiver vazio, o envio abre o
aplicativo de e-mail do visitante já preenchido.

Para receber no seu servidor ou num serviço (Formspree, Basin, Web3Forms),
preencha a constante no topo do `main.js`:

```js
var FORM_ENDPOINT = "https://formspree.io/f/SEU_ID";
```

Ele envia `POST` com JSON: `{ nome, email, perfil, mensagem }`.

### Proteção contra spam (3 camadas, sem CAPTCHA)

1. **Honeypot** — campo `website` invisível para pessoas. Se vier preenchido, é
   robô: a página finge sucesso (dar erro faz o robô tentar de novo).
2. **Desafio aritmético** — soma simples gerada a cada carregamento.
3. **Tempo mínimo** — envio em menos de 4 segundos é rejeitado.

Evitei CAPTCHA de imagem de propósito: além de exigir script de terceiros, ele
é uma barreira real para parte do público deste site.

O e-mail de contato é montado em JavaScript a partir de pedaços
(`MAIL_USER` + `MAIL_DOMAIN`), então não aparece como texto no HTML para
robôs que varrem a página atrás de endereços.

> Se o volume de spam crescer mesmo assim, o próximo passo é validar no
> servidor — proteção só no cliente pode ser contornada por quem posta direto
> no endpoint.

---

## Decisões de design

- **Paleta** herdada do app: azul `#2D7FF9` → roxo `#9A8FF0`.
- **Mockups em CSS puro** (notebook, tablet, celular): sem imagem para baixar,
  nítidos em qualquer tela e fáceis de ajustar.
- **Sem peça de quebra-cabeça.** É o símbolo mais associado ao autismo, mas
  boa parte da comunidade autista o rejeita (associação a "peça faltando").
  Usei o **infinito**, símbolo afirmativo da neurodiversidade.
- **Sem depoimentos inventados.** Não criei falsos depoimentos de clientes:
  numa página real, isso é propaganda enganosa. A seção pode ser adicionada
  quando houver relatos verdadeiros e autorizados.
- **Sem integrantes fictícios.** Só o seu card está preenchido; o segundo é um
  modelo em branco para você duplicar.
- **Acessibilidade**: navegação por teclado, `skip link`, foco visível,
  `aria` nas abas e no menu, e respeito a `prefers-reduced-motion`.
- **Aviso legal** no rodapé deixando claro que o app não faz diagnóstico nem
  substitui profissional — importante para produto de saúde.

---

## Antes de publicar

- [ ] Substituir todos os `TODO`
- [ ] Definir preços reais
- [ ] Escrever Política de Privacidade e Termos de Uso (obrigatório: a LGPD
      trata dado de saúde como **dado pessoal sensível**)
- [ ] Trocar `og:image` e a URL canônica pelo domínio real
- [ ] Comprimir as imagens
- [ ] Testar em celular real (o menu e os mockups do topo são os pontos mais
      sensíveis a tela pequena)
- [ ] Rodar o Lighthouse (Chrome DevTools) para performance e acessibilidade
