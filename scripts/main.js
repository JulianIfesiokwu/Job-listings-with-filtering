const mainSection = document.querySelector('.main__section')
const filterResultsContainer = document.querySelector('.filter__results')

function displayJob(job) {
    // Create a single job listing for each job
    const jobListing = document.createElement('div')
    jobListing.classList.add('listings')
    // Create div to hold company logo
    const companyLogo = document.createElement('img')
    companyLogo.setAttribute('src', job.logo)
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('listings__logo')
    // Append logo to container
    logoContainer.appendChild(companyLogo)
    // Add details section
    const listingDetails = document.createElement('div')
    listingDetails.classList.add('listings__details')
    // Create inner div
    const innerDiv = document.createElement('div')
    innerDiv.classList.add('inner')
   
    // Create rows in inner div
    const listingDetailsRow1 = document.createElement('div')
    listingDetailsRow1.classList.add('listing__details', 'row__1')
    // Create inner paragraph for company details
    const companyName = document.createElement('p')
    companyName.classList.add('row__1', 'company__name')
    companyName.textContent = `${job.company}`
    // Create inner paragraph for recent if new === true
    const recent = document.createElement('p')
    recent.classList.add('row__1', 'recent')
    // Create inner paragraph for featured if true
    const featured = document.createElement('p')
    featured.classList.add('row__1', 'featured')
    // create listing rows second row
    const listingDetailsRow2 = document.createElement('div')
    listingDetailsRow2.classList.add('listing__details', 'row__2')
    // create content for row__2
    const jobTitle = document.createElement('p')
    jobTitle.classList.add('job__title')
    jobTitle.textContent = `${job.position}`
    // append to row__2
    listingDetailsRow2.appendChild(jobTitle)
    // create listing rows third row
    const listingDetailsRow3 = document.createElement('div')
    listingDetailsRow3.classList.add('listing__details', 'row__3')
    // Create containing ul
    const ul = document.createElement('ul')
    const liOne = document.createElement('li')
    liOne.classList.add('date__posted')
    liOne.textContent =`${job.postedAt}`
    const liTwo = document.createElement('li')
    liTwo.classList.add('employment')
    liTwo.textContent = `${job.contract}`
    const liThree = document.createElement('li')
    liThree.classList.add('location')
    liThree.textContent = `${job.location}`
    // append li to ul
    ul.append(liOne, liTwo, liThree)
    // append ul to third row
    listingDetailsRow3.appendChild(ul)

    // Create tag section
    const tagsDiv = document.createElement('div');
    tagsDiv.classList.add('tags')
    // create and append all tags
    const tagContainerPosition = document.createElement('p')
    tagContainerPosition.classList.add('job__tags', 'role')
    tagContainerPosition.textContent = `${job.role}`
    tagContainerPosition.dataset.role = `${job.role}`
    tagContainerPosition.onclick = addFilter
    const tagContainerRole = document.createElement('p')
    tagContainerRole.classList.add('job__tags', 'role')
    tagContainerRole.textContent = `${job.level}`
    tagContainerRole.dataset.level = `${job.level}`
    tagContainerRole.onclick = addFilter
    // append to tagsDiv
    tagsDiv.append(tagContainerPosition, tagContainerRole)
    // Loop through job tools and display all
    if(job.tools.length>0) {
        job.tools.forEach(tool => {
            const roleContainer = document.createElement('p')
            roleContainer.classList.add('job__tags', 'tools')
            roleContainer.textContent = `${tool}`
            roleContainer.dataset.tools = tool
            roleContainer.onclick = addFilter
            tagsDiv.append(roleContainer)
        })
    }
    // Loop through job languages and display all
    if(job.languages.length>0) {
        job.languages.forEach(language => {
            const toolContainer = document.createElement('p')
            toolContainer.classList.add('job__tags', 'languages')
            toolContainer.textContent = `${language}`
            toolContainer.dataset.language = language
            toolContainer.onclick = addFilter
            tagsDiv.append(toolContainer)
        })
    }

    // append to listing details
    listingDetails.append(innerDiv, tagsDiv)
    // append all paragrapghs to listingDetailsRow1
    listingDetailsRow1.append(companyName, recent, featured)
    // delete recent or new if it is false
    job.new ? recent.textContent = 'new!' : recent.parentNode.removeChild(recent)
    job.featured ? featured.textContent = 'featured' : featured.parentNode.removeChild(featured)
    // append listingDetailsRow1 to inner div
    innerDiv.append(listingDetailsRow1, listingDetailsRow2, listingDetailsRow3)

    // append each logo & job details to a job listing
    jobListing.append(logoContainer, listingDetails)

    // Append to main section
    mainSection.append(jobListing)

}

function showJobListings(result) {
    // Loop through result array and manually display results
    result.forEach((job) => {
        // console.log(job)
        displayJob(job)
    })
}


function addFilter(e) {
    let filterCriteria = e.target.textContent
    // Create filter criteria and add to filter results
    createFilter(filterCriteria)
}

function deleteFilter(filterCriteria) {
    console.log(filterCriteria)
}

function createFilter(filterCriteria) {
    const filterContainer = document.createElement('div')
    const filterPill = document.createElement('p')
    filterContainer.classList.add('filter__pill')
    filterPill.textContent = filterCriteria
    // create delete filter button
    const deleteBtnContainer = document.createElement('span')
    deleteBtnContainer.classList.add('delete')
    deleteBtnContainer.onclick = deleteFilter(filterCriteria)
    const deleteBtn = document.createElement('img')
    deleteBtn.setAttribute('src', '../images/icon-remove.svg')
    // add deleteBtn to filter Pill
    deleteBtnContainer.appendChild(deleteBtn)
    filterContainer.append(filterPill,deleteBtnContainer)
    // append to dom
    filterResultsContainer.style.display = 'flex'
    filterResultsContainer.append(filterContainer)
    console.log(filterPill)

}

// Get data from json
const fetchJobListings = async () => {
    const source = '../data.json';
    try {
        const response = await fetch(source);
        const result = await response.json();
        showJobListings(result)
    } catch (err) {
        console.error(err)
    }
}


// Fetch job listings on document load
fetchJobListings()
