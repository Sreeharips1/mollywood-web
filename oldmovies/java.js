// movie data

const thrilleroldmovies = [
  {
    title: "Manichithrathazhu",
    year: "1993",
    decr: "When a forbidden room in an old bungalow is unbolted, the spirit of a vengeful dancer is unleashed",
    img: "../IMAGES/old/old thriller/Manichitrathazhu (1993).jpeg",
  },
  {
    title: "Oru CBI Diary Kurippu",
    year: "1988",
    decr: "Prabhakara Varma is called upon to investigate the death of Omana, the daughter-in-law of a local businessman. It looks like a suicide but, Varma is sure that is not so",
    img: "../IMAGES/old/old thriller/oldthriller.jpg",
  },
  {
    title: "Jagratha",
    year: "1989",
    decr: "Sethurama Iyer and the CBI investigate the mysterious murder of a famous actress.",
    img: "../IMAGES/old/old thriller/oldthriller2.jpg",
  },
  {
    title: "Commissioner",
    year: "1994",
    decr: "Bharathchandran, a police commissioner committed to his duty, exposes the criminal links of a Delhi-based business tycoon, who has criminal activities running in the country.",
    img: "../IMAGES/old/old thriller/oldthriller3.jpg",
  },
  {
    title: "August 1",
    year: "1988",
    decr: "A Crime Branch Detective fights the clock to prevent a looming assassination attempt on the Kerala Chief Minister's life.",
    img: "../IMAGES/old/old thriller/oldthriller4.jpg",
  },
  {
    title: "Kariyila Kattu Pole",
    year: "1986",
    decr: "Deputy Superintendent of Police Achuthankutty tries to solve the mystery of film director Harikrishnan's death. ",
    img: "../IMAGES/old/old thriller/oldthriller5.jpg",
  },
  {
    title: "Ee Thanutha Veluppan Kalathu",
    year: "1990",
    decr: "When a series of murders of prominent people remain a mystery, Hariharan is assigned to capture the culprit.",
    img: "../IMAGES/old/old thriller/oldthriller6.jpg",
  },
  {
    title: "Mukham",
    year: "1990",
    decr: "A police officer tries to uncover and stop an unknown serial killer who sniped three victims and plans for a fourth one.",
    img: "../IMAGES/old/old thriller/oldthriller7.jpg",
  },
  {
    title: "Aparan",
    year: "1988",
    decr: "Viswanathan, new in town, soon learns that he is being chased by enemies of his look-alike, who is a con man. Vishwanathan tries to find out Uthaman before its too late, but things don't go as planned",
    img: "../IMAGES/old/old thriller/oldthriller8.webp",
  },
  {
    title: "Utharam",
    year: "1989",
    decr: "One fine morning, not any different from every other day, a promising poet shoots herself. Leaving no trace of motive, her husband's best friend and journalist, Balu embarks on a journey to find the truth",
    img: "../IMAGES/old/old thriller/oldthriller9.jpg",
  },
  {
    title: "Yavanika",
    year: "1982",
    decr: "An infamous tabla player of a touring drama group goes missing. Later on, Sub-inspector Jacob Eeraly investigates the case",
    img: "../IMAGES/old/old thriller/oldthriller10.jpeg",
  },
  {
    title: "Thazhvaram",
    year: "1990",
    decr: "Balan and Raju's friendly relationship turns into rivalry when Raju murders his wife and robs his hard-earned money. Balan decides to take revenge on Raju",
    img: "../IMAGES/old/old thriller/thazhvaram.jpg",
  },
];

//accessing the div
const thriller = document.getElementById("thriller");
console.log(thriller);
//update items
document.documentElement.style.setProperty("--items", thrilleroldmovies.length);

thrilleroldmovies.forEach((movie, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.setProperty("--i", index);

  card.innerHTML = `
    <img src="${movie.img}" alt="movie${movie.title}pic">
    <div class="text">
    <h2>${movie.title}</h2>
    <span>${movie.year}</span>
    <p>${movie.decr}</p></div>`;

  thriller.appendChild(card);
});

// thriller over ,drama start

const dramaoldmovies = [
  {
    title: "Aaram Thamburan",
    year: "1997",
    decr: "Jagannathan, a mafia don in Bombay moves to Kanimangalam village. He wins the love of the locals, but finds trouble with a feudal lord, Appan Thamburan",
    img: "../IMAGES/old/drama/Aaram thamburan.jpeg",
  },
  {
    title: "Amrutham Gamaya",
    year: "1987",
    decr: "Its a classic story about a doctor named Haridas(mohanlal) who lives some mystreous emotions and tries to help family of a person (vineeth) who had been killed by himself during his collage days",
    img: "../IMAGES/old/drama/amartham gamaya.jpg",
  },
  {
    title: "Anantaram",
    year: "1987",
    decr: "A young man narrates two conflicting accounts of his life, changing the details and incidents in both, as he slowly approaches madness.",
    img: "../IMAGES/old/drama/Anantaram.avif",
  },
  {
    title: "Dasharatham",
    year: "1989",
    decr: "Rajeev, an orphan eccentric millionaire, has his own strange taste towards everything. With less knowledge about family relationships, he struggles hard to achieve his aim to become a father.",
    img: "../IMAGES/old/drama/dasharatham.jpg",
  },
  {
    title: "Kireedam",
    year: "1989",
    decr: "The life of a young man turns upside down when he intervenes in a dispute in order to rescue his father (a cop) from a ruthless local outlaw.",
    img: "../IMAGES/old/drama/kireedam.jpg",
  },
  {
    title: "Mathilukal",
    year: "1990",
    decr: "Its a story of Basheer, an author who experiences his prison life. In it he finds friendship, loneliness, fear and finally love, but that remains questionable. ",
    img: "../IMAGES/old/drama/Mathilukal.jpg",
  },
  {
    title: "Varavelpu",
    year: "1989",
    decr: "Murali returns to his home in Kerala after working in Dubai for seven years. He decides to do social service for the people in his hometown, but fails due to the local politicians.",
    img: "../IMAGES/old/drama/varavelp.jpg",
  },
  {
    title: "Njan Gandharvan",
    year: "1991",
    decr: "The film is an esoteric fantasy about a girl and her passion for a celestial lover, who keeps appearing from a wooden statue that she found on a beach but is invisible to others.",
    img: "../IMAGES/old/drama/njaan gandharvan.jpeg",
  },
  {
    title: "Pavithram",
    year: "1994",
    decr: "A young man's relationship with his career, fiancee and brother is brought under stress by the birth of an unexpected sister.",
    img: "../IMAGES/old/drama/Pavithram.jpeg",
  },
  {
    title: "Ponmuttayidunna Tharavu",
    year: "1988",
    decr: "Bhaskaran, a goldsmith is madly in love with Snehalatha, the daughter of astrologer, Panicker. When Bhaskaran asks for Snehalatha's hand in marriage, to his shock, she denies their love affair",
    img: "../IMAGES/old/drama/ponmutta.webp",
  },
  {
    title: "Thoovanathumbikal",
    year: "1987",
    decr: "An infamous tabla player of a touring drama group goes missing. Later on, Sub-inspector Jacob Eeraly investigates the case",
    img: "../IMAGES/old/drama/thoovana.jpg",
  },
  {
    title: "Aryan",
    year: "1988",
    decr: "Mohanlal plays a Brahmin priest who is falsely accused of theft and forced to leave his village in Kerala. He moves to Bombay where he gets drawn into the underworld through an ageing don Kareem",
    img: "../IMAGES/old/drama/aryan.jpg",
  },
];

const drama = document.getElementById("drama");

document.documentElement.style.setProperty(
  "--dramamovies",
  dramaoldmovies.length
);

dramaoldmovies.forEach((movie, index) => {
  const dramacard = document.createElement("div");
  dramacard.classList.add("dramacard");
  dramacard.style.setProperty("--drama", index);

  dramacard.innerHTML = `
    <img src="${movie.img}" alt="movie${movie.title}pic">
    <div class="text">
    <h2>${movie.title}</h2>
    <span>${movie.year}</span>
    <p>${movie.decr}</p></div>`;

  drama.appendChild(dramacard);
});

const comedyMovies = [
  {
    title: "Adhipan",
    year: "1989",
    decr: "A police surgeon uncovers deep political conspiracies while investigating a shocking murder.",
    img: "../IMAGES/old/comedy/adhipan.webp",
  },
  {
    title: "In Harihar Nagar",
    year: "1990",
    decr: "Four carefree friends get entangled in a hilarious mystery involving a woman and unexpected twists.",
    img: "../IMAGES/old/comedy/harihar.jpg",
  },
  {
    title: "Kilukkam",
    year: "1991",
    decr: "A tourist guide and his friend get stuck with a mysterious girl, leading to nonstop comedy chaos.",
    img: "../IMAGES/old/comedy/killukam.jpeg",
  },
  {
    title: "Mazha Peyyunnu Maddalam Kottunnu",
    year: "1986",
    decr: "A wealthy man and his driver swap roles, causing confusion, laughter, and mistaken identities.",
    img: "../IMAGES/old/comedy/mazhapeyunu.jpg",
  },
  {
    title: "Meleparambil Aanveedu",
    year: "1993",
    decr: "A man secretly marries a village girl and hides her in his house, leading to hilarious family complications.",
    img: "../IMAGES/old/comedy/mele.jpg",
  },
  {
    title: "Mookilla Rajyathu",
    year: "1991",
    decr: "Four mental asylum escapees try to survive outside, creating unforgettable comic situations.",
    img: "../IMAGES/old/comedy/mookil.webp",
  },
  {
    title: "Nadodikattu / Pattanapravesham / Akkare Akkare Akkare",
    year: "1987 - 1990",
    decr: "The iconic Dasan–Vijayan duo gets into nonstop comedic adventures across Kerala, Tamil Nadu, and the US.",
    img: "../IMAGES/old/comedy/nadodikatt,pattanapra,akkare.jpeg",
  },
  {
    title: "Priyapetta Pappan",
    year: "1992",
    decr: "The angel of death visits Earth and gets tangled in hilarious human problems.",
    img: "../IMAGES/old/comedy/pappan.jpg",
  },
  {
    title: "Ramji Rao Speaking",
    year: "1989",
    decr: "Three jobless men get caught in a kidnapping drama, leading to classic Malayalam comedy.",
    img: "../IMAGES/old/comedy/ramji.webp",
  },
  {
    title: "Sanmanassullavarkku Samadhanam",
    year: "1986",
    decr: "A stressed landlord tries to evict tenants, creating a perfect blend of emotion and humor.",
    img: "../IMAGES/old/comedy/sanmanass.jpg",
  },
  {
    title: "Thenmavin Kombath",
    year: "1994",
    decr: "A romantic village adventure filled with comedy, rivalry, and vibrant characters.",
    img: "../IMAGES/old/comedy/thenmavinkomb.jpg",
  },
  {
    title: "Vandanam",
    year: "1989",
    decr: "Two cops on an assignment fall into hilarious trouble when romance interferes with duty.",
    img: "../IMAGES/old/comedy/vandhanam.jpeg",
  },
];
const comedy = document.getElementById("comedy");
console.log(comedy);

document.documentElement.style.setProperty(
  "--comedymovies",
  comedyMovies.length
);

comedyMovies.forEach((movie, index) => {
  const comedycard = document.createElement("div");
  comedycard.classList.add("comedycard");
  comedycard.style.setProperty("--comedy", index);

  comedycard.innerHTML = `
    <img src="${movie.img}" alt="movie${movie.title}pic">
    <div class="text">
    <h2>${movie.title}</h2>
    <span>${movie.year}</span>
    <p>${movie.decr}</p></div>`;

  comedy.appendChild(comedycard);
});

const actionmovies = [
  {
    title: "Abhimanyu",
    year: "1991",
    decr: "A welder in Mumbai is drawn into the underworld after witnessing a gang murder, gradually becoming a powerful crime figure.",
    img: "../IMAGES/old/action/abimanu.webp",
  },
  {
    title: "Irupatham Noottandu",
    year: "1987",
    decr: "A gold smuggler backed by politicians faces trouble when narcotics enter the trade, pushing him into a dangerous conflict.",
    img: "../IMAGES/old/action/irupatham.jpg",
  },
  {
    title: "Kottayam Kunjachan",
    year: "1990",
    decr: "A small-time thug released from prison gets into new conflicts as he tries to rebuild his life in his native place.",
    img: "../IMAGES/old/action/kottayamkunjachan.jpg",
  },
  {
    title: "Moonnam Mura",
    year: "1988",
    decr: "An ex-police officer is brought in to rescue hostages after terrorists hijack a bus carrying political leaders.",
    img: "../IMAGES/old/action/moonam.jpg",
  },
  {
    title: "Rajavinte Makan",
    year: "1986",
    decr: "A feared underworld don seeks revenge against a corrupt Home Minister who betrayed him.",
    img: "../IMAGES/old/action/rajav.jpg",
  },
  {
    title: "Samrajyam",
    year: "1990",
    decr: "Alexander, a powerful crime boss, expands his empire while dealing with rivals and the police closing in on him.",
    img: "../IMAGES/old/action/Samrajyam (1990).jpeg",
  },
  {
    title: "Spadikam",
    year: "1995",
    decr: "A rebellious son returns to his village, confronting his abusive, perfection-demanding father while living as a feared gangster.",
    img: "../IMAGES/old/action/spadikam.jpg",
  },
  {
    title: "Yoddha",
    year: "1992",
    decr: "A young man travels to Nepal and becomes the chosen one to protect a Rimpoche from a dangerous black magic sorcerer.",
    img: "../IMAGES/old/action/yodha.jpeg",
  },
];

const action = document.getElementById("action");

document.documentElement.style.setProperty(
  "--actionmovies",
  actionmovies.length
);

actionmovies.forEach((movie, index) => {
  const actioncard = document.createElement("div");
  actioncard.classList.add("actioncard");
  actioncard.style.setProperty("--action", index);

  actioncard.innerHTML = `
    <img src="${movie.img}" alt="movie${movie.title}pic">
    <div class="text">
    <h2>${movie.title}</h2>
    <span>${movie.year}</span>
    <p>${movie.decr}</p></div>`;

  action.appendChild(actioncard);
});

setTimeout(() => {
  document.getElementById("part2").textContent = "    STALGIC";
  document.getElementById("part1").classList.add("textmove");
  document.getElementById("part1").innerText = "N";
  document.getElementById("part2").classList.add("textmove1");
}, 4000);

setTimeout(() => {
  document.getElementById("netflex").style.display = "none";
  document.getElementById("netflex1").style.display = "flex";
  document.getElementById("box").style.border = "2px solid white";
}, 7000);
