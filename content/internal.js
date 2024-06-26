let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
	document.querySelector("body").classList.toggle("active");
})

function handleInternal() { //Determines which content should be displayed in the internal page according to the id passed from the clicked element.
	let currentUrl = window.location.href;
	if (currentUrl.includes("englishSG")) {
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - EN/VTEXLocalizationStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("spanishSG")) {
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - ES/VTEXLocalizationStyleGuideES.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("portugueseSG")) {
		document.getElementById("main-frame").src = "./loc_style_guides/Localization Style Guide - PT/VTEXPortugueseStyleGuidePT.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("EnMktSG")) {
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - EN/VTEXWritingStyleGuideEN.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("EsMktSG")) {
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - ES/WritingStyleGuideES.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("PtMktSG")) {
		document.getElementById("main-frame").src = "./marketing_style_guides/Writing Style Guide - PT/VTEXWritingStyleGuidePT.html";
		expandItem("styleGuides");
	}
	else if (currentUrl.includes("glossaries")) { 
		displayGlossariesHeader(); //Changes the header to match the selected section/card.
		document.getElementById("main-frame").src = "./glossaries/glossaries.html";
		expandItem("glossaries");
	}
	else if (currentUrl.includes("enAdminStd")) {
		displayReviewLogsHeader(); //Changes the header to match the selected section/card.
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - EN/VTEXAdminstringstandardizationinEnglish.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("esAdminStd")) {
		displayReviewLogsHeader(); //Changes the header to match the selected section/card.
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - ES/VTEXAdminstringstandardizationinSpanish.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("ptAdminStd")) {
		displayReviewLogsHeader(); //Changes the header to match the selected section/card.
		document.getElementById("main-frame").src = "./loc_admin_review_logs/Admin String Standardization - PT/VTEXAdminstringstandardizationinPortuguese.html";
		expandItem("reviewLogs");
	}
	else if (currentUrl.includes("namingGuidelines")) {
		displayL10nAndI18nHeader(); //Changes the header to match the selected section/card.
		document.getElementById("main-frame").src = "./localization_and_internationalization/naming_guidelines.html";
		expandItem("namingGuidelines");
	}
}

handleInternal(); //Calling the function as soon as the internal page is loaded so it is populated with the correspondent card content.

//Style Guides header and subheader are displayed by default as static html.
function displayGlossariesHeader() { //Changes the header and subheader to match the selected card/section.
	let headerText = document.getElementById("header-text");
	headerText.innerText = "Glossaries";
	let headerSubtext = document.getElementById("header-subtext");
	headerSubtext.innerText = "Enhance the user experience by using the most updated and researched VTEX terms in English, Portuguese, and Spanish."
}

function displayReviewLogsHeader() { //Changes the header and subheader to match the selected card/section.
	let headerText = document.getElementById("header-text");
	headerText.innerText = "Admin Review Logs";
	let headerSubtext = document.getElementById("header-subtext");
	headerSubtext.innerText = "Check out the linguistic evolution of UI strings towards a native and consistent experience.";
}

function displayL10nAndI18nHeader() { //Changes the header and subheader to match the selected card/section.
	let headerText = document.getElementById("header-text");
	headerText.innerText = "Localization & Internationalization";
	let headerSubtext = document.getElementById("header-subtext");
	headerSubtext.innerText = "Create a product that is ready for a global audience by following localization and internationalization best practices.";
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
	else if (id == "namingGuidelines") {
		expandL10nAndI18nMemories()
	}
}

function expandStyleGuides() {
	let item = document.getElementById("styleGuides");
	let list = item.querySelector("ul");
	let icon = document.querySelector("#collapseStyleGuides");

	if (list) {
		collapseStyleGuides();
	} else {
		collapseGlossaries();
		collapseL10nAndI18n();
		collapseReviewLogs();

		icon.textContent = "expand_less";
		list = document.createElement("ul");

		let items = [
			{ id: "StyleGuides", text: "Back to Style Guides", link: "./style_guides.html" },
			{ id: "Documentation", text: "Documentation", link: "https://www.notion.so/vtexhandbook/E-D-Style-Guide-80cf41f627574419bde54e64aa04d1df" },
			{ id: "englishSG", text: "EN Localization", link: "./internal.html?id=englishSG" },
			{ id: "spanishSG", text: "ES Localization", link: "./internal.html?id=spanishSG" },
			{ id: "portugueseSG", text: "PT Localization", link: "./internal.html?id=portugueseSG" },
			{ id: "EnMktSG", text: "EN Marketing", link: "./internal.html?id=EnMktSG" },
			{ id: "EsMktSG", text: "ES Marketing", link: "./internal.html?id=EsMktSG" },
			{ id: "PtMktSG", text: "PT Marketing", link: "./internal.html?id=PtMktSG" },
			{ id: "UXWriSG", text: "UX Writing", link: "https://uxwriting.vtex.com/" },
		];

		const currentPageHref = window.location.href;

		items.forEach((itemData, index) => {
			let listItem = document.createElement("li");
			let link = document.createElement("a");
			link.innerText = itemData.text;
			link.href = itemData.link;
			listItem.id = itemData.id;
			if (itemData.id === "Documentation") {
				link.setAttribute('target', '_blank');
			}
			if (itemData.id === "UXWriSG") {
				link.setAttribute('target', '_blank');
			}
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

			if (index === 0 && currentPageHref.includes("style_guides")) {
				listItem.style.display = "none";
			}

			// Check if the link matches the current page's href
			if (currentPageHref.includes(itemData.id)) {
				link.style.color = "#f71963";
				link.style.fontWeight = "bold";
			}

			listItem.appendChild(link);
			list.appendChild(listItem);
		});

		list.style.fontWeight = "normal";
		item.appendChild(list);
	}
}



function collapseStyleGuides() { //Removes the generated elements of the section from the DOM, collapsing the card.
	let item = document.getElementById("styleGuides");
	let list = item.querySelector("ul");
	let icon = document.querySelector("#collapseStyleGuides");

	if (list) {
		item.removeChild(list);
		icon.textContent = "expand_more";
	}
}

function expandGlossaries() {
	let item = document.getElementById("glossaries");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseGlossaries");

	if (list) {
		collapseGlossaries();
	} else {
		collapseStyleGuides();
		collapseL10nAndI18n();
		collapseReviewLogs();
		button.textContent = "expand_less";
		list = document.createElement("ul");

		let items = [
			{ id: "glossaries", text: "Localization", link: "./internal.html?id=glossaries" }
		];

		const currentPageHref = window.location.href;

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

			if (currentPageHref.includes(itemData.id)) {
				link.style.color = "#f71963";
				link.style.fontWeight = "bold";
			}

			listItem.appendChild(link);
			list.appendChild(listItem);
		});

		list.style.fontWeight = "normal";
		item.appendChild(list);
	}
}

function collapseGlossaries() {
	let item = document.getElementById("glossaries");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseGlossaries");

	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	}
}

function expandL10nAndI18nMemories() {
	let item = document.getElementById("namingGuidelines");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseL10nAndI18n");

	if (list) {
		collapseL10nAndI18n(); // Call the new collapseTranslationMemories function
	} else {
		collapseStyleGuides();
		collapseGlossaries();
		collapseReviewLogs();
		button.textContent = "expand_less";
		list = document.createElement("ul");

		let items = [
			{ id: "namingGuidelines", text: "Naming Guidelines", link: "./internal.html?id=namingGuidelines" }
		];

		const currentPageHref = window.location.href;

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

			if (currentPageHref.includes(itemData.id)) {
				link.style.color = "#f71963";
				link.style.fontWeight = "bold";
			}

			listItem.appendChild(link);
			list.appendChild(listItem);
		});

		list.style.fontWeight = "normal";
		item.appendChild(list);
	}
}

function collapseL10nAndI18n() {
	let item = document.getElementById("namingGuidelines");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseL10nAndI18n");

	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	}
}

function expandReviewLogs() {
	let item = document.getElementById("reviewLogs");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseReviewLogs");

	if (list) {
		collapseReviewLogs(); // Call the new collapseReviewLogs function
	} else {
		collapseStyleGuides();
		collapseGlossaries();
		collapseL10nAndI18n();
		button.textContent = "expand_less";
		list = document.createElement("ul");

		let items = [
			{ id: "enAdminStd", text: "EN Admin Standardization", link: "./internal.html?id=enAdminStd" },
			{ id: "esAdminStd", text: "ES Admin Standardization", link: "./internal.html?id=esAdminStd" },
			{ id: "ptAdminStd", text: "PT Admin Standardization", link: "./internal.html?id=ptAdminStd" },
		];

		const currentPageHref = window.location.href;

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

			if (currentPageHref.includes(itemData.id)) {
				link.style.color = "#f71963";
				link.style.fontWeight = "bold";
			}

			listItem.appendChild(link);
			list.appendChild(listItem);
		});

		list.style.fontWeight = "normal";
		item.appendChild(list);
	}
}

function collapseReviewLogs() {
	let item = document.getElementById("reviewLogs");
	let list = item.querySelector("ul");
	let button = document.querySelector("#collapseReviewLogs");

	if (list) {
		item.removeChild(list);
		button.textContent = "expand_more";
	}
}

function toggleMenu() { //Changes the menu icon and title text as it opens or closes the menu.
	let menuIcon = document.querySelector(".toggleMenu");
	if (menuIcon.title == "Click to collapse the menu panel") {
		menuIcon.title = "Click to expand the menu panel"
	}
	else {
		menuIcon.title = "Click to collapse the menu panel"
	}
}
