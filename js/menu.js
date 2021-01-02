const menu = document.getElementById('menu');

$(document).ready(function () {
    menu.innerHTML = "<ul><li><a href='index.html'>Domov</a></li><li><a href='#'>Hry</a><ul class='submenuGames'><li><a href='#'>Denis</a></li><li><a href='#'>Kristián</a></li><li><a href='hrafilip.html'>Filip</a></li><li><a href='#'>Matúš</a></li></ul></li> <li><a href='#'>O nás</a><ul class='submenuAboutUs'><li><a href='informacie.html'>Informácie</a></li><li><a href='#'>Tabuľka</a></li></ul> </li> </ul>"
});