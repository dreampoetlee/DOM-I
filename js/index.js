const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1
const ctaImg = document.getElementById(`cta-img`);
ctaImg.src = `img/header-img.png`;

const midImg = document.querySelector(`#middle-img`).src = siteContent[`main-content`][`middle-img-src`];

// Navigation
const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent.nav[`nav-item-1`];
navItems[1].textContent = siteContent.nav[`nav-item-2`];
navItems[2].textContent = siteContent.nav[`nav-item-3`];
navItems[3].textContent = siteContent.nav[`nav-item-4`];
navItems[4].textContent = siteContent.nav[`nav-item-5`];

navItems.forEach(link => {
  link.style.color = `green`;
});

// Header Section
const ctaSection = document.querySelector(`.cta-text h1`);
ctaSection.innerText = `DOM \n is \n Awesome \n Yes?`;

// Button
const btn = document.querySelector(`button`);
btn.textContent = siteContent.cta.button;

// Main Content
const contentMain = siteContent[`main-content`];

const h4Features = document.querySelectorAll(`h4`);
h4Features[0].textContent = contentMain[`features-h4`];
h4Features[1].textContent = contentMain[`about-h4`];
h4Features[2].textContent = contentMain[`services-h4`];
h4Features[3].textContent = contentMain[`product-h4`];
h4Features[4].textContent = contentMain[`vision-h4`];
h4Features[5].textContent = siteContent.contact[`contact-h4`];

const mainPar = document.querySelectorAll(`p`);
mainPar[0].textContent = contentMain[`features-content`];
mainPar[1].textContent = contentMain[`about-content`];
mainPar[2].textContent = contentMain[`services-content`];
mainPar[3].textContent = contentMain[`product-content`];
mainPar[4].textContent = contentMain[`vision-content`];

// Contact
const greatContact = siteContent.contact;

const h4Contact = document.querySelectorAll(`.contact h4`);

const contPar = document.querySelectorAll(`.contact p`);
contPar[0].innerText = `123 Way 456 Street \n Somewhere, USA`;
contPar[1].textContent = greatContact.phone;
contPar[2].textContent = greatContact.email;


// Footer
const footerSect = siteContent.footer;

const rightCopy =  document.querySelector(`footer p`);
rightCopy.textContent =  footerSect.copyright;

// Item3
const newItem1 = document.createElement(`a`);
newItem1,textContent = 'Careers';
newItem1.href = `#`;

const newItem2 = document.querySelector[`nav`];

navItems.prepend(newItem1);
navItems.appendChild(newItem2);