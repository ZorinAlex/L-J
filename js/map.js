
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.4423195, lng: 30.50771201},
        zoom: 15,
        disableDefaultUI: true
    });
    var contentString = '<div id="content">'+
        '<p><b>L&J </b> улица Тарасовская 14 офис 1А</p>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: {lat: 50.43972641, lng: 30.50754571},
        map: map,
        title: 'Мы тут!'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
var comments = ["Помогли снять искусственно созданную задолженность","Благодаря Вам я вышел из тюрьмы","За умеренную плату вытащили братана - не забуду","Уважуха кенты всем рассказал на зоне про вас - клиентов море"];
var counter = 0;

function change(click_direction) {

    var max_counter = comments.length-1;
    var element = document.getElementById('active');
    if(click_direction=="right"){
        counter++;
        if(counter>max_counter){
            counter = 0;
        }
    }else{
        counter--;
        if(counter<0){
            counter=max_counter;
        }
    }
    element.style.color="#f4f3f3";

    element.addEventListener('transitionend', function() {
        element.style.color="black";
    });
    element.addEventListener('transitionend', function() {
        element.innerHTML = comments[counter];
    });

}



