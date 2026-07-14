export type StudioApp = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  screenshots: string[];
  features: string[];
  appStoreUrl?: string;
};

export const studioApps: StudioApp[] = [
  {slug:"abbo", name:"AbboBuddy", eyebrow:"ABONNEMENTEN IN ÉÉN OVERZICHT", description:"Beheer terugkerende kosten en abonnementen op één rustige plek. Zie wat eraan komt en houd grip op wat je uitgeeft.", image:"/afbeeldingen/NewsAppNewScreenshots/AbboBuddyHome.png", screenshots:["/afbeeldingen/NewsAppNewScreenshots/AbboBuddyOverview.png","/afbeeldingen/NewsAppNewScreenshots/AbboBuddyLog.png","/afbeeldingen/NewsAppNewScreenshots/AbboBuddySettings.png"], features:["Abonnementen per categorie","Overzicht per maand en jaar","Herinneringen voor komende kosten"], appStoreUrl:"https://apps.apple.com/us/app/abbobuddy/id6754507816"},
  {slug:"inmandje", name:"InMandje", eyebrow:"BOODSCHAPPEN ZONDER VERGETEN", description:"Een gedeelde boodschappenlijst die snel, overzichtelijk en prettig blijft — voor jezelf of voor een heel huishouden.", image:"/afbeeldingen/NewsAppNewScreenshots/inmandje-homescherm.png", screenshots:["/afbeeldingen/NewsAppNewScreenshots/inmandje-additem.png","/afbeeldingen/NewsAppNewScreenshots/inmandje-lijstdelen.png","/afbeeldingen/NewsAppNewScreenshots/inmandje-winkelmodus.png"], features:["Meerdere lijsten","Lijsten delen","Handige winkelmodus"]},
  {slug:"geldinzicht", name:"GeldInzicht", eyebrow:"MEER RUST IN JE GELD", description:"Krijg een helder overzicht van inkomsten, uitgaven en spaardoelen, zonder ingewikkeld financieel jargon.", image:"/afbeeldingen/NewsAppNewScreenshots/geldinzichtHomeScreen.png", screenshots:["/afbeeldingen/NewsAppNewScreenshots/geldinzichtTransacties.png","/afbeeldingen/NewsAppNewScreenshots/geldinzichRekeningOverzicht.png","/afbeeldingen/NewsAppNewScreenshots/GeldInZichtSpaardoel.png"], features:["Rekeningen en transacties","Duidelijke categorieën","Persoonlijke spaardoelen"]},
  {slug:"mijn-it-hulp", name:"Mijn IT Hulp", eyebrow:"PERSOONLIJKE IT-HULP IN JE ZAK", description:"De laagdrempelige app voor hulpvragen, opvolging en rechtstreeks contact met Vancoillie IT Hulp.", image:"/afbeeldingen/mijnithulp-iphone/ithulp1.png", screenshots:["/afbeeldingen/mijnithulp-iphone/ithulp2.png","/afbeeldingen/mijnithulp-iphone/ithulp4.png","/afbeeldingen/mijnithulp-iphone/ithulp7.png"], features:["Snel hulp aanvragen","Duidelijk je vraag uitleggen","Opvolging op één plek"], appStoreUrl:"https://apps.apple.com/us/app/mijn-it-hulp/id6761382330"},
  {slug:"taakflow", name:"TaakFlow", eyebrow:"RUST IN JE DAG", description:"Een eenvoudige manier om taken, routines en kleine doelen overzichtelijk te houden.", image:"/afbeeldingen/screenshots/taakflow1.png", screenshots:["/afbeeldingen/screenshots/taakflow2.png","/afbeeldingen/screenshots/taakflow4.png","/afbeeldingen/screenshots/taakflow6.png"], features:["Taken in een helder overzicht","Focus op wat nu telt","Eenvoudige dagelijkse flow"]},
  {slug:"brainox", name:"Brainox", eyebrow:"LEREN OP JOUW TEMPO", description:"Een speelse digitale leerervaring die overzicht, motivatie en voortgang samenbrengt.", image:"/afbeeldingen/brainox/homescreen.png", screenshots:["/afbeeldingen/brainox/brainox1.png","/afbeeldingen/brainox/brainox4.png","/afbeeldingen/brainox/brainox8.png"], features:["Duidelijke leerpaden","Motiverende voortgang","Ontworpen om rustig te leren"]},
  {slug:"stockbuddy", name:"StockBuddy", eyebrow:"MEER OVERZICHT VOOR BELEGGERS", description:"Een eigen productidee rond het eenvoudiger volgen en begrijpen van je beleggingen. StockBuddy is in ontwikkeling.", image:"/afbeeldingen/screenshotInvoxa.png", screenshots:["/afbeeldingen/screenshots/itemize1.png","/afbeeldingen/screenshots/itemize3.png","/afbeeldingen/screenshots/itemize6.png"], features:["Overzichtelijke informatie","Rustig ontworpen schermen","In ontwikkeling"]},
  {slug:"vancoillie-news", name:"Vancoillie News", eyebrow:"NIEUWS ZONDER RUIS", description:"Een heldere nieuwsapp die technologie-updates en artikels samenbrengt in een rustige mobiele ervaring.", image:"/afbeeldingen/NewsAppNewScreenshots/NewsHome.png", screenshots:["/afbeeldingen/NewsAppNewScreenshots/NewsArticles.png","/afbeeldingen/NewsAppNewScreenshots/NewsArticleDetail.png","/afbeeldingen/NewsAppNewScreenshots/NewsSettings.png"], features:["Een helder nieuwsoverzicht","Artikels rustig lezen","Instellingen op jouw tempo"]},
];

export const websitePackages = [
  {name:"Starter", price:"€249", description:"Perfect als online visitekaartje.", features:["1 pagina (onepager)","Secties voor over jou, diensten en contact","Responsief design","Basis SEO en laadsnelheid","Contactformulier"]},
  {name:"Groei", price:"€549", description:"Voor zelfstandigen die online vertrouwen willen opbouwen.", features:["3–5 pagina’s","Design op maat met visuals","Sterkere structuur en UX","Basis SEO per pagina","Google Search Console-opzet"], featured:true},
  {name:"Compleet", price:"€749", description:"Voor wie alles in één keer geregeld wil.", features:["3–5 pagina’s","Hosting en domeinnaam inbegrepen","Design op maat met visuals","SEO en Google Search Console-opzet","Snelheidsoptimalisatie","Ondersteuning na livegang"]},
];
