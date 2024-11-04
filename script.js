const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".sidemenu");
const navBar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", (event) => {
    if (event.target.tagName === 'LI') {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

let lastScrollTop = 0;
const debounce = (func, wait) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

window.addEventListener("scroll", debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-70px";
        if (hamburger.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    } else {
        navBar.style.top = "0";
    }
    lastScrollTop = scrollTop;
}, 100));

// MISSION VISION AND QUALITY POLICY
const tablinks = document.getElementsByClassName("tab-links");    
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// LAZY LOADING
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
// Structured Data
function addStructuredData() {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kryos Cold Storage and Logistics Corp.",
        "image": "https://www.kryosph.com/images/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Lot 13-17 Blk 2, Boomtown Industrial Park, Tambobong",
            "addressLocality": "Bocaue",
            "addressRegion": "Bulacan",
            "postalCode": "3018",
            "addressCountry": "PH"
        },
        "url": "https://www.kryosph.com",
        "telephone": "+63-919-006-8804",
        "description": "Kryos Cold Storage and Logistics Corp. offers High-Quality cold storage solutions and logistics services to ensure the freshness and safety of your products."
    });
    document.head.appendChild(script);
}