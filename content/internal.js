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
		let item = document.getElementById("styleGuides");
		let list = item.querySelector("ul");
		if (list) {
			item.removeChild(list);
		  } else {
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
		  } //Funcionou. Pensar em como abstrair uma subfunção para fazer isso para cada um dos itens do menu, ao invés de repetir o trabalho dentro desta mesma função.
	}
	else if (id == "reviewLogs") {
		console.log("Review Logs");
	}
	else if (id == "glossaries") {
		console.log("Glossaries");
	}
	else if (id == "translationMemories") {
		console.log("Translation memories");
	}
	else console.log("Outro");
}
//Funcionou. Pensar em como abstrair uma subfunção para fazer isso para cada um dos itens do menu.