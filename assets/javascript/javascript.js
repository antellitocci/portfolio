function onImageHover(element)
{
    element.setAttribute('src', './assets/images/profile-picture.jpg');
    element.style.opacity = "0.75";
}

function onImageUnHover(element)
{
    element.setAttribute('src', './assets/images/profile-picture.png');
    element.style.opacity = "1";
}