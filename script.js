const projectConfig = [
  {
    title: "Sigh-up Form",
    projectImgUrl: "img/project-img/sign-up-form.png",
    description: "123456789",
  },
  {
    title: "Library",
    projectImgUrl: "img/project-img/sign-up-form.png",
    description: "123456789123456789123456789123123",
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

  let projectImg = createPrjImg(project.projectImgUrl);
  let projectContent = creatPrjContent(project);
  let cardControls = createCardControls();

  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectContent);
  projectCard.appendChild(cardControls);

  return projectCard;
};

const createPrjImg = (imgUrl) => {
  let projectImg = document.createElement("div");
  projectImg.classList.add("project-image");
  projectImg.style.backgroundImage = `url(${imgUrl})`;
  return projectImg;
};

const creatPrjContent = (project) => {
  let projectContent = document.createElement("div");
  let projectTitle = createPrjTitle(project.title);
  let projectDescription = createPrjDescription(project.description);

  projectContent.appendChild(projectTitle);
  projectContent.appendChild(projectDescription);

  return projectContent;
};

const createPrjTitle = (title) => {
  let projectTitle = document.createElement("h2");
  projectTitle.innerText = title;
  return projectTitle;
};

const createPrjDescription = (description) => {
  let projectDescription = document.createElement("p");
  projectDescription.innerHTML = description;
  return projectDescription;
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
