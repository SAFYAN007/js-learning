let link = document.querySelector("a");

// get attributes
console.log(link.getAttribute("href").slice(1))
// set attributes
link.setAttribute("href","https://www.google.com/");
console.log(link.getAttribute("href"));
