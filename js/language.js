/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {


    /* ========================================================
       FILE CV
       ======================================================== */

    const cvFiles = {

        en: "cv/Alessandro_Sforza_CV_EN.pdf",

        it: "cv/Alessandro_Sforza_CV_IT.pdf",

        es: "cv/Alessandro_Sforza_CV_ES.pdf"

    };


    /* ========================================================
       CAMBIO LINGUA
       ======================================================== */

    function changeLanguage(lang) {


        if (!window.translations[lang]) {
            lang = "en";
        }


        const currentTranslations =
            window.translations[lang];


        /* ----------------------------------------------------
           TESTI NORMALI
           ---------------------------------------------------- */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key =
                    element.getAttribute("data-i18n");


                if (currentTranslations[key] !== undefined) {

                    element.textContent =
                        currentTranslations[key];

                }

            });


        /* ----------------------------------------------------
           PLACEHOLDER
           ---------------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );


                if (currentTranslations[key] !== undefined) {

                    element.setAttribute(
                        "placeholder",
                        currentTranslations[key]
                    );

                }

            });


        /* ----------------------------------------------------
           ARIA LABEL
           ---------------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-aria]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-aria"
                    );


                if (currentTranslations[key] !== undefined) {

                    element.setAttribute(
                        "aria-label",
                        currentTranslations[key]
                    );

                }

            });


        /* ----------------------------------------------------
           MESSAGGI DI VALIDAZIONE
           ---------------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-validation]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-validation"
                    );


                if (currentTranslations[key] !== undefined) {

                    element.setAttribute(
                        "data-validation-required-message",
                        currentTranslations[key]
                    );

                }

            });


        /* ----------------------------------------------------
           DATA-TEXT DEI PULSANTI
           ---------------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-data-text]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-data-text"
                    );


                if (currentTranslations[key] !== undefined) {

                    element.setAttribute(
                        "data-text",
                        currentTranslations[key]
                    );

                }

            });


        /* ----------------------------------------------------
           CV CORRISPONDENTE ALLA LINGUA
           ---------------------------------------------------- */

        document
            .querySelectorAll(".cv-download")
            .forEach(function (link) {

                link.setAttribute(
                    "href",
                    cvFiles[lang]
                );

            });


        /* ----------------------------------------------------
           PULSANTE LINGUA ATTIVO
           ---------------------------------------------------- */

        document
            .querySelectorAll(".language-btn")
            .forEach(function (button) {

                button.classList.remove("active");

            });


        const activeButton =
            document.querySelector(
                '.language-btn[data-lang="' + lang + '"]'
            );


        if (activeButton) {

            activeButton.classList.add("active");

        }


        /* ----------------------------------------------------
           <html lang="">
           ---------------------------------------------------- */

        document.documentElement.lang = lang;


        /* ----------------------------------------------------
           MEMORIZZA LA LINGUA
           ---------------------------------------------------- */

        localStorage.setItem(
            "language",
            lang
        );

    }


    /* ========================================================
       CLICK EN / IT / ES
       ======================================================== */

    document
        .querySelectorAll(".language-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const selectedLanguage =
                        this.getAttribute("data-lang");

                    changeLanguage(
                        selectedLanguage
                    );

                }
            );

        });


    /* ========================================================
       LINGUA INIZIALE
       ======================================================== */

    const savedLanguage =
        localStorage.getItem("language") || "en";


    if (
        savedLanguage === "en" ||
        savedLanguage === "it" ||
        savedLanguage === "es"
    ) {

        changeLanguage(savedLanguage);

    } else {

        changeLanguage("en");

    }

});
