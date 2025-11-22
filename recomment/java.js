const topmovies = [
  {
    title: "100 Days of Love",
    year: "2015",
    decr: "A feel-good romantic tale of two people who rediscover love after unexpected encounters.",
    img: "../IMAGES/recommended/100daysoflove.jpeg",
  },
  {
    title: "Adam Joan",
    year: "2017",
    decr: "A dark emotional thriller following a man's search for his missing wife overseas.",
    img: "../IMAGES/recommended/adam.jpg",
  },
  {
    title: "Ajagajantharam",
    year: "2021",
    decr: "A high-octane action drama revolving around chaos during a temple festival.",
    img: "../IMAGES/recommended/ajagajadhram.jpeg",
  },
  {
    title: "Ambili",
    year: "2019",
    decr: "A heartwarming story about an innocent village boy and his pure outlook on life.",
    img: "../IMAGES/recommended/ambili.jpeg",
  },
  {
    title: "Amen",
    year: "2013",
    decr: "A musical romantic comedy about love, miracles, and a struggling church band.",
    img: "../IMAGES/recommended/Amen.jpeg",
  },
  {
    title: "A.R.M",
    year: "2024",
    decr: "A fun heist-comedy involving friends caught in unexpected trouble.",
    img: "../IMAGES/recommended/ARM.jpg",
  },
  {
    title: "Aavesham",
    year: "2024",
    decr: "A stylish action-comedy about a gangster who forms an unlikely bond with college students.",
    img: "../IMAGES/recommended/avesham.jpeg",
  },
  {
    title: "Bramayugam",
    year: "2024",
    decr: "A black-and-white horror-fantasy set in ancient Kerala exploring power and dark rituals.",
    img: "../IMAGES/recommended/BRAMAYUGAM.jpg",
  },
  {
    title: "Devadoothan",
    year: "2000",
    decr: "A musical mystery where a composer encounters supernatural elements while creating a masterpiece.",
    img: "../IMAGES/recommended/devadhoothan.jpeg",
  },
  //   {
  //     title: "Ennu Ninte Moideen",
  //     year: "2015",
  //     decr: "A tragic real-life romance between Moideen and Kanchanamala set in 1960s Kerala.",
  //     img: "../IMAGES/recommended/Ennu ninte Moideen.jpeg",
  //   },
  {
    title: "Gaganachari",
    year: "2023",
    decr: "A sci-fi dystopian comedy featuring aliens, survival, and quirky characters.",
    img: "../IMAGES/recommended/GAGANACHARI.png",
  },
  {
    title: "Guppy",
    year: "2016",
    decr: "A touching drama about a young boy and an engineer whose lives collide in unexpected ways.",
    img: "../IMAGES/recommended/guppy.jpeg",
  },
  {
    title: "Jagratha",
    year: "1989",
    decr: "A crime thriller following two police officers solving a disturbing mystery.",
    img: "../IMAGES/recommended/jagratha.jpg",
  },
  {
    title: "Jallikattu",
    year: "2019",
    decr: "A wild survival drama where a buffalo escape causes chaos in a village.",
    img: "../IMAGES/recommended/jellikat.jpeg",
  },
  {
    title: "Joji",
    year: "2021",
    decr: "A modern adaptation of Macbeth showing the downfall of an ambitious young man.",
    img: "../IMAGES/recommended/Joji.jpeg",
  },
  {
    title: "Kammatipaadam",
    year: "2016",
    decr: "A raw action-drama highlighting land-mafia violence and lost friendships.",
    img: "../IMAGES/recommended/Kammatipaadam.jpeg",
  },
  {
    title: "Kayamkulam Kochunni",
    year: "2018",
    decr: "A historical action film about the legendary Kerala thief who became a hero of the poor.",
    img: "../IMAGES/recommended/kayamkulam kochunni.jpeg",
  },
  {
    title: "Kettyolaanu Ente Malakha",
    year: "2019",
    decr: "A sensitive drama exploring marriage, innocence, and personal growth.",
    img: "../IMAGES/recommended/Kettyolaanu Ente Malakha.jpeg",
  },
  {
    title: "Kooman",
    year: "2022",
    decr: "A gripping investigative thriller about a police officer entangled in mysterious crimes.",
    img: "../IMAGES/recommended/Kooman.jpg",
  },
  {
    title: "Maheshinte Prathikaaram",
    year: "2016",
    decr: "A light-hearted drama about a photographer seeking revenge for an unexpected humiliation.",
    img: "../IMAGES/recommended/maheshinte prethikaram.jpeg",
  },
  {
    title: "Manjummel Boys",
    year: "2024",
    decr: "A survival thriller based on the real Guna Caves rescue incident.",
    img: "../IMAGES/recommended/MANJUMMEL-BOYS .jpeg",
  },
  {
    title: "Mukundan Unni Associates",
    year: "2022",
    decr: "A dark satire following an unethical lawyer’s ruthless rise to success.",
    img: "../IMAGES/recommended/mukundan unni.webp",
  },
  {
    title: "Neelakasham Pachakadal Chuvanna Bhoomi",
    year: "2013",
    decr: "A road-trip film about biker friends travelling across India to find purpose and love.",
    img: "../IMAGES/recommended/Neelakasham.jpeg",
  },
  {
    title: "Rorschach",
    year: "2022",
    decr: "A psychological thriller where a man hunts for answers behind a mysterious disappearance.",
    img: "../IMAGES/recommended/roshak.jpeg",
  },
  {
    title: "Saudi Vellakka",
    year: "2022",
    decr: "A courtroom drama examining a decades-old petty case and the lives it affects.",
    img: "../IMAGES/recommended/Saudi Vellakka.jpeg",
  },
  {
    title: "Thalavattam",
    year: "1986",
    decr: "A psychological drama set inside a mental institution, inspired by a classic novel.",
    img: "../IMAGES/recommended/thalavattam.jpeg",
  },
  {
    title: "Thinkalazhcha Nishchayam",
    year: "2021",
    decr: "A satirical family drama set around an arranged-marriage fixation.",
    img: "../IMAGES/recommended/Thinkalazhcha-Nischayam.jpg",
  },
  {
    title: "Thudarum",
    year: "1990",
    decr: "A family-drama exploring relationships, emotions, and the challenges that test them.",
    img: "../IMAGES/recommended/THUDARUM.jpg",
  },
  {
    title: "Ustad Hotel",
    year: "2012",
    decr: "A beautiful drama about a young chef discovering purpose, love, and compassion through food and family.",
    img: "../IMAGES/recommended/ustad hotel (2012).jpeg",
  },
  {
    title: "Varathan",
    year: "2018",
    decr: "A tense survival thriller where a couple faces escalating danger after moving to a remote village.",
    img: "../IMAGES/recommended/Varathan.jpeg",
  },
  {
    title: "Vidheyan",
    year: "1993",
    decr: "A powerful drama depicting the psychological struggle between a submissive servant and his authoritarian master.",
    img: "../IMAGES/recommended/Vidheyan.jpeg",
  },
];

const container2 = document.getElementById("container2");

container2.innerHTML = "";

topmovies.forEach((movie, index) => {
  const card = document.createElement("div");
  const cardinner = document.createElement("div");
  const cardfront = document.createElement("div");
  const cardimg = document.createElement("img");
  const cardback = document.createElement("div");
  const head = document.createElement("h2");
  const span = document.createElement("span");
  const text = document.createElement("p");

  card.classList.add("card");
  cardinner.classList.add("card-inner");
  cardfront.classList.add("card-front");
  cardback.classList.add("card-back");

  card.appendChild(cardinner);
  cardinner.appendChild(cardfront);
  cardfront.appendChild(cardimg);
  cardinner.appendChild(cardback);
  cardback.appendChild(head);
  cardback.appendChild(span);
  cardback.appendChild(text);

  cardimg.src = movie.img;
  head.textContent = movie.title;
  span.textContent = movie.year;
  text.innerHTML = movie.decr;

  container2.appendChild(card);
});
