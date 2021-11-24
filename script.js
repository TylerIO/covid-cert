const lang1 = document.getElementById("lang1");
const lang2 = document.getElementById("lang2");
const cert1 = document.getElementById("cert1");
const cert2 = document.getElementById("cert2");
const cert3 = document.getElementById("cert3");
const expire1 = document.getElementById("expire1");
const expire2 = document.getElementById("expire2");
const fname1 = document.getElementById("fname1");
const fname2 = document.getElementById("fname2");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const passport1 = document.getElementById("passport1");
const passport2 = document.getElementById("passport2");
const closelink = document.getElementById("closelink");

var transliterate = function (text) {
    text = text
        .replace(/A/g, "А")
        .replace(/B/g, "Б")
        .replace(/V/g, "В")
        .replace(/G/g, "Г")
        .replace(/D/g, "Д")
        .replace(/E/g, "Е")
        .replace(/YO/g, "Ё")
        .replace(/ZH/g, "Ж")
        .replace(/Z/g, "З")
        .replace(/I/g, "И")
        .replace(/J/g, "Й")
        .replace(/K/g, "К")
        .replace(/L/g, "Л")
        .replace(/M/g, "М")
        .replace(/N/g, "Н")
        .replace(/O/g, "О")
        .replace(/P/g, "П")
        .replace(/R/g, "Р")
        .replace(/S/g, "С")
        .replace(/T/g, "Т")
        .replace(/U/g, "У")
        .replace(/F/g, "Ф")
        .replace(/H/g, "Х")
        .replace(/C/g, "Ц")
        .replace(/CH/g, "Ч")
        .replace(/SH/g, "Ш")
        .replace(/SCH/g, "Щ")
        .replace(/Y/g, "Ы")
        .replace(/EH/g, "Э")
        .replace(/YU/g, "Ю")
        .replace(/YA/g, "Я");

    return text;
};

function changeLang() {

    if (lang1.classList.contains("ru")) {
        lang1.className = "lang-image en";
        lang2.innerHTML = "ENG";
        cert1.innerHTML = "COVID-19 vaccination certificate";
        cert2.innerHTML = "Valid";
        expire1.innerHTML = "Valid until:";
        fname2.innerHTML = sessionStorage["f"];
        date1.innerHTML = "Date of birth:";
        passport1.innerHTML = "National passport:";
        closelink.innerHTML = "Close";
    } else {
        lang1.className = "lang-image ru";
        lang2.innerHTML = "RUS";
        cert1.innerHTML = "Сертификат вакцинации от COVID-19";
        cert2.innerHTML = "Действителен";
        expire1.innerHTML = "Действует до:";
        fname2.innerHTML = transliterate(sessionStorage["f"]);
        date1.innerHTML = "Дата рождения:";
        passport1.innerHTML = "Паспорт";
        closelink.innerHTML = "Закрыть";
    }
}

window.onload = function () {
    var url = new URL(window.location.href);
    var n = url.searchParams.get("n");
    var f = url.searchParams.get("f");
    var d = url.searchParams.get("d");
    var p = url.searchParams.get("p");
    if (n != null) {
        cert3.innerHTML = n.replace(new RegExp("_", "gi"), " ");
    }
    if (f != null) {
        sessionStorage["f"] = f.replace(new RegExp("_", "gi"), " ").replace(new RegExp("-", "gi"), "*");
        fname2.innerHTML = transliterate(sessionStorage["f"]);
    } else {
        sessionStorage["f"] = "F****** I** O*******";
    }
    if (d != null) {
        date2.innerHTML = d.replace(new RegExp("_", "gi"), ".");
    }
    if (p != null) {
        passport2.innerHTML = p.replace(new RegExp("_", "gi"), "** ***");
    }
    document.getElementById("start-app-loader").classList.add("hide");
}

// https://username.github.io/repo?n=1234_0000_5678_9000&f=F------_I--_O-------&d=17_11_2019&p=54_321
// Use only for informational purposes
