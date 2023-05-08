const projectConfig = [
  {
    title: "Sigh-up Form",
    projectImgUrl: "img/project-img/sign-up-form.png",
    href: "https://chinghanhuang.github.io/sign-up-form/",
  },
  {
    title: "Etch-a-Sketch",
    projectImgUrl: "img/project-img/etch-a-sketch.png",
    href: "https://chinghanhuang.github.io/etch-a-sketch/",
  },
  {
    title: "Calculator",
    projectImgUrl: "img/project-img/calculator.png",
    href: "https://chinghanhuang.github.io/calculator/",
  },
  {
    title: "Rock, Paper, Scissors",
    projectImgUrl: "img/project-img/rock-paper-scissors.png",
    href: "https://chinghanhuang.github.io/rock-paper-scissors/",
  },
  {
    title: "Library",
    projectImgUrl: "img/project-img/sign-up-form.png",
    href: "",
  },
];

const createPrjCards = () => {
  const projectsContainer = document.getElementById("projects");
  for (project of projectConfig) {
    let projectCard = createPrjCard(project);
    projectsContainer.appendChild(projectCard);
  }
};

const createPrjCard = (project) => {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  let projectImg = createPrjImg(project);
  let projectContent = creatPrjContent(project);
  let cardControls = createCardControls();

  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectContent);
  projectCard.appendChild(cardControls);

  return projectCard;
};

const createPrjImg = (project) => {
  let projectImg = document.createElement("a");
  projectImg.classList.add("project-image");
  projectImg.style.backgroundImage = `url(${project.projectImgUrl})`;
  projectImg.href = project.href;
  projectImg.target = "_blank";
  return projectImg;
};

const creatPrjContent = (project) => {
  let projectContent = document.createElement("div");
  let projectTitle = createPrjTitle(project.title);

  projectContent.appendChild(projectTitle);

  return projectContent;
};

const createPrjTitle = (title) => {
  let projectTitle = document.createElement("h2");
  projectTitle.innerText = title;
  return projectTitle;
};

const createCardControls = () => {
  let cardControls = document.createElement("div");
  cardControls.classList.add("card-controls");

  let cardFavourite = document.createElement("div");
  cardFavourite.classList.add("card-icon");
  cardFavourite.classList.add("favourite");

  let cardView = document.createElement("div");
  cardView.classList.add("card-icon");
  cardView.classList.add("view");

  let cardShare = document.createElement("div");
  cardShare.classList.add("card-icon");
  cardShare.classList.add("share");

  cardControls.appendChild(cardFavourite);
  cardControls.appendChild(cardView);
  cardControls.appendChild(cardShare);

  return cardControls;
};

createPrjCards();
