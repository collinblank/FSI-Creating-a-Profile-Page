let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append("Rizzo");                             
content.append(header);

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent);

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage);

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails);

let descriptionHeader = document.createElement('h3')
descriptionHeader.textContent = 'Description:'
dogDetails.append(descriptionHeader);

let descriptionParagraph = document.createElement('p')
descriptionParagraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(descriptionParagraph);

let descriptionFeed = document.createElement ('h3')
descriptionFeed.textContent = 'Feeding Times:'
dogDetails.append(descriptionFeed);

let unorderedList = document.createElement('ul')
let item1 = document.createElement('li')
let item2 = document.createElement('li')
let item3 = document.createElement('li')
item1.textContent = "9:00 am"
item2.textContent = "12:00 pm"
item3.textContent = "5:00 pm"
unorderedList.append(item1, item2, item3)
dogDetails.append(unorderedList);


