/* =========================================
   FITCALC
   Animations + interactions
========================================= */


/* =========================================
   APPARITION DES CARTES AU SCROLL
========================================= */

const cards = document.querySelectorAll(
    ".calculator-card"
);


if (cards.length > 0) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    cards.forEach(function (card, index) {

        card.style.transitionDelay =
            (index * 0.06) + "s";

        observer.observe(card);

    });
}


/* =========================================
   FAQ
========================================= */

const faqItems =
    document.querySelectorAll(
        ".faq-container details"
    );


faqItems.forEach(function (item) {

    item.addEventListener(
        "toggle",
        function () {

            if (!item.open) {
                return;
            }


            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {

                    otherItem.removeAttribute(
                        "open"
                    );

                }

            });

        }
    );

});