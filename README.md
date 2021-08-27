# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### Links

- Solution URL: (https://github.com/JulianIfesiokwu/Job-listings-with-filtering)
- Live Site URL: (https://julianifesiokwu.github.io/Job-listings-with-filtering/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- BEM

### What I learned

The project is quite complex and vast. I think I greatly underestimated how hard and complex the project actually is to complete. Also i didnt understand clearly the requirements before I started and this made me waste time. However, I completed most of the project except the filtering functionality, the clear button and makig sure you can only have one of the same filter criteria at any time.

I am quite proud of the JS i used in the project. Its quite alot cnd I had to learn alot from various people and sites whic I tried to list all below. Some f the links are Youtube videos and I hope anyone who reads this will be okay watching some of the videos.

I learnt alot on this project and it was entertaining as well as frustrating.

```js
    // append to listing details
    listingDetails.append(innerDiv, tagsDiv)
    // append all paragrapghs to listingDetailsRow1
    listingDetailsRow1.append(companyName, recent, featured)
    // delete recent or new if it is false
    job.new ? recent.textContent = 'new!' : recent.parentNode.removeChild(recent)
    job.featured ? featured.textContent = 'featured' : featured.parentNode.removeChild(featured)
    // append listingDetailsRow1 to inner div
    innerDiv.append(listingDetailsRow1, listingDetailsRow2, listingDetailsRow3)
}
```
I am quite proud of this part of code as I figured I had to add content based on a boolean value. This was new to me and the project also had other features which were new as well.

### Continued development

- data-attributes and filtering
- loops: specifically loops within loops

### Useful resources

- (https://www.w3schools.com/cssref/sel_firstchild.asp) - This helped me in traversing the DOM.

- (https://www.thewebdeveloperguide.com/css-vertical-align-text/) - This was useful when i tried to vertical align the pills on each job post.

_ (https://www.youtube.com/watch?v=1tVCwv_BX2M) - Very useful as I didnt know you could fetch from files within your project. I thought fetch is only to be used for getting data online.

- (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArra) - A method for checking if data returned is an array. I needed to ensure the data recieved from my fetch was of which type.

- (https://www.w3schools.com/jsref/met_node_removechild.asp)  How to remove child elements. Used to remove filter criteria in the project

- (https://www.w3schools.com/tags/att_data-.asp) - I used this to learn about data-attributes.

- (https://javascript.plainenglish.io/quick-guide-to-using-data-attributes-f1f2c3161d5f) - More on data attributes

- (https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - Data attributes

- (https://ultimatecourses.com/blog/attaching-event-handlers-to-dynamically-created-javascript-elements) - Very useful resource. I learnt how to add event handlers to dynamically created elements.

- (https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) - How to remove a child element.

https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

https://javascript.info/searching-elements-dom

https://www.w3schools.com/jsref/jsref_indexof.asp

https://daily-dev-tips.com/posts/vanilla-javascript-data-attribute-filters/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


## Author

- Frontend Mentor - [@egbuna09](https://www.frontendmentor.io/profile/egbuna09)
