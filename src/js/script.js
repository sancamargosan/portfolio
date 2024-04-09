const btnShowProjects = document.querySelector('.btn-show-projects');
const inactiveProjects = document.querySelectorAll('.project:not(.active)');
/* btnShowProjects.addEventListener('click', ()=>{
     inactiveProjects.forEach(inactiveProject =>{
         inactiveProject.classList.add('active');
     });
     btnShowProjects.classList.add('remove')

     vou manter o codigo só para ter um outro exemplo de como fazer porém prefiro fazer com uma função e chamar ela no onClick
 })*/

function showProjects(){
    inactiveProjects.forEach(inactiveProject =>{
        inactiveProject.classList.add('active');
    });
    btnShowProjects.classList.add('remove')
}