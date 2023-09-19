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