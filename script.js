
function myfunction(){
    const nav = window.document.getElementById('navbar');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else{
        nav.classList.add('active');
    }
}
function myfunction1(){
    const nav1 = window.document.getElementById('navbar1');
    if (nav1.classList.contains('active')) {
        nav1.classList.remove('active');
    } else{
        nav1.classList.add('active');
    }
}
function metamask()
{
    var url = "https://metamask.io/";
    window.location(url);
}

