---
date: 2026-06-06T00:53:06-00:00
title: "Meu Setup de Desenvolvimento"
---

Algumas pessoas recentemente vieram me abordar perguntando como atualmente eu venho programando, e bem, eu estou utilizando agentes de codificação — assim como a maioria dos desenvolvedores está.

Admito que desde o lançamento do `GPT-3.5` eu sempre fui meio receoso em utilizar LLMs para aprender a programar, mas não há como simplesmente negar uma ferramenta que de fato auxilia no aprendizado — caso saiba utilizar da maneira correta.

A mesma coisa aconteceu com agentes de codificação, inicialmente fiquei bem mais receoso do que na época com LLMs. Meu pensamento sempre era:
> "Ah, se eu utilizar um agente para codificar por mim, qual o sentido do meu trabalho?"

Mas não é bem assim que as coisas funcionam. Nosso trabalho de desenvolvedor não é apenas decorar sintaxe, escrever milhares de classes do zero, na unha, etc. nosso trabalho é muito mais do que isso, nós somos da área de exatas, nosso ponto não é memorização, é raciocínio e lógica, e é isso que devemos priorizar nessa nova era de desenvolvimento e engenharia de software.

E com esse novo "padrão" de desenvolvimento, eu decidi me adequar e não ficar para trás diante de outros desenvolvedores.

## Parte I — A Escolha de um Harness
Esse é o ponto central, o harness. Nós não temos uma tradução meio lógica para o `pt-br`, mas o harness seria como uma rédea de cavalo e o LLM seria como o próprio cavalo a ser conduzido. Normalmente nós utilizamos alguma interface web com algum modelo para sanarmos nossas dúvidas e escrever código para nós, porém ficar copiando e colando código é algo meio "arcaico" nos dias de hoje. Então o papel do nosso harness será esse, escrever código, testar código e executar diversas outras funções.

Temos uma diversidade de harness OpenSource: `opencode`, `claude-code`, `codex`, `crush`, etc.

> "Ah, mas qual é o melhor? Qual eu devo escolher?"

Tanto faz. Sinceramente, o que faz um bom desenvolvedor não é a ferramenta, mas como ele a utiliza. Eu em particular utilizo o [`Crush`](https://github.com/charmbracelet/crush), acho ele simples e prático, tem tudo o que eu preciso (gerenciamento de sessões, suporte a mcps e lsp, configuração simples).

## Parte II — O Motor: LLM
Aqui vai depender muito dos seus recursos, se você vai rodar um modelo localmente ou vai utilizar via API.

Como eu não tenho estrutura para um modelo local eu utilizo o [`OpenRouter`](https://openrouter.ai/). Eu já o utilizo desde o ano de 2025, gerencio todas minhas chaves de API (trabalho e projetos pessoais) e tenho a possibilidade de utilizar a maioria dos modelos atuais do mercado.

Atualmente meu modelo favorito é o `DeepSeek V4 Flash`, sendo ele bom e barato. Porém há outras questões, apesar de não custar o mesmo que a API do `Claude` ou `GPT`, em algum momento das sessões ele começará a custar centavos e centavos de dólares, e como sabemos: "de pouco em pouco a galinha enche o papo", mas nesse caso seu bolso começará a pedir socorro.

Mas o próprio OpenRouter disponibiliza uma solução, mas você terá que gastar ao menos $10 na plataforma. Como diz a documentação: 

> "[If you purchase at least 10 credits, your daily limit is increased to 1000 `:free` model requests per day.](https://openrouter.ai/docs/api/reference/limits)"

Então caso você queira utilizar modelos gratuitos — e ter todos seus prompts utilizados para treinamento — com requests praticamente ilimitados, você pode utilizar esse método para economizar bons dólares.

## Parte III — Configuração e Desenvolvimento
Essa parte é completamente individual, pois possivelmente seu harness, seu objetivo e forma de desenvolvimento é totalmente unilateral, então eu não vou cravar qualquer tipo de regra da "maneira certa" de se configurar seu ambiente de codificação.

Eu ainda sou um estudante e recém-inserido na área, eu utilizo um método no qual eu documento praticamente tudo o que acontece em uma sessão de desenvolvimento. Essa documentação é utilizada tanto por mim quanto para o modelo, ambos para entender o contexto de tudo o que foi — ou que será — feito na sessão atual ou em sessões posteriores.

Eu configuro meu modelo pelo próprio `AGENTS.md`, o guiando-o para o desenvolvimento de pair-programming focado no aprendizado do usuário, conforme meu [repositório](https://github.com/offmiijin/Agentic-Software-Learning).

Eu possuo alguns prompts pré-prontos que já deixo em projetos para documentar planejamento, sprints, dúvidas, etc. Como eu informei, em meu contexto é extremamente necessário pois eu estou em processo de aprendizado.


## Conclusão
Não há muito a acrescentar, meu objetivo também não é fazer um tutorial ou qualquer coisa que seja — até porque existem outras pessoas que fazem os tutoriais que você está buscando, caso queira.

Meu setup é simples e básico, nada fora do normal ou descomunal, porque sinceramente, não há necessidade alguma. Para a maioria dos desenvolvedores o simples já é o suficiente. Como eu informei anteriormente, não é sobre a ferramenta, é sobre quem opera.