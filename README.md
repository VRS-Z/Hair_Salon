# Ayesha — Hair & Beauty Salon

Landing page para um salão de beleza fictício, com identidade visual elegante, apresentação da equipe de estilistas e destaque de promoções.

**Site publicado:** https://vrs-z.github.io/Hair_Salon/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-2ea44f?style=flat&logo=github)

---

## Sobre

Site de uma página para o salão Ayesha, apresentando a proposta de valor do negócio, os serviços oferecidos, a equipe de estilistas e uma promoção em destaque, com chamadas para agendamento ao longo de toda a página.

## Seções do site

| Seção | Conteúdo |
| --- | --- |
| Hero | Apresentação principal e oferta de boas-vindas para primeira visita |
| Serviços | Especialistas certificados, qualidade de atendimento e produtos premium |
| Sobre | Proposta de valor do salão |
| Equipe | Apresentação das estilistas e do barbeiro |
| Oferta | Promoção em destaque com chamada para agendamento |
| Rodapé | Marca, redes sociais e direitos autorais |

## Tecnologias

Site estático, sem build ou dependências de instalação:

- HTML5 semântico
- CSS3 (variáveis nativas, Grid/Flexbox, responsivo, `prefers-reduced-motion`)
- JavaScript puro (menu mobile, animações de entrada com `IntersectionObserver`)
- Sprite de ícones SVG (`<symbol>` + `<use>`)
- [Google Fonts — Playfair Display / Poppins](https://fonts.google.com/) para tipografia

## Estrutura do projeto

```
Hair_Salon/
├── assets/
│   ├── image/
│   ├── script/
│   │   └── script.js
│   └── stylesheet/
│       └── style.css
├── index.html
├── hair-salon.png
└── README.md
```

## Como rodar localmente

Não há dependências nem build — basta clonar e abrir o arquivo no navegador:

```bash
git clone https://github.com/VRS-Z/Hair_Salon.git
cd Hair_Salon
```

Depois é só abrir o `index.html` diretamente no navegador, ou servir a pasta com qualquer servidor estático, por exemplo:

```bash
npx serve .
```

## Acessibilidade e robustez

- Navegação por teclado com foco visível e link de "pular para o conteúdo"
- Suporte a `prefers-reduced-motion` para quem desativa animações no sistema
- Testado sem rolagem horizontal indevida em telas de 320px a 2560px de largura (mobile, tablet, desktop e monitores ultrawide)
- Menu mobile validado em abertura real, sem cortes de conteúdo

---

<sub>Projeto de estudo — landing page para um salão de beleza fictício.</sub>
