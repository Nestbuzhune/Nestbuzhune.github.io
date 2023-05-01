function initMap() {
        var location = {lat:0533969, lng:9322065};
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location
        });
        var marker = new google.maps.Marker({
        position: location,
        map: map
        });
}
    function storeData(){
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        var comments = document.getElementById("comments").value;
        var data = {name: name, address: address, email: email, comments: comments};
        localStorage.setItem("contactData", JSON.stringify(data));
        alert("Your information has been stored in Local Storage.");
        return false;
}               

