function applyDiscount() {
	const amount = document.getElementById("amount").value;
	const discountCode = document.getElementById("discount-code").value;
	let total = amount;
	switch (discountCode) {
		case "SAVE10":
			total = amount * 0.9;
			break;
		case "SAVE20":
			total = amount * 0.8;
			break;
        case "SAVE30":
            total = amount * 0.7;
            break;   
		default:
			alert("Invalid discount code");
			break;
	}
	document.getElementById("total").value = total;
}

const amount = document.getElementById("amount");
amount.textContent = "#";

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	window.location.href = "success.html";
	alert("Payment done");
});
