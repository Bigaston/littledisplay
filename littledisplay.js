window.onload = () => {
	document.querySelectorAll(".ld").forEach(section => {
		let mode = section.attributes["ld-mode"].nodeValue;
		let base_url = section.attributes["ld-base-url"].nodeValue;

		if (window.location.pathname.startsWith(base_url)) {
			if (mode == "url") {
				let url = window.location.pathname.replace(base_url, "/");

				if (url.startsWith("//")) url = url.replace("/", "")

				ldURL(section, url)
			} else if (mode == "hash") {
				let hash_url;

				if (!!window.location.hash) {
					hash_url = window.location.hash.replace("#", "").replace(base_url, "/")
				} else {
					hash_url = "/"
				}

				ldURL(section, hash_url)
			}
		} else {
			section.style.display = "none"
		}
	})
}

function ldURL(section, url) {
	if (url == "/") {
		parseLD(section)
	} else {
		parseWithUrl(section, url)
	}
}

function parseLD(section) {
	//Parse de la page par défaut
	section.querySelectorAll(".ld-part").forEach(element => {
		if (element.attributes["ld-default"] != undefined && element.attributes["ld-default"].nodeValue == "false") {
			element.style.display = "none";
		}
	})
}

function parseWithUrl(section, current_url) {
	section.querySelectorAll(".ld-part").forEach(element => { 
		if (element.attributes["ld-url"] != undefined && element.attributes["ld-url"].nodeValue == current_url) {
			element.style.display = "block";

			//Changement du titre de la section
			let section_title = element.querySelector("h2:first-child");
			if (section_title != undefined) {
				section_title.outerHTML = "<h1>" + section_title.innerHTML + "</h1>"
				document.title = document.title + " - " + section_title.innerHTML
			}
		} else {
			element.style.display = "none"
		}
	})
}