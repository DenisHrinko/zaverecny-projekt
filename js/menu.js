const menu = document.getElementById('menu');

$(document).ready(function () {
    menu.innerHTML = "<ul><li><a href='index.html'>Domov</a></li><li><a href='#'>Hry</a><ul class='submenuGames'><li><a href='#'>Denis</a></li><li><a href='#'>Kristián</a></li><li><a href='hrafilip.html'>Filip</a></li><li><a href='#'>Matúš</a></li></ul></li> <li><a href='#'>Informácie</a><ul class='submenuAboutUs'><li><a href='informacie.html'>O nás</a></li><li><a href='#'>Tabuľka</a></li><li><a href='namesday.html'>Meniny</a></li></ul> </li> </ul>"
});