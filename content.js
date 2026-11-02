/* ==========================================================================
   ALL YOUR TEXT LIVES HERE. This is the only file you need to edit.

   How it works
   - Each text has a French and an English version: { fr: "...", en: "..." }
     If one is missing or left empty "", the other language is shown instead.
   - A plain "text" in quotes (no fr/en) is shown the same in both languages.
   - Keep the quotes " " and the commas , exactly as they are.
   - Need a double quote inside a text? Use ” instead, or write \"
   - New paragraph inside a text: type \n\n
   - In titles, words between ** ** get the colourful gradient.
   - Skill hover text: write a "tip" to show a bubble, leave it "" to show nothing.
   - Add a project: copy one { ... }, block in "projects", paste it, edit it.
   - Pictures and videos go in the assets folder: image: "assets/my-picture.jpg"
   ========================================================================== */
window.SITE = {
  name: "M.Khalil Ben Saïd",
  role: { fr: "Direction artistique, Branding, & design", en: "Art Direction, Branding & Design" },
  location: { fr: "Tunis", en: "Tunis" },
  logo: "Assets/K-Logo-01.png",                       // for example "assets/logo.svg". Empty = your first letter.
  defaultLanguage: "en",          // "en" or "fr"
  languages: [ { code: "fr", label: "FR" }, { code: "en", label: "EN" } ],

  links: {
    email: "khalilbensaid8@gmail.com",
    phone: "+21698784788",        // delete the text between the quotes to hide the phone button
    behance: "https://www.behance.net/khalilbensaid",
    linkedin: "https://www.linkedin.com/in/med-khalil-ben-sa%C3%AFd-20a07991/",
    cv: { fr: "Assets/Khalil-Ben-Said-CV_FR.pdf", en: "Assets/Khalil-Ben-Said-CV_EN.pdf" },   // the CV button downloads the file matching the chosen language
  },

  footer: "© 2026 Khalil Ben Saïd · Tunis",

  sections: {
    home: {
      title: { fr: "Je donne forme aux idées : **direction artistique, design graphique & web.**", en: "I give ideas form: **art direction, graphic design & web.**" },
      lead: {
        fr: "Designer orienté direction artistique. Je conçois des identités, des interfaces et des univers visuels cohérents, avec un regard marketing B2B pour que chaque création serve un objectif.",
        en: "Art-direction-minded designer creating identities, interfaces and cohesive visual worlds, with a B2B marketing perspective so every design serves a purpose."
      },
      button1: { fr: "Voir mes projets", en: "Explore my work" },
      button2: { fr: "Me contacter", en: "Get in touch" },
      chips: [
        { fr: "Direction artistique", en: "Art direction" },
        { fr: "Design graphique", en: "Graphic design" },
        { fr: "Web design", en: "Web design" },
        { fr: "Illustration & animation", en: "Illustration & animation" },
        { fr: "Marketing", en: "Marketing" }
      ]
    },

    journey: {
      kicker: { fr: "Parcours", en: "Journey" },
      title: { fr: "Un regard différent, **une logique de résultats.**", en: "A different eye, **a results-driven mindset.**" },
      text: {
        fr: "Diplômé en design d’image et titulaire d’un master en design produit, avec une décennie d’expérience (and counting), j’ai eu l’occasion de collaborer avec des équipes formidables, d’explorer différents univers créatifs et de participer à des projets de toutes sortes. Certains avaient parfaitement du sens, d’autres… beaucoup moins. Mais chacun d’entre eux m’a appris quelque chose et a contribué à façonner le designer que je suis aujourd’hui.\n\nEn parallèle, mon intérêt pour le marketing m’a amené à développer une approche qui va au-delà de l’esthétique. J’aime concevoir des créations qui attirent l’attention, transmettent le bon message et suscitent l’envie d’agir. De l’identité visuelle à la communication digitale, j’accorde autant d’importance à la manière dont un message est perçu qu’à l’impact qu’il peut générer.\n\nParce qu’au fond, un bon design ne se contente pas d’être beau : il a quelque chose à dire, un objectif à atteindre et, idéalement, des résultats à produire.",
        en: "I graduated in image design and hold a master’s degree in product design, with a decade of experience (and counting). I’ve worked with great teams, explored different creative worlds and taken part in all kinds of projects. Some made perfect sense, others… a lot less. But each one taught me something and helped shape the designer I am today.\n\nAlongside design, my interest in marketing led me to an approach that goes beyond aesthetics. I like creating work that grabs attention, delivers the right message and makes people want to act. From visual identity to digital communication, I care as much about how a message is perceived as about the impact it can have.\n\nBecause at heart, good design isn’t just pretty: it has something to say, a goal to reach and, ideally, results to deliver."
      },
      // Optional timeline. Remove the // at the start of the lines to use it, and fill in your real details.
      steps: [
        // { when: "2018 – 2022", title: "Role at Company", text: "What you did and one achievement." },
      ]
    },

    expertise: {
      kicker: { fr: "Savoir-faire", en: "Expertise" },
      title: { fr: "Concevoir, composer, **mettre en mouvement.**", en: "Conceptualize, compose, **bring ideas to life.**" },
      cards: [
        { title: { fr: "Direction artistique", en: "Art direction" }, text: { fr: "Concepts, moodboards, univers visuels et cohérence de bout en bout.", en: "Concepts, moodboards, visual worlds and end-to-end consistency." } },
        { title: { fr: "Identité visuelle", en: "Visual identity" }, text: { fr: "Logos, chartes graphiques et déclinaisons print et digitales.", en: "Logos, brand guidelines, and print and digital adaptations." } },
        { title: { fr: "Web design", en: "Web design" }, text: { fr: "Maquettes UI, landing pages et sites responsive, du wireframe à l’écran.", en: "UI design, landing pages and responsive websites, from wireframe to screen." } },
        { title: { fr: "Éditorial & supports", en: "Editorial & collateral" }, text: { fr: "Brochures, présentations, infographies et contenus réseaux sociaux.", en: "Brochures, presentations, infographics and social media content." } },
        { title: { fr: "Illustration & photo", en: "Illustration & photography" }, text: { fr: "Illustration, digital painting et photographie pour enrichir chaque projet.", en: "Illustration, digital painting and photography to enrich each project." } },
        { title: { fr: "Marketing & performance", en: "Marketing & performance" }, text: { fr: "LinkedIn Ads, HubSpot, webinaires : le design au service de la conversion.", en: "LinkedIn Ads, HubSpot, webinars: design in service of conversion." } }
      ]
    },

    projects: {
      kicker: { fr: "Projets", en: "Projects" },
      title: { fr: "Des univers visuels, **du concept à l’écran.**", en: "Visual worlds, **from concept to screen.**" },
      hint: { fr: "Faites glisser pour explorer.", en: "Drag to explore." },
      behanceText: { fr: "Tout voir sur Behance →", en: "View everything on Behance →" }
    },

    skills: {
      kicker: { fr: "Skills & tools", en: "Skills & tools" },
      title: { fr: "Skills & tools.", en: "Skills & tools." },
      lead: { fr: "Uniquement ce que je peux démontrer.", en: "Only what I can back up." },
      groups: [
        { title: { fr: "Maîtrise pratique", en: "Hands-on" }, items: [
          { name: "AI", tip: "" },
          { name: "PS", tip: "" },
          { name: "ID", tip: "" },
          { name: "After Effects", tip: "Animation & special effects." },
          { name: "Premiere Pro", tip: "Editing." },
          { name: "Adobe XD", tip: "Helps." },
          { name: "Substance", tip: "3D modeler." }
        ] },
        { title: { fr: "Expériences connexes", en: "Worked alongside" }, items: [
          { name: "LinkedIn Ads", tip: "A few projects, same team." },
          { name: { fr: "Développeurs", en: "Developers" }, tip: "Various internal and external projects." },
          { name: { fr: "Campagnes B2B", en: "B2B campaigns" }, tip: "A few projects, same team." }
        ] },
        { title: { fr: "En cours d’apprentissage", en: "Currently learning" }, items: [
          { name: "HubSpot", tip: "Discovering it." },
          { name: { fr: "Guitare", en: "Guitar" }, tip: "More like annoying whoever is unfortunate enough to listen." },
          { name: { fr: "Peinture & dessin", en: "Painting & sketching" }, tip: "My passion since forever." },
          { name: { fr: "Programmation", en: "Coding" }, tip: "I’m… trying…" },
          { name: { fr: "Psychologie & comportement humain", en: "Psychology & human behavior" }, tip: "I find it absolutely fascinating." },
          { name: { fr: "Narration visuelle", en: "Visual storytelling" }, tip: "Through shapes, colors, compositions…" },
          { name: { fr: "Techniques de survie", en: "Survival skills" }, tip: "In case of a zombie apocalypse or an AI Outbreak." },
          { name: { fr: "L’art d’apprendre", en: "The art of learning" }, tip: "I’m thirsty in this regard." }
        ], note: { fr: "…et tout ce que je pensais avoir déjà appris.", en: "…and everything I thought I had already learnt." } }
      ]
    },

    contact: {
      kicker: { fr: "Contact", en: "Contact" },
      title: { fr: "Créons quelque chose **qui marque.**", en: "Let’s create something **memorable.**" },
      lead: { fr: "Un projet, une collaboration, un poste ? Écrivez-moi.", en: "A project, a collaboration, a role? Drop me a line." }
    }
  },

  /* PROJECTS. Replace the examples with your own. image / video / link are optional. */
  
projects: [
  {
    title: "QAVerse",
    tag: { fr: "Branding & Promotion", en: "Branding & Promotion" },
    summary: {
      fr: "Branding, campagne sur les réseaux sociaux, SaaS vidéo, UI Design",
      en: "Brand identity, social media campaign, SaaS Video, UI Design."
    },
    description: {
      fr: "Création de l'identité visuelle, le branding, conception de la plateforme, création de la vidéo SaaS, teasing et campagne réseaux sociaux",
      en: "Creating the visual identity & brand, designing the platform, SaaS video creation, teasing and social media campaign"
    },
    role: { fr: "Branding & identité, Promotion", en: "Branding & identity, Promotion" },
    year: "2025",
    image: "Assets/QA_Verse_Logo-03.png",
    video: "https://www.youtube.com/watch?v=fwsrXZ-uRWA",
    link: "https://www.qaverse.ai/",
    fit: "contain",
    cover: "Assets/QA_Verse_Logo-03.png",
    company: "Focus",
    blocks: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=fwsrXZ-uRWA",
        caption: { fr: "SaaS, QAVerse", en: "SaaS, QAVerse" }
      },
      { type: "heading", text: { fr: "La portée", en: "The Scope" } },
      {
        type: "text",
        text: {
          fr: "Création de l'identité visuelle, le branding, conception de la plateforme, création de la vidéo SaaS, teasing et campagne réseaux sociaux",
          en: "Creating the visual identity & brand, designing the platform, SaaS video creation, teasing and social media campaign"
        }
      },
      {
        type: "bento",
        items: [
          { src: "Assets/QAV_PTLD.jpg", size: "tall" },
          { src: "Assets/QAV_SMPC.png" },
          { src: "", size: "tall" },
          {
            color: "#6CCFF6",
            text: {
              fr: "Plateforme d'Automatisation QA Propulsée par l'IAn",
              en: "AI-Powered QA Automation Platform"
            },
            size: "small"
          }
        ]
      },
      {
        type: "link",
        url: "https://www.qaverse.ai/",
        label: { fr: "Voir le site", en: "Visit the website" }
      }
    ]
  },

    {
    title: "FOCUS Corporation",
    tag: { fr: "Identité de marque, Marketing, Direction Artistique, Web & UI Design, Videography", en: "Brand Identity, Marketing, Art Direction, Web & UI Design, Videography" },
    summary: {
      fr: "Branding, campagnes sur les réseaux sociaux, Création de Vidéos, UI/UX Design",
      en: "Brand identity, social media campaign, SaaS Video, UI Design."
    },
    description: {
      fr: "Création de l'identité visuelle, le branding, conception de la plateforme, création de la vidéo SaaS, teasing et campagne réseaux sociaux",
      en: "Creating the visual identity & brand, designing the platform, SaaS video creation, teasing and social media campaign"
    },
    role: { fr: "Branding & identité, Promotion", en: "Branding & identity, Promotion" },
    year: "2019-Today",
    image: "Assets/Logo Focus [PNG]_4.png",
    video: "",
    link: "https://focus-corporation.com/",
    fit: "contain",
    cover: "Assets/Logo Focus [PNG]_4.png",
    company: "Focus Corporation",
    blocks: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=fwsrXZ-uRWA",
        caption: { fr: "SaaS, QAVerse", en: "SaaS, QAVerse" }
      },
      { type: "heading", text: { fr: "La portée", en: "The Scope" } },
      {
        type: "text",
        text: {
          fr: "Création de l'identité visuelle, le branding, conception de la plateforme, création de la vidéo SaaS, teasing et campagne réseaux sociaux",
          en: "Creating the visual identity & brand, designing the platform, SaaS video creation, teasing and social media campaign"
        }
      },
      {
        type: "bento",
        items: [
          { src: "Assets/F0SM-01.png", size: "tall" },
          { src: "Assets/f.jpg" },
          { src: "Assets/F0SM-01.png", size: "tall" },
          { src: "Assets/F0P-01-02.pngg", size: "tall" },
          {
            color: "#6CCFF6",
            text: {
              fr: "Plateforme d'Automatisation QA Propulsée par l'IAn",
              en: "AI-Powered QA Automation Platform"
            },
            size: "small"
          }
        ]
      },
      {
        type: "link",
        url: "https://focus-corporation.com",
        label: { fr: "Voir le site", en: "Visit the website" }
      }
    ]
  },
   
  {
    title: "LogoFolio",
    tag: { fr: "Identité visuelle", en: "Visual identity" },
    summary: { fr: "Logos & identités", en: "Logos & Identities" },
    description: { fr: "Identités visuelles", en: "Visual Identities" },
    role: { fr: "Design & Direction Artistique", en: "Design & Art Direction" },
    year: "2013-2026",
    image: "Assets/LogoFolio cover-01.jpg",
    video: "",
    link: "",
    blocks: [
      { type: "heading", text: { fr: "Logos & identités", en: "Logos & Identities" } },
      {
        type: "text",
        text: {
          fr: "Création et conception de logos et identités visuelles pour différents projets",
          en: "Creation and design of logos and visual identities for different projects"
        }
      },
      {
        type: "bento",
        items: [
          { src: "Assets/Asset 4.png", size: "wide" },
          { src: "Assets/Logo Folio-01.jpg", size: "tall" },
          { src: "Assets/Asset 9.png", size: "big" },
          { src: "Assets/Asset 11.png" }
        ]
      }
    ]
  },

  {
    title: "Branding",
    tag: { fr: "Branding - Art Direction", en: "Branding - Art Direction" },
    summary: { fr: "Conception et Design d'identités visuelles et images de marques.", en: "Design and conception of visual identities and brand images" },
    description: {
      fr: "Conception et Design d'identités visuelles et images de marques",
      en: "Design and conception of visual identities and brand images"
    },
    role: { fr: "Direction artistique", en: "Art direction" },
    year: "2014-2026",
    image: "",
    video: "",
    link: "",
         blocks: [
      { type: "heading", text: { fr: "Logos & identités", en: "Logos & Identities" } },
      {
        type: "text",
        text: {
          fr: "Création et conception de logos et identités visuelles pour différents projets",
          en: "Creation and design of logos and visual identities for different projects"
        }
      },
      {
        type: "bento",
        items: [
          { src: "Assets/Others-01.png", size: "tall" },
          { src: "Assets/IT INCEPTOR-01.png", size: "tall" },
          { src: "Assets/Alia-01.png", size: "tall" },
          { src: "Assets/Fly-01-01.png" }
        ]
      }
    ]
  },
  {
    title: "Packagings",
    tag: { fr: "Design Produit", en: "Product Design" },
    summary: { fr: "Conception et Design Packaging.", en: "Packaging Design." },
    image: "Assets/Product Design.jpg",
    fit: "contain",
    cover: "",
    company: "Diverse",
    role: { fr: "Direction artistique", en: "Art direction" },
    year: "2014-2026",
    blocks: [
      { type: "heading", text: { fr: "Le brief", en: "The brief" } },
      {
        type: "text",
        text: {
          fr: "Conception & réalisation des packagings, identités et univers graphique",
          en: "Designing packagings, identities & graphic universe"
        }
      },
      {
        type: "bento",
        items: [
          { src: "Assets/Alia-01.png", size: "tall" },
          { src: "Assets/P-Asset-1.png" },
          { src: "Assets/D-Asset-1.png", size: "wide" }
        ]
      }
    ]
  }
],


  /* Small interface texts (menu, buttons). You rarely need to change these. */
  ui: {
    hint: { fr: "Touchez ou faites défiler", en: "Tap or scroll" },
    nav: {
      home: { fr: "Accueil", en: "Home" }, journey: { fr: "Parcours", en: "Journey" }, expertise: { fr: "Savoir-faire", en: "Expertise" },
      projects: { fr: "Projets", en: "Projects" }, skills: { fr: "Skills", en: "Skills" }, contact: { fr: "Contact", en: "Contact" }
    },
    buttons: {
      email: { fr: "Envoyer un signal ↗", en: "Send a signal ↗" },
      phone: { fr: "Faire sonner le téléphone ↗", en: "Make the phone ring ↗" },
      behance: { fr: "Explorer Behance ↗", en: "Explore Behance ↗" },
      linkedin: { fr: "Me retrouver sur LinkedIn ↗", en: "Connect on LinkedIn ↗" },
      cv: { fr: "Télécharger le CV (PDF) ↓", en: "Download CV (PDF) ↓" }
    },
    viewProject: { fr: "Voir le projet", en: "View project" },
    openLink: { fr: "Ouvrir le projet", en: "Open the project" },
    mediaSoon: { fr: "Image à venir", en: "Image coming soon" }
  }
};
