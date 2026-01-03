let elonMuskIamges = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l0FO6rvBvfooyPnpLPtPN32Vche4fC7BzQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3azYK5ZebTYtd46slFHf2knWCm95eifwX8w&s",
    "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkI5sCD9pNy-OA-Z98TMNPBbyVFllNqtuh3Q&s",
    "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/CD70/production/_102929525_elonmusk.jpg.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOCtkRdIClLviQVrE7tVQqTkOdieD-Rl0Sw&s",
    "https://i.abcnewsfe.com/a/ca345cd0-6c00-47ae-be70-858e2a4792d1/elon-musk-gty-gmh-250725_1753464244586_hpMain_16x9.jpg?w=992",
    "https://fortune.com/img-assets/wp-content/uploads/2025/07/MPP_092025-Elon-Musk.jpg?w=1440&q=75"
];

const imgs = document.getElementsByTagName("img");

for(let i=0;i<imgs.length ; i++) {
    const randomVal = Math.floor(Math.random()*(elonMuskIamges.length));
    imgs[i].src = elonMuskIamges[randomVal];
}

// change the content of all teh h2 tag 
const headers = document.getElementsByTagName("h2");
for(let i=0;i<headers.length ; i++) {
    headers[i].innerText = "Elon Musk is awsome";
}

