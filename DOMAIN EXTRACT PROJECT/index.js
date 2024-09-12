/*
// text
let textareaEl = document.getElementById("textarea_el");
// bouton extraire
const extraireBtn = document.getElementById("extraire_btn")
// donnee extrait 

extraireBtn.addEventListener("click",()=>{
    let dataExtract = [];
    //donnee d'entre
    let dataListe = textareaEl.value
    let dataListeArr = dataListe.trim().split(/[\r\n,; ]+/);
    dataListeArr.forEach(extractDomain)
        function extractDomain(url){
            let replace = url.replaceAll("www.",'')
            const start = replace.indexOf("//")+2;
            const end = replace.indexOf("/",start)
            //extration du nom de domain
            let extract = replace.slice(start,end)
            // push
            dataExtract.push(extract) 
            textareaEl.value = '';  
    }
    display(dataExtract)

})
    
// display list
function display(data) {
    data.forEach(displayArr)

    function displayArr(){  
    const listEl = document.createElement('li')
    const ulEL = document.getElementById("ul_el")
    listEl.innerHTML = data
    ulEL.appendChild(listEl)

    }
    
    
}
*/
// Get the textarea element
let textareaEl = document.getElementById("textarea_el");

// Get the extract button
const extraireBtn = document.getElementById("extraire_btn");

// Add event listener to the extract button
extraireBtn.addEventListener("click", () => {
    let dataExtract = new Set(); // Use a Set to store unique domains
    // Get the input data from the textarea
    let dataListe = textareaEl.value;
    // Split the input data into an array of URLs
    let dataListeArr = dataListe.trim().split(/[\r\n,; ]+/);
    
    // Extract domains from each URL
    dataListeArr.forEach(extractDomain);

    function extractDomain(url) {
        // Remove 'www.' from the URL
        let replace = url.replaceAll("www.", '');
        // Find the start of the domain (after '://')
        const start = replace.indexOf("//") + 2;
        // Find the end of the domain (before the next '/')
        const end = replace.indexOf("/", start);
        // Extract the domain
        let extract = end === -1 ? replace.slice(start) : replace.slice(start, end);
        // Add the domain to the Set (duplicates are automatically handled)
        dataExtract.add(extract);
    }

    // Clear the textarea after processing
    textareaEl.value = '';

    // Convert the Set to an Array and display the extracted domains
    display(Array.from(dataExtract));
});

// Display the list of domains
function display(data) {
    // Get the UL element
    const ulEL = document.getElementById("ul_el");
    // Clear the existing list
    ulEL.innerHTML = '';
    // Add each domain as a new list item
    data.forEach(domain => {
        const listEl = document.createElement('li');
        listEl.textContent = domain;
        ulEL.appendChild(listEl);
    });
}



















