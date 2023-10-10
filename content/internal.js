let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
	document.querySelector("body").classList.toggle("active");
})

function handleInternal() {
	var currentUrl = window.location.href;
	if (currentUrl.includes("styleGuides")) {
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - EN/VTEXLocalizationStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("localization")) {
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - EN/VTEXLocalizationStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("marketing")) {
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - EN/VTEXWritingStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("glossaries")) {
		document.getElementById("main-frame").src = ""; //temporary link
		// expandItem("glossaries");
	}
	else if (currentUrl.includes("reviewLogs")) {
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - EN/VTEXAdminstringstandardizationinEnglish.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("translationMemories")) {
		document.getElementById("main-frame").src = ""; //temporary link
		expandItem("translationMemories");
	}
}
handleInternal(); //Calling function as soon as the internal page is loaded so it is populated with the correspondent card content.

function expandItem(id) {
	if (id == "styleGuides") {
		expandStyleGuides();
	}
	else if (id == "reviewLogs") {
		expandReviewLogs();
	}
	else if (id == "glossaries") {
		expandGlossaries();
	}
	else if (id == "translationMemories") {
		expandTranslationMemories()
	}
}

function expandStyleGuides() {
	let item = document.getElementById("styleGuides");
	let list = item.querySelector("ul");
	let icon = document.querySelector("#collapseStyleGuides");
  
	if (list) {
	  item.removeChild(list);
	  icon.textContent = "expand_more";
	} else {
	  icon.textContent = "expand_less";
	  list = document.createElement("ul");
  
	  let items = [
		"EN Localization",
		"ES Localization",
		"PT Localization",
		"EN Marketing",
		"ES Marketing",
		"PT Marketing",
	  ];
  
	  items.forEach((text) => {
		let listItem = document.createElement("li");
		listItem.innerText = text;
		list.appendChild(listItem);
	  });
  
	  list.style.fontWeight = "normal"; // Set font weight for the entire list
	  item.appendChild(list);
	}
  }
  

function expandReviewLogs() {
	let item = document.getElementById("reviewLogs");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseReviewLogs");
	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more"
	}
	else {
		button.textContent = "expand_less";
		list = document.createElement("ul");
		let listItem1 = document.createElement("li");
		listItem1.innerText = "EN Admin Standardization";
		let listItem2 = document.createElement("li");
		listItem2.innerText = "ES Admin Standardization";
		let listItem3 = document.createElement("li");
		listItem3.innerText = "PT Admin Standardization";
		list.appendChild(listItem1);
		list.appendChild(listItem2);
		list.appendChild(listItem3);
		item.appendChild(list);
	}
}
function expandGlossaries() {
	let item = document.getElementById("glossaries");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseGlossaries");
	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	}
	else {
		button.textContent = "expand_less";
		list = document.createElement("ul");
		let listItem1 = document.createElement("li");
		listItem1.innerText = "Item 1";
		let listItem2 = document.createElement("li");
		listItem2.innerText = "Item 2";
		let listItem3 = document.createElement("li");
		listItem3.innerText = "Item 3";
		list.appendChild(listItem1);
		list.appendChild(listItem2);
		list.appendChild(listItem3);
		item.appendChild(list);
	}
}
function expandTranslationMemories() {
	let item = document.getElementById("translationMemories");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseTranslationMemories");
	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	}
	else {
		button.textContent = "expand_less";
		list = document.createElement("ul");
		let listItem1 = document.createElement("li");
		listItem1.innerText = "Item 1";
		let listItem2 = document.createElement("li");
		listItem2.innerText = "Item 2";
		let listItem3 = document.createElement("li");
		listItem3.innerText = "Item 3";
		list.appendChild(listItem1);
		list.appendChild(listItem2);
		list.appendChild(listItem3);
		item.appendChild(list);
	}
}
