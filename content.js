console.log("Chrome extension ready");

let para = document.getElementsByTagName('p');
for (elt of para) {
    elt.style['background-color'] = '#00FF00';
}