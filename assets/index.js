const $colorbuttons = document.querySelector('.color-container');
const $headerbg = document.querySelector('header');
const $texthbg = document.querySelector('.text h2');
const $colortext= document.querySelector('.c-text');
const $desc= document.querySelector('.desc');

/*switch for each color ids just had to get the
spelings right*/ 
$colorbuttons.addEventListener('click', (event) => {
    const $color = event.target;
    const $colorId = $color.id;
    switch($colorId){
     case 'hotpink':
    $headerbg.style.background = $colorId;
    $texthbg.style.background = $colorId;
    $colortext.style.color = $colorId;
    $desc.style.color = $colorId;
    $colortext.innerHTML = $colorId;
    break;
    case 'teal':
    $headerbg.style.background = $colorId;
    $texthbg.style.background = $colorId;
    $colortext.style.color = $colorId;
    $desc.style.color = $colorId;
    $colortext.innerHTML = $colorId;
    break;
    case 'rebeccapurple':
    $headerbg.style.background = $colorId;
    $texthbg.style.background = $colorId;
    $colortext.style.color = $colorId;
    $desc.style.color = $colorId;
    $colortext.innerHTML = $colorId;
    break;
    case 'orangered':
    $headerbg.style.background = $colorId;
    $texthbg.style.background = $colorId;
    $colortext.style.color = $colorId;
    $desc.style.color = $colorId;
    $colortext.innerHTML = $colorId;
    break;
    case 'default':
    $headerbg.style.background = "";
    $texthbg.style.background ="";
    $colortext.style.color = "";
    $desc.style.color = "";
    $colortext.innerHTML = "Default";
    break;
    }
})