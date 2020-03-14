fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
  .then(response => response.json())
  .then((data) => {
	let string = ""
    data.forEach((acomodacao) => {
	string += `
		<div class="card">
			<img src="${acomodacao.photo}"/>
			<p class="property_type">${acomodacao.property_type}</p>
			<p class="name">${acomodacao.name}</p>
			<p class="price"> R$ ${acomodacao.price} / noite</p>
		</div>
	`
});
	document.querySelector(".cards-div").innerHTML = string;
});



// photo: "https://a0.muscache.com/im/pictures/e6c4b347-49c7-4840-8c00-df36a2a273da.jpg?aki_policy=x_large",
// property_type: "Apartamento",
// name: "Apartment in Son Parc, wonderful views",
// price: 433