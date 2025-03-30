/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
    

showMenu('nav-toggle','nav-menu');


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});




sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



// project modals 

document.addEventListener('DOMContentLoaded', function() {
    
    const projects = [
        {
          title: "Expense Tracker App",
          image: "assets/img/expense-tracker.png",
          description: "A desktop expense tracker built with Electron.js, HTML, Tailwind CSS, and JavaScript. Users can add expenses, manage categories, and apply filters. Future updates will include budgeting and expense sharing.",
          githubLink: "https://github.com/mohammed-el-amine-kichah/Expense-Tracker"
        },
        {
          title: "FoodHub",
          image: "assets/img/foodhub-screens.png",
          description: "A food delivery mobile application built with Flutter and Firebase. It includes user authentication, a real-time database, and an intuitive UI for ordering meals from local restaurants.",
          githubLink: "https://github.com/mohammed-el-amine-kichah/"
        },
        {
          title: "Password Shield – Chrome Extension",
          image: "assets/img/password-shield.png",
          description: "A Chrome extension that helps users generate and manage secure passwords. Built with JavaScript and Chrome API, it ensures strong encryption and a seamless user experience.",
          githubLink: "https://github.com/mohammed-el-amine-kichah/Password-Strength-Checker-"
        },
        {
          title: "Gym Management System",
          image: "assets/img/gym-management.jpg",
          description: "A desktop application designed to manage gym memberships, track attendance, and handle subscriptions. Built using Java and MySQL for an efficient and scalable system.",
          githubLink: "https://github.com/yourusername/gym-management"
        },
        {
            title: "Navigi – Handcraft Job Platform",
            image: "assets/img/navigi-home.png",
            description: "A web application that connects handcraft professionals with job opportunities in Algeria. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
            githubLink: "https://github.com/mohammed-el-amine-kichah/NAVIGI-final-idea"
        },
        {
            title: "Bac Companion",
            image: "assets/img/bac-screens.png",
            description: "Bac Companion is a Flutter-based mobile application designed to help Algerian students prepare for the Baccalaureate exam. It provides quizzes, flashcards, past exam subjects, and educational resources tailored for the Scientific Stream (Sciences Expérimentales).",
            githubLink: "https://github.com/mohammed-el-amine-kichah/bac-helper-science"
        }
       
      ];
      
  
    // Get modal elements
    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const projectLinks = document.querySelectorAll('.work__img');
  
    // Open modal with project data
    function openModal(projectIndex) {
      const project = projects[projectIndex];
      
      // Set modal content
      document.getElementById('projectTitle').textContent = project.title;
      document.getElementById('projectImage').src = project.image;
      document.getElementById('projectDescription').textContent = project.description;
      document.getElementById('githubLink').href = project.githubLink;
      
      // Display modal
      modal.style.display = 'block';
      setTimeout(() => {
        modal.classList.add('show');
      }, 10);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  
    // Close modal
    function closeModal() {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300); // Match this to your transition duration
      document.body.style.overflow = 'auto'; // Allow scrolling again
    }
  
    // Add click event listeners to project thumbnails
    projectLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectIndex = this.getAttribute('data-project');
        openModal(projectIndex);
      });
    });
  
    // Close modal when clicking the close button
    closeButton.addEventListener('click', closeModal);
  
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    // Close modal on escape key press
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
  });