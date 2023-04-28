$(document).ready(function () {
    fetch("http://spartacodingclub.shop/sparta_api/weather/tokyo")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        let number = data['temp'];
        $('#temp').text(number);
    });
});