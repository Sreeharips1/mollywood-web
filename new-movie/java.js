// movie data

const thrilleroldmovies = [
  {
    title: "Silence",
    year: "2013",
    decr: "An advocate investigates a mysterious phone call that leads him into a deeper conspiracy.",
    img: "../IMAGES/new/thriller/_ SILENCE_ Movie Poster.jpeg",
  },
  {
    title: "Ayyappanum Koshiyum: Ajaam Pathira",
    year: "2020",
    decr: "A criminologist assists police in tracking down a serial killer targeting police officers.",
    img: "../IMAGES/new/thriller/ajaam pathira.jpeg",
  },
  {
    title: "Boothakaalam",
    year: "2022",
    decr: "A depressed young man and his mother experience terrifying supernatural events inside their home.",
    img: "../IMAGES/new/thriller/boothakalam.jpeg",
  },
  {
    title: "Ezra",
    year: "2017",
    decr: "A couple encounters paranormal events related to a dybbuk box that unleashes a vengeful spirit.",
    img: "../IMAGES/new/thriller/Ezra.jpeg",
  },
  {
    title: "Irul",
    year: "2021",
    decr: "A couple stranded on a rainy night takes shelter in a house where a dead body sparks a tense mystery.",
    img: "../IMAGES/new/thriller/irul.jpeg",
  },
  {
    title: "John Luther",
    year: "2022",
    decr: "A dedicated police officer investigates a series of disappearances even after losing his hearing.",
    img: "../IMAGES/new/thriller/John Luther (2022) =_ Poster.jpeg",
  },
  {
    title: "Kannur Squad",
    year: "2023",
    decr: "An elite police team tracks a violent criminal gang across multiple states.",
    img: "../IMAGES/new/thriller/kannur squad.jpeg",
  },
  {
    title: "Kishkindha Kaandam",
    year: "2023",
    decr: "A dark thriller revolving around intersecting lives affected by crime and desperation.",
    img: "../IMAGES/new/thriller/Kishkinda kandam.jpeg",
  },
  {
    title: "Kurup",
    year: "2021",
    decr: "The story of fugitive Sukumara Kurup, one of Kerala’s most wanted criminals.",
    img: "../IMAGES/new/thriller/Kurup.jpeg",
  },
  {
    title: "Neru",
    year: "2023",
    decr: "An advocate returns to fight a sensitive case involving a blind woman's pursuit of justice.",
    img: "../IMAGES/new/thriller/Movie _ Neru.jpeg",
  },
  {
    title: "Mukundan Unni Associates",
    year: "2022",
    decr: "A lawyer with zero ethics rises to success through manipulation and ruthless tactics.",
    img: "../IMAGES/new/thriller/Mukundan Unni Associates.jpeg",
  },
  {
    title: "Mumbai Police",
    year: "2013",
    decr: "An officer with amnesia tries to solve a murder case he was investigating before the accident.",
    img: "../IMAGES/new/thriller/mumbai-police.jpeg",
  },
  {
    title: "Operation Java",
    year: "2021",
    decr: "Two unemployed graduates assist the cyber cell in solving critical digital crime cases.",
    img: "../IMAGES/new/thriller/Operation Java.jpeg",
  },
  {
    title: "Pani",
    year: "2024",
    decr: "A psychological revenge thriller about a man returning to confront his dark past.",
    img: "../IMAGES/new/thriller/Pani- 2024- Malayalam Movie.jpeg",
  },
  {
    title: "Romans",
    year: "2013",
    decr: "Two escaped convicts hide in a village by posing as priests, leading to mysterious events.",
    img: "../IMAGES/new/thriller/Romans.jpeg",
  },
  {
    title: "Swathanthryam Ardharathriyil",
    year: "2018",
    decr: "Jacob, accused in a crime, plans a daring jailbreak with a group of inmates, leading to a tense and thrilling escape.",
    img: "../IMAGES/new/thriller/swadhrathyam arthrathri.jpeg",
  },
  {
    title: "Thangam",
    year: "2023",
    decr: "A crime thriller following a police investigation into a shocking murder case.",
    img: "../IMAGES/new/thriller/thangam.jpeg",
  },
  {
    title: "Villain",
    year: "2017",
    decr: "A retired police officer returns to investigate a series of murders that challenge him emotionally and intellectually.",
    img: "../IMAGES/new/thriller/villan.jpg",
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
    title: "Abraham Ozler",
    year: "2024",
    decr: "A seasoned police officer investigates a series of mysterious murders linked to his own past.",
    img: "../IMAGES/new/drama/_ABRAHAM OZLER.jpeg",
  },
  {
    title: "Paleri Manikyam: Oru Pathirakolapathakathinte Katha",
    year: "2009",
    decr: "A crime investigator reopens a 52-year-old murder case in a remote village, uncovering hidden truths.",
    img: "../IMAGES/new/drama/paleri manikyam.jpeg",
  },
  {
    title: "1983",
    year: "2014",
    decr: "A touching story of a cricket-loving youngster and his dreams in the backdrop of Kerala's cricket culture.",
    img: "../IMAGES/new/drama/1983.jpg",
  },
  {
    title: "Carbon",
    year: "2018",
    decr: "A man seeking a better life ventures into a forest in search of hidden treasure, facing danger and self-discovery.",
    img: "../IMAGES/new/drama/Carbon.jpeg",
  },
  {
    title: "Charlie",
    year: "2015",
    decr: "A young woman follows the artistic clues left by a mysterious traveler, leading to a magical journey.",
    img: "../IMAGES/new/drama/charlie.jpg",
  },
  {
    title: "Hridaya Poovam",
    year: "2025",
    decr: "A warm and emotional story exploring love, relationships, and the delicate bonds that shape human connections.",
    img: "../IMAGES/new/drama/hrydaya-poorvam.jpg",
  },
  {
    title: "Iratta",
    year: "2023",
    decr: "Twin brothers in the police force face a tragic incident that unravels dark secrets from their past.",
    img: "../IMAGES/new/drama/Iratta(2023).jpeg",
  },
  {
    title: "Kali",
    year: "2016",
    decr: "A short-tempered man’s anger spirals out of control, leading to dangerous consequences.",
    img: "../IMAGES/new/drama/kali.jpg",
  },
  {
    title: "Kumari",
    year: "2022",
    decr: "A newlywed woman confronts dark myths and supernatural forces in her ancestral land.",
    img: "../IMAGES/new/drama/Kumari.jpeg",
  },
  {
    title: "Malik",
    year: "2021",
    decr: "The rise and struggles of a community leader entangled in politics, crime, and rebellion.",
    img: "../IMAGES/new/drama/Malik.jpeg",
  },
  {
    title: "North 24 Kaatham",
    year: "2013",
    decr: "A man with OCD embarks on an unexpected road journey that changes his outlook on life.",
    img: "../IMAGES/new/drama/NORTH.jpg",
  },
  {
    title: "Pranaya Vilasam",
    year: "2023",
    decr: "A father, mother, and son rediscover their relationships through unexpected emotional revelations.",
    img: "../IMAGES/new/drama/Pranaya Vilasam.jpeg",
  },
  {
    title: "Sapthamashree Thaskaraha",
    year: "2014",
    decr: "Seven unlikely thieves join hands for a clever heist with unexpected twists.",
    img: "../IMAGES/new/drama/Sapthamashree Thaskaraha.jpeg",
  },
  {
    title: "Sarkhit",
    year: "2025",
    decr: "A simple man searches for job caught in a series of dramatic events that reshape his life.",
    img: "../IMAGES/new/drama/sarkit.jpg",
  },
  {
    title: "Ullozhukku",
    year: "2024",
    decr: "Two women in a grieving family face emotional storms as long-buried secrets surface.",
    img: "../IMAGES/new/drama/Ullozhukku (2024).jpeg",
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
    title: "Adi Kapyare Kootamani",
    year: "2015",
    decr: "A group of hostel friends land in hilarious trouble when a girl secretly enters a boys' hostel.",
    img: "../IMAGES/new/comedy/adi kapyare kootamani.jpeg",
  },
  {
    title: "CID Moosa",
    year: "2003",
    decr: "An aspiring detective gets into comical situations while trying to solve a major crime.",
    img: "../IMAGES/new/comedy/cid moosa.jpeg",
  },
  {
    title: "Neymar",
    year: "2023",
    decr: "A fun-filled tale about friendship and chaos created by a mischievous dog named Neymar.",
    img: "../IMAGES/new/comedy/Neymar.jpeg",
  },
  {
    title: "Nna Thaan Case Kodu",
    year: "2022",
    decr: "A hilarious courtroom drama where a common man fights a bizarre legal battle.",
    img: "../IMAGES/new/comedy/nna thaan case kod.jpeg",
  },
  {
    title: "Oru Thekkan Thallu Case",
    year: "2022",
    decr: "A petty quarrel spirals into a comical revenge saga in a small Kerala town.",
    img: "../IMAGES/new/comedy/Oru Thekkan Thallu Case.jpeg",
  },
  {
    title: "Padakkalam",
    year: "2024",
    decr: "A humorous story involving misunderstandings and unexpected twists within a family.",
    img: "../IMAGES/new/comedy/Padakkalam.jpeg",
  },
  {
    title: "Thillakam",
    year: "2003",
    decr: "Three strangers pretending to be someone else end up in a rollercoaster of comedic confusion.",
    img: "../IMAGES/new/comedy/thillakam.jpg",
  },
  {
    title: "Thundu",
    year: "2024",
    decr: "A light-hearted police comedy where simple problems turn into chaotic adventures.",
    img: "../IMAGES/new/comedy/Thundu.jpeg",
  },
  {
    title: "Varnyathil Aashanka",
    year: "2017",
    decr: "A group of ordinary men accidentally get involved in a robbery investigation.",
    img: "../IMAGES/new/comedy/Varnyathil Aashanka.jpeg",
  },
  {
    title: "Vazha",
    year: "2024",
    decr: "A fun story about love, aspirations, and the unpredictable events around a simple man’s life.",
    img: "../IMAGES/new/comedy/vazha.jpeg",
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
    title: "Anjarakallaan",
    year: "2021",
    decr: "A man becomes entangled in a series of dangerous conflicts that turn his life upside down.",
    img: "../IMAGES/new/action/anjarakallan.jpeg",
  },
  {
    title: "ARM",
    year: "2023",
    decr: "A mysterious mission pushes a man into a high-stakes world of action, secrets, and survival.",
    img: "../IMAGES/new/action/ARM.jpeg",
  },
  {
    title: "Bachelor Party",
    year: "2012",
    decr: "A group of friends set out on a wild mission, leading to chaos, crime, and unexpected twists.",
    img: "../IMAGES/new/action/bachler-party.jpeg",
  },
  {
    title: "Bheeshma Parvam",
    year: "2022",
    decr: "A former gangster’s life takes a violent turn as old rivalries and family conflicts resurface.",
    img: "../IMAGES/new/action/Bheesma Parvan.jpeg",
  },
  {
    title: "Empuraan",
    year: "2025",
    decr: "The rise of a powerful figure deepens as political and criminal worlds collide.",
    img: "../IMAGES/new/action/empuraan.jpeg",
  },
  {
    title: "Kala",
    year: "2021",
    decr: "A tense revenge-driven thriller where a young man faces the consequences of past mistakes.",
    img: "../IMAGES/new/action/Kala (2021).jpeg",
  },
  {
    title: "Kammara Sambhavam",
    year: "2018",
    decr: "A fictional retelling explores truth, manipulation, and political propaganda through history.",
    img: "../IMAGES/new/action/Kammara sambavam.jpeg",
  },
  {
    title: "Lokah Chapter 1",
    year: "2024",
    decr: "A man is drawn into a chaotic and violent chain of events that tests his strength and limits.",
    img: "../IMAGES/new/action/Lokah Chapter-1.jpeg",
  },
  {
    title: "Minnal Murali",
    year: "2021",
    decr: "A tailor unexpectedly gains superpowers and must face a dangerous enemy born from the same event.",
    img: "../IMAGES/new/action/Minnal Murali.jpeg",
  },
  {
    title: "Ranam",
    year: "2018",
    decr: "Set in Detroit’s crime underworld, a man struggles between loyalty, violence, and redemption.",
    img: "../IMAGES/new/action/Ranam.jpeg",
  },
  {
    title: "Thallumaala",
    year: "2022",
    decr: "A colorful action-comedy following chaotic fights, friendships, and wild unexpected events.",
    img: "../IMAGES/new/action/Thallumaala.jpeg",
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
  document.getElementById("textcontainer").style.display = "none";
  document.getElementById("netflex1").style.display = "block";
  document.getElementById("box").style.border = "2px solid white";
}, 9000);
