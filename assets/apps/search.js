add_listing('Thermodyanamics', ['Yunus A. Cengel','Michael A. Boles'], 'English', 182442, 2, 1998, 'thermodynamics_cengel.jpg');
add_listing('Pointless Meetings', ['I. Spy', 'S. Leaping'], 'English', 411242, 1, 1230, 'pointless_meetings.jpg')

function add_listing(title, authors, language, id, edition, year, img_src) {
  var listing = document.createElement('div');
  listing.setAttribute('class', 'card listing');

  var row = document.createElement('div');
  row.setAttribute('class', 'row no-gutters');
  listing.appendChild(row);

  var col1 = document.createElement('div');
  col1.setAttribute('class', 'col-md-2');
  row.appendChild(col1);

  var img = document.createElement('img');
  img.setAttribute('class', 'card-img');
  img.setAttribute('src', '../book_images/'+img_src);
  col1.appendChild(img);

  var col2 = document.createElement('div');
  col2.setAttribute('class', 'col-md-10');
  row.appendChild(col2);

  var cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');
  col2.appendChild(cardBody);

  var titleRow = document.createElement('div');
  titleRow.setAttribute('class', 'row');
  cardBody.appendChild(titleRow);

  var titleText = document.createElement('h4');
  titleText.setAttribute('class', 'col card-title');
  titleText.innerHTML = title;
  titleRow.appendChild(titleText);

  var editionText = document.createElement('h5');
  editionText.setAttribute('class', 'col card-title edition');
  if (edition == 1) {editionText.innerHTML = String(edition) + 'st Edition';}
  else if (edition == 2) {editionText.innerHTML = String(edition) + 'nd Edition';}
  else if (edition == 3) {editionText.innerHTML = String(edition) + 'rd Edition';}
  else {editionText.innerHTML = String(edition) + 'th Edition';}
  titleRow.appendChild(editionText);

  var authorRow = document.createElement('div');
  authorRow.setAttribute('class', 'row');
  cardBody.appendChild(authorRow);

  var authorText = document.createElement('p');
  authorText.setAttribute('class', 'col card-text authors');
  authorText.innerHTML = authors.join(', ');
  authorRow.appendChild(authorText);

  var dateText = document.createElement('p');
  dateText.setAttribute('class', 'col card-text date');
  dateText.innerHTML = year;
  authorRow.appendChild(dateText);

  cardBody.appendChild(document.createElement('br'));

  var languageText = document.createElement('p');
  languageText.setAttribute('class', 'card-text');
  var languageSmall = document.createElement('small');
  languageSmall.setAttribute('class', 'text-muted');
  languageSmall.innerHTML = 'Language: '+language;
  languageText.appendChild(languageSmall);
  cardBody.appendChild(languageText);

  var idText = document.createElement('p');
  idText.setAttribute('class', 'card-text');
  var idSmall = document.createElement('small');
  idSmall.setAttribute('class', 'text-muted');
  idSmall.innerHTML = 'Book ID: '+id;
  idText.appendChild(idSmall);
  cardBody.appendChild(idText);

  var listingContainer = document.getElementById('listing-container');
  listingContainer.appendChild(listing);
}

// <div class="card mb-3 listing">
//   <div class="row no-gutters">
//     <div class="col-md-2">
//       <img src="../book_images/thermodynamics_cengel.jpg" class="card-img" alt="...">
//     </div>
//     <div class="col-md-10">
//       <div class="card-body">
//         <div class="row">
//           <h4 class="col card-title">Book Cellar</h4>
//           <h5 class="col card-title edition">2nd. Edition</h5>
//         </div>
//         <div class="row">
//           <p class="col card-text authors">Davis Robertson, William H. Fagan</p>
//           <p class="col card-text date">1998</p>
//         </div>
//         <br>
//         <p class="card-text"><small class="text-muted">Language: English</small></p>
//         <p class="card-text"><small class="text-muted">ID: 142129</small></p>
//       </div>
//     </div>
//   </div>
// </div>
