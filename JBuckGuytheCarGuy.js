$('#fullname').focus(function(){
  let tag = $('input');
  $(this).addClass('Highlight');
});
var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function () {
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("taxRate").value);

    $("salesTax").value = "";
    $("total").value = "";

    if (isNaN(subtotal) || subtotal < 0) {
        alert("Subtotal must be a number that is zero or more!");
    } else if (isNaN(taxRate) || taxRate < 0) {
        alert("Tax Rate must be a number that is zero or more!");
    } else {
        var salesTax = subtotal * (taxRate / 100);
        salesTax = parseFloat(salesTax.toFixed(2));
        var total = subtotal + salesTax;
        $("salesTax").value = salesTax;
        $("total").value = total.toFixed(2);
    }
}
$("calculate").onclick = function(){calculate_click();};
$("subtotal").focus();
