// Render buttonLinks/cards
const buttonLinkRender = doT.template(document.getElementById("buttonLinksTemplate").innerHTML);
const buttonLinkHtml = buttonLinkRender(
    DATA.buttonLinks
);
document.getElementsByClassName("buttonLink")[0].innerHTML = buttonLinkHtml;

// Render link-lists
const linkListRender = doT.template(document.getElementById("listLinksTemplate").innerHTML);
const linkListHtml = linkListRender(
    DATA.lists
);
document.getElementsByClassName("list__parentList")[0].innerHTML = linkListHtml;

const linkChildListRender = doT.template(document.getElementById("listLinkChildTemplate").innerHTML);
const linkChildListHtml = linkChildListRender(
    DATA.lists.model
);
document.getElementsByClassName("list__childListLinks-wrapper")[0].innerHTML = linkChildListHtml;