const ArryInfo = [
  {
    Project: 'Introduction to HTML & CSS',
    Work: 'Reading',
    Days: 'Monday',
    link: "https://www.theodinproject.com/lessons/foundations-elements-and-tags",
    P: 10
  },

  {
    Project: 'Git & GitHub & GitHub flow',
    Work: 'Reading',
    Days: 'Tuesday',
    link: "https://lab.github.com/",
    P: 10
  },

  {
    Project: 'Linters',
    Work: 'Watch',
    Days: 'Wednesday',
    link: "https://www.youtube.com/watch?v=HDQXWr5TOnI",
    P: 10
  },

  {
    Project: 'Linters',
    Work: 'Reading',
    Days: 'Wednesday',
    link: "https://github.com/microverseinc/linters-config",
    P: 10
  },

  {
    Project: 'Set up a "Hello Eflex Code" project',
    Work: 'Project',
    Days: 'Thursday',
    link: "https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/hello_microverse_project.md",
    P: 5
  },

  {
    Project: 'Week one Test',
    Work: 'Quiz',
    Days: 'Friday',
    link: "#",
    P: 10
  },

];

// console.log('ArryInfo', ArryInfo)

const rightNavContent = document.querySelector('.rightNavContent');
ArryInfo.forEach((element) => {
  const reander = `
  <div class="navRows">
  <p><a href=${element.link}>${element.Project}</a></p>
  <h4> ${element.Work} </h4>
  <h4> ${element.Days} </h4>
  <button id="LinkBtn" class="LinkBttn"> Submit </button>
</div>
  `;
  rightNavContent.innerHTML += reander;
});


// ArryInfo.forEach((element) => {
//   const LinkBtnt = document.querySelectorAll(".LinkBttn")

// LinkBtnt.forEach((btn) => {
//   console.log(element.P)
// if (`${element.Work}` > 7) {
 
//   btn.style.color = "red"
// } else {
//   btn.style.color = "blue"
// }
//   // {`${element.P}` != 'P' ? btn.innerHTML = "Me" : btn.innerHTML = "Boy"}
// })
// });

function Signouts() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keeploggedIn');
  window.location = 'index.html';
}

document.getElementById('SignOut').addEventListener('click', Signouts);

const Data = JSON.parse(sessionStorage.getItem('user'));

const NameShow = document.getElementById('NameShow');
NameShow.innerHTML += `Hello! ${Data.fullname}`;
  
const profile = document.querySelector('.profile');
profile.style.backgroundImage = `url(${Data.profile})`;

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} || +  ${today.getHours()}:${today.getMinutes()}`;

const DateShow = document.getElementById('Date');
DateShow.innerHTML += date;


const LinkSub = document.querySelectorAll(".LinkBttn")
LinkSub.forEach((BBt)=>{ 
  BBt.addEventListener('click', ()=>{
  let TakeLink = prompt("Input Your Git Rerpo")
})
})

// ArryInfo.forEach((props, index)=>{
//   if((props.Work) !== "project"){
//     const LinkBtnt = document.querySelectorAll(".LinkBttn")
//     // console.log(LinkBtnt)
//     LinkBtnt.style.color= "red"
//   }else{
//     const LinkBtnt = document.querySelector(".LinkBttn")
//     LinkBtnt.style.color= "green"
//   }
// })
