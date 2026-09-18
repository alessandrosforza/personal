/* ============================================================
   LIGHT / DARK MODE
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        return;
    }

    const themeIcon = themeToggle.querySelector("i");


    function applyTheme(theme) {

        if (theme === "dark") {

            document.body.classList.add("dark-mode");

            if (themeIcon) {
                themeIcon.classList.remove("fa-moon-o");
                themeIcon.classList.add("fa-sun-o");
            }

        } else {

            document.body.classList.remove("dark-mode");

            if (themeIcon) {
                themeIcon.classList.remove("fa-sun-o");
                themeIcon.classList.add("fa-moon-o");
            }

        }

    }


    /* Cerca una scelta precedente */

    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark" || savedTheme === "light") {

        applyTheme(savedTheme);

    } else {

        /*
        Se l'utente non ha mai scelto,
        usa il tema del computer/telefono.
        */

        const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;


        if (prefersDark) {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }

    }


    /* Click sul pulsante luna/sole */

    themeToggle.addEventListener("click", function () {

        const isDark =
            document.body.classList.contains("dark-mode");


        if (isDark) {

            applyTheme("light");

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            applyTheme("dark");

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });

});
