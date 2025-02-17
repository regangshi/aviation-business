document.addEventListener("DOMContentLoaded", function () {
    // Search function
    document.querySelector("#searchButton").addEventListener("click", function () {
        let query = document.querySelector("#searchInput").value.toLowerCase();
        let sections = document.querySelectorAll("section");
        
        sections.forEach(section => {
            if (section.innerText.toLowerCase().includes(query)) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });

    // Language toggle (Example: English & Chinese)
    document.querySelector("#languageToggle").addEventListener("click", function () {
        let lang = document.documentElement.lang;
        if (lang === "en") {
            document.documentElement.lang = "zh";
            alert("Language switched to Chinese");
        } else {
            document.documentElement.lang = "en";
            alert("Language switched to English");
        }
    });
});
