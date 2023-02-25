function setTabActive(link){
    const tab_grp = document.querySelectorAll('.tabs span');
    for(let i = 0; i< tab_grp.length;i++){
        tab_grp[i].classList.remove('active')
    }
    link.classList.add('active');
}