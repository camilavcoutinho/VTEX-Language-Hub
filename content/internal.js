let hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function(){
		document.querySelector("body").classList.toggle("active");
	})

function styleGuide() {
    document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - PT/VTEXPortugueseStyleGuidePT.html";
}

function adminReviewLog() {
    document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - EN/VTEXAdminstringstandardizationinEnglish.html";
}

let menuItem = document.querySelector(".item");

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
	if (list) {
		item.removeChild(list);
		}
	else {
		list = document.createElement("ul");
		let listItem1 = document.createElement("li");
		listItem1.innerText = "Item 1";
		let listItem2 = document.createElement("li");
		listItem2.innerText = "Item 2";
		let listItem3 = document.createElement("li");
		listItem3.innerText = "Item 3";
		let listItem4 = document.createElement("li");
		listItem4.innerText = "Item 4";
		let listItem5 = document.createElement("li");
		listItem5.innerText = "Item 5";
		let listItem6 = document.createElement("li");
		listItem6.innerText = "Item 6";

		let items = [listItem1, listItem2, listItem3, listItem4, listItem5, listItem6]
		
		items.forEach(item => {
			list.appendChild(item);
		})
		
		item.appendChild(list);
	}
}

function expandReviewLogs() {
	let item = document.getElementById("reviewLogs");
	let list = item.querySelector("ul");
	if (list) {
		item.removeChild(list);
		}
	else {
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
function expandGlossaries() {
	let item = document.getElementById("glossaries");
	let list = item.querySelector("ul");
	if (list) {
		item.removeChild(list);
		}
	else {
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
	if (list) {
		item.removeChild(list);
		}
	else {
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