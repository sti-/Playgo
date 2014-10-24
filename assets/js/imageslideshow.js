/**
 * Created by STI on 10/17/2014.
 */
function prev(cale, id) {
    var calenoua = cale.substr(0,cale.length-7);
    document.getElementById('preview'+id).src="img/LegoSets/"+calenoua+".jpg";
};

$(".buybtn").on('click', function(){
    var selected = $(this).parent(),
        product = selected.find(".legoname").text(),
        price = selected.find(".price").text()
        buy(product, price);
});

$(".borrowbtn").on('click', function(){
    var selected = $(this).parent(),
        product = selected.find(".legoname").text(),
        price = selected.find(".price").text()
    borrow(product, price);
});

function buy(product, price) {
    $('#pop-up').addClass('show');


}

function closepopup() {
    $('#pop-up').removeClass('show');
}