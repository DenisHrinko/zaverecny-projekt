const menu = document.getElementById('menu');

$(document).ready(function () {
    menu.innerHTML = "<ul><li><a href='index.html'>Domov</a></li><li><a href='#'>Hry</a><ul class='submenuGames'><li><a href='#'>Denis Hrinko</a></li><li><a href='#'>Kristián Špak</a></li><li><a href='#'>Hobo</a></li><li><a href='#'>Gošky</a></li></ul></li> <li><a href='#'>O nás</a><ul class='submenuAboutUs'><li><a href='#'>Informácie</a></li><li><a href='#'>Tabuľka</a></li></ul> </li> </ul>"
});