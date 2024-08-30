
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function openTab(evt, tabName) {
  
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.getElementById("defaultOpen").click();


const translations = {
    swedish: {
        about: "OM WEBBPLATSEN",
        info: "den senaste informationen från ccpedigrees",
        importantNotice: "Viktig information",
        importantDate: "07.04.2019",
        importantText: [
            "Från och med maj 2019 är det Chinese Crested Club Sverige som äger och driver Chinesecrested.no.",
            "Vår ambition var att säkra alla funktioner, åtgärda alla fel och självklart förbättra allt.",
            "Tyvärr visar det sig att det inte är så enkelt. Sidan behöver byggas om helt i modern kod, och det kommer att ta lite tid.",
            "Kontakt: <a href='mailto:pr@ccclub.se'>pr@ccclub.se</a>"
        ],
        latestEventsHeader: "Senaste händelser",
        latestEventsText: "I början av maj utsattes databasen för en hackerattack med utpressningskrav. Vi har återställt till en äldre backup och ökat säkerheten på servern så detta inte ska kunna hända igen.",
        rebuildingInfo: "Vi bygger om och designar en ny modern upplevelse.",
        rebuildingList: [
            "- Valpannonser",
            "- Flyttningar",
            "- Nyheter",
            "- Kennelsidor"
        ],
        contactText: "Om du har problem eller idéer, maila till <a href='mailto:support@ccclub.se'>support@ccclub.se</a>",
        footerHome: "Hem",
        footerAbout: "Om",
        footerHelp: "Hjälp",
        footerAdvertise: "Annonsera",
        footerLink: "Länka till oss",
        footerContact: "Kontakta oss",
        terms: "Användarvillkor",
        tabs: {
            articles: "Artiklar",
            gallery: "Galleri",
            register: "Register",
            directory: "Directory"
        },
        tabContent: {
            articlesHeader: "Artiklar",
            articlesText: "Här kan du läsa olika artiklar om kinesisk nakenhund.",
            galleryHeader: "Galleri",
            registerHeader: "Register",
            registerText: "Stamtavlor och registrering av kinesisk nakenhund.",
            directoryHeader: "Directory",
            directoryText: "Här hittar du en uppfödarregister för kinesisk nakenhund."
        },
        tabbedGallery: {
            header: "INFO",
            description: "CCPedigrees.se är en sida dedikerad till rasen Chinese Crested Dog. Här kan du lära dig mer om rasen i våra artiklar, studera stamtavlor i den största databasen på nätet för rasen, hitta uppfödare i vårt uppfödarregister eller bara njut av alla tusentals bilder på rasen."
        }
    },
    norwegian: {
        about: "OM NETTSTEDET",
        info: "den nyeste informasjonen fra ccpedigrees",
        importantNotice: "Viktig informasjon",
        importantDate: "07.04.2019",
        importantText: [
            "Fra og med mai 2019 er det Chinese Crested Club Norge som eier og driver Chinesecrested.no.",
            "Vår ambisjon var å sikre alle funksjoner, rette alle feil og selvfølgelig forbedre alt.",
            "Dessverre viser det seg at det ikke er så enkelt. Siden må bygges helt om i moderne kode, og det vil ta litt tid.",
            "Kontakt: <a href='mailto:pr@ccclub.se'>pr@ccclub.se</a>"
        ],
        latestEventsHeader: "Siste hendelser",
        latestEventsText: "I begynnelsen av mai ble databasen utsatt for et hackerangrep med utpressingskrav. Vi har gjenopprettet til en eldre sikkerhetskopi og økt sikkerheten på serveren.",
        rebuildingInfo: "Vi bygger om og designer en ny moderne opplevelse.",
        rebuildingList: [
            "- Valpeannonser",
            "- Flyttinger",
            "- Nyheter",
            "- Kennelsider"
        ],
        contactText: "Om du har problemer eller ideer, send e-post til <a href='mailto:support@ccclub.se'>support@ccclub.se</a>",
        footerHome: "Hjem",
        footerAbout: "Om",
        footerHelp: "Hjelp",
        footerAdvertise: "Annonser",
        footerLink: "Lenke til oss",
        footerContact: "Kontakt oss",
        terms: "Brukervilkår",
        tabs: {
            articles: "Artikler",
            gallery: "Galleri",
            register: "Register",
            directory: "Oppdretterregister"
        },
        tabContent: {
            articlesHeader: "Artikler",
            articlesText: "Her kan du lese forskjellige artikler om kinesisk nakenhund.",
            galleryHeader: "Galleri",
            registerHeader: "Register",
            registerText: "Stamtavler og registrering av kinesisk nakenhund.",
            directoryHeader: "Oppdretterregister",
            directoryText: "Her finner du en oppdretterregister for kinesisk nakenhund."
        },
        tabbedGallery: {
            header: "INFO",
            description: "CCPedigrees.no er en side dedikert til rasen Chinese Crested Dog. Her kan du lære mer om rasen i våre artikler, studere stamtavler i den største databasen på nettet for rasen, finne oppdrettere i vårt oppdretterregister eller bare nyte alle tusenvis av bilder av rasen."
        }
    },
    english: {
        about: "ABOUT THE WEBSITE",
        info: "the latest information from ccpedigrees",
        importantNotice: "Important Information",
        importantDate: "07.04.2019",
        importantText: [
            "As of May 2019, the Chinese Crested Club Sweden owns and operates Chinesecrested.no.",
            "Our ambition was to secure all functions, fix all bugs, and of course, improve everything.",
            "Unfortunately, it turns out it is not that simple. The site needs to be completely rebuilt in modern code, and it will take some time.",
            "Contact: <a href='mailto:pr@ccclub.se'>pr@ccclub.se</a>"
        ],
        latestEventsHeader: "Latest Events",
        latestEventsText: "In early May, the database was subjected to a hacker attack with extortion demands. We have restored to an older backup and increased the security on the server.",
        rebuildingInfo: "We are rebuilding and designing a new modern experience.",
        rebuildingList: [
            "- Puppy Ads",
            "- Transfers",
            "- News",
            "- Kennel Pages"
        ],
        contactText: "If you have problems or ideas, email us at <a href='mailto:support@ccclub.se'>support@ccclub.se</a>",
        footerHome: "Home",
        footerAbout: "About",
        footerHelp: "Help",
        footerAdvertise: "Advertise",
        footerLink: "Link to Us",
        footerContact: "Contact Us",
        terms: "Terms of Service",
        tabs: {
            articles: "Articles",
            gallery: "Gallery",
            register: "Register",
            directory: "Directory"
        },
        tabContent: {
            articlesHeader: "Articles",
            articlesText: "Here you can read various articles about the Chinese Crested Dog.",
            galleryHeader: "Gallery",
            registerHeader: "Register",
            registerText: "Pedigrees and registration of Chinese Crested Dogs.",
            directoryHeader: "Directory",
            directoryText: "Here you find a breeder directory for Chinese Crested Dogs."
        },
        tabbedGallery: {
            header: "INFO",
            description: "CCPedigrees.se is a site dedicated to the Chinese Crested Dog breed. Here you can learn more about the breed in our articles, study pedigrees in the largest database online for the breed, find breeders in our breeder directory, or simply enjoy the thousands of images of the breed."
        }
    }
};


function changeLanguage(language) {
    const lang = translations[language];

 
    document.querySelector(".about-site h3").textContent = lang.about;
    document.querySelector(".about-site p").textContent = lang.info;

    const importantNoticeElement = document.querySelector(".important-notice h4");
    importantNoticeElement.innerHTML = `${lang.importantNotice} <br><span>${lang.importantDate}</span>`;
    document.querySelector(".important-notice p").innerHTML = lang.importantText.join("<br>");

    document.querySelector(".latest-events h3").textContent = lang.latestEventsHeader;
    document.querySelector(".latest-events .event-description").textContent = lang.latestEventsText;

    document.querySelector(".rebuilding-info h3").textContent = lang.rebuildingInfo;
    document.querySelector(".rebuilding-info ul").innerHTML = lang.rebuildingList.map(item => `<li>${item}</li>`).join("");
    document.querySelector(".rebuilding-info p").innerHTML = lang.contactText;

    document.querySelector(".tabbed-gallery h4").textContent = lang.tabbedGallery.header;
    document.querySelector(".tabbed-gallery p").textContent = lang.tabbedGallery.description;

   
    const navLinks = document.querySelectorAll('.main-nav li a');
    if (navLinks.length >= 3) {
        navLinks[0].textContent = lang.tabs.articles;
        navLinks[1].textContent = lang.tabs.gallery;
        navLinks[2].textContent = lang.tabs.register;
        if (navLinks[3]) {
            navLinks[3].textContent = lang.tabs.directory || ""; 
        }
    }


    document.querySelector(".breadcrumb p").textContent = lang.breadcrumb || "You are here: Home"; 


    const topBarLinks = document.querySelectorAll(".left-links a");
    if (topBarLinks.length >= 3) {
        topBarLinks[0].textContent = lang.footerAbout;
        topBarLinks[1].textContent = lang.footerHelp;
        topBarLinks[2].textContent = lang.footerContact;
    }

   
    const footerLinks = document.querySelectorAll("footer .footer-nav a");
    if (footerLinks.length >= 6) {
        footerLinks[0].textContent = lang.footerHome;
        footerLinks[1].textContent = lang.footerAbout;
        footerLinks[2].textContent = lang.footerHelp;
        footerLinks[3].textContent = lang.footerAdvertise;
        footerLinks[4].textContent = lang.footerLink;
        footerLinks[5].textContent = lang.footerContact;
    }

    document.querySelector("footer p a").textContent = lang.terms;

    document.getElementById("Artiklar").querySelector('h3').textContent = lang.tabContent.articlesHeader;
    document.getElementById("Artiklar").querySelector('p').textContent = lang.tabContent.articlesText;

    document.getElementById("Gallery").querySelector('h3').textContent = lang.tabContent.galleryHeader;

    document.getElementById("Registry").querySelector('h3').textContent = lang.tabContent.registerHeader;
    document.getElementById("Registry").querySelector('p').textContent = lang.tabContent.registerText;

    document.getElementById("Directory").querySelector('h3').textContent = lang.tabContent.directoryHeader;
    document.getElementById("Directory").querySelector('p').textContent = lang.tabContent.directoryText;


    document.querySelector(".tablinks.active")?.click();
}


document.getElementById("swedish").addEventListener("click", () => changeLanguage("swedish"));
document.getElementById("norwegian").addEventListener("click", () => changeLanguage("norwegian"));
document.getElementById("english").addEventListener("click", () => changeLanguage("english"));

