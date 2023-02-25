
function setNavActive(link){
    const nav_grp = document.querySelectorAll('.nav_grp div');
    for(let i = 0; i< nav_grp.length;i++){
        nav_grp[i].classList.remove('active')
    }
    const svg_grp = document.querySelectorAll('.navbar svg');
    for(let i = 0; i< svg_grp.length;i++){
        svg_grp[i].classList.remove('active')
    } 
    
    link.classList.add('active');
    link.querySelector('svg').classList.add('active');
}