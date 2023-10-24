let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
	document.querySelector("body").classList.toggle("active");
})

function handleInternal() {
	let currentUrl = window.location.href;
	if (currentUrl.includes("localization")) {
		showBackButton()
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - EN/VTEXLocalizationStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("englishSG")) {
		showBackButton()
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - EN/VTEXLocalizationStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("spanishSG")) {
		showBackButton()
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - ES/VTEXLocalizationStyleGuideES.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("portugueseSG")) {
		showBackButton()
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - PT/VTEXPortugueseStyleGuidePT.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("EnMktSG")) {
		showBackButton()
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - EN/VTEXWritingStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("EsMktSG")) {
		showBackButton()
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - ES/WritingStyleGuideES.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("PtMktSG")) {
		showBackButton()
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - PT/VTEXWritingStyleGuidePT.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("marketing")) {
		showBackButton()
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - EN/VTEXWritingStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("glossaries")) {
		let headerText = document.getElementById("header-text");
		headerText.innerText = "Glossaries";
		let headerSubtext = document.getElementById("header-subtext"); //Insert proper text here later.
		headerSubtext.innerText = "Short description about the subject."
		document.getElementById("main-frame").src = ""; //Insert link once this file is available.
		expandItem("glossaries");
	}
	else if (currentUrl.includes("reviewLogs")) {
		let headerText = document.getElementById("header-text");
		headerText.innerText = "Admin Review Logs";
		let headerSubtext = document.getElementById("header-subtext"); //Insert proper text here later.
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - EN/VTEXAdminstringstandardizationinEnglish.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("enAdminStd")) {
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - EN/VTEXAdminstringstandardizationinEnglish.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("esAdminStd")) {
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - ES/VTEXAdminstringstandardizationinSpanish.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("ptAdminStd")) {
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - PT/VTEXAdminstringstandardizationinPortuguese.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("translationMemories")) {
		let headerText = document.getElementById("header-text");
		headerText.innerText = "Translation Memories";
		let headerSubtext = document.getElementById("header-subtext"); //Insert proper text here later.
		document.getElementById("main-frame").src = ""; //Insert link once this file is available.
		expandItem("translationMemories");
	}
}
handleInternal(); //Calling function as soon as the internal page is loaded so it is populated with the correspondent card content.

function showBackButton() {//Is only shown if the current page derives from the "Style Guides" page.
	button = document.getElementById("backButton");
	button.style.display = "inline-block";
}

function expandItem(id) { //Determines which menu subsection should be open on load depending on the selected card.
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
		{ id: "englishSG", text: "EN Localization", link: "./internal.html?id=englishSG" },
		{ id: "spanishSG", text: "ES Localization", link: "./internal.html?id=spanishSG" },
		{ id: "portugueseSG", text: "PT Localization", link: "./internal.html?id=portugueseSG" },
		{ id: "EnMktSG", text: "EN Marketing", link: "./internal.html?id=EnMktSG" },
		{ id: "EsMktSG", text: "ES Marketing", link: "./internal.html?id=EsMktSG" },
		{ id: "PtMktSG", text: "PT Marketing", link: "./internal.html?id=PtMktSG" },
	  ];
  
	  items.forEach((itemData) => {
		let listItem = document.createElement("li");
		let link = document.createElement("a");
		link.innerText = itemData.text;
		link.href = itemData.link;
		listItem.id = itemData.id;
  
		listItem.style.margin = "0.5";
		listItem.style.padding = "0.3";
		link.style.margin = "0";
		link.style.padding = "0";
  
		listItem.addEventListener("mouseover", function () {
		  listItem.style.fontWeight = "bold";
		});
  
		listItem.addEventListener("mouseout", function () {
		  listItem.style.fontWeight = "normal";
		});
  
		listItem.appendChild(link);
		list.appendChild(listItem);
	  });
  
	  list.style.fontWeight = "normal";
	  item.appendChild(list);
	}
  }
  

function expandReviewLogs() { //Generates the submenus for Review Logs.
	let item = document.getElementById("reviewLogs");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseReviewLogs");

	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	} else {
		button.textContent = "expand_less";
		list = document.createElement("ul");

		let items = [
			{ id: "enAdminStd", text: "EN Admin Standardization", link: "./internal.html?id=enAdminStd" },
			{ id: "esAdminStd", text: "ES Admin Standardization", link: "./internal.html?id=esAdminStd" },
			{ id: "ptAdminStd", text: "PT Admin Standardization", link: "./internal.html?id=ptAdminStd" },
		];

		items.forEach((itemData) => {
			let listItem = document.createElement("li");
			let link = document.createElement("a");
			link.innerText = itemData.text;
			link.href = itemData.link;
			listItem.id = itemData.id;

			listItem.style.margin = "0.5";
			listItem.style.padding = "0.3";
			link.style.margin = "0";
			link.style.padding = "0";

			listItem.addEventListener("mouseover", function () {
				listItem.style.fontWeight = "bold";
			  });
		
			  listItem.addEventListener("mouseout", function () {
				listItem.style.fontWeight = "normal";
			  });

			listItem.appendChild(link);
			list.appendChild(listItem);
		});

		list.style.fontWeight = "normal";
		item.appendChild(list);
	}
}

function expandGlossaries() { //Generates the submenus for Glossaries.
	let item = document.getElementById("glossaries");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseGlossaries");

	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	} else {
		button.textContent = "expand_less";
		list = document.createElement("ul");

		let items = [
			{ id: "item1", text: "Item 1", link: "#" },
			{ id: "item2", text: "Item 2", link: "#" },
			{ id: "item3", text: "Item 3", link: "#" },
		];

		items.forEach((itemData) => {
			let listItem = document.createElement("li");
			let link = document.createElement("a");
			link.innerText = itemData.text;
			link.href = itemData.link;
			listItem.id = itemData.id;

			listItem.style.margin = "0.5";
			listItem.style.padding = "0.3";
			link.style.margin = "0";
			link.style.padding = "0";

			listItem.addEventListener("mouseover", function () {
				listItem.style.fontWeight = "bold";
			  });
		
			  listItem.addEventListener("mouseout", function () {
				listItem.style.fontWeight = "normal";
			  });

			listItem.appendChild(link);
			list.appendChild(listItem);
		});

		list.style.fontWeight = "normal";
		item.appendChild(list);
	}
}

function expandTranslationMemories() { //Generates the submenus for Translation Memories.
	let item = document.getElementById("translationMemories");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseTranslationMemories");

	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	} else {
		button.textContent = "expand_less";
		list = document.createElement("ul");

		let items = [
			{ id: "item1", text: "Item 1", link: "#" },
			{ id: "item2", text: "Item 2", link: "#" },
			{ id: "item3", text: "Item 3", link: "#" },
		];

		items.forEach((itemData) => {
			let listItem = document.createElement("li");
			let link = document.createElement("a");
			link.innerText = itemData.text;
			link.href = itemData.link;
			listItem.id = itemData.id;


			listItem.style.margin = "0.5";
			listItem.style.padding = "0.3";
			link.style.margin = "0";
			link.style.padding = "0";

			listItem.addEventListener("mouseover", function () {
				listItem.style.fontWeight = "bold";
			  });
		
			  listItem.addEventListener("mouseout", function () {
				listItem.style.fontWeight = "normal";
			  });

			listItem.appendChild(link);
			list.appendChild(listItem);
		});

		list.style.fontWeight = "normal";
		item.appendChild(list);
	}
}

function toggleMenu() {
    let menuIcon = document.querySelector(".toggleMenu");
    console.log(menuIcon.innerHTML);
    if (menuIcon.innerHTML == "left_panel_close") {
        menuIcon.innerHTML = "left_panel_open";
        menuIcon.title = "Click to expand the menu panel"
    }
    else {
        menuIcon.innerHTML = "left_panel_close";
        menuIcon.title = "Click to collapse the menu panel"
    }
}
