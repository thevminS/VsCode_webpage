
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

function onNavClick(link, name){
    setNavActive(link);
    if(name =='home'){
        const tab1 = document.getElementById('tab1');
        setTabActive(tab1);
    }else if(name =='project'){
        const tab2 = document.getElementById('tab2');
        setTabActive(tab2);
    }else if(name == 'contact'){
        const tab3 = document.getElementById('tab3');
        setTabActive(tab3);
    }
}