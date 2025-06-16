function ismobile() {
    return /iPhone|iPad|iPod|Mobi|Android/i.test(navigator.userAgent);
};
if (ismobile()) {
    //console.log("It's mobile matey john or something");
    //const style = document.getElementById('style');
    //style.setAttribute('href', 'mobile.css');
    window.location.replace("/mobile/mobileindex.html");
}