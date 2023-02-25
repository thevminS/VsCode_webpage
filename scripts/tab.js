function setTabActive(link){
    const tab_grp = document.querySelectorAll('.tabs span');
    for(let i = 0; i< tab_grp.length;i++){
        tab_grp[i].classList.remove('active')
    }
    link.classList.add('active');
}

function onTabClick(name){
    if(name =='home'){
        const nav1 = document.getElementById('nav_home');
        onNavClick(nav1, name)
    }else if(name =='project'){
        const nav2 = document.getElementById('nav_project');
        onNavClick(nav2, name);
    }else if(name == 'contact'){
        const nav3 = document.getElementById('nav_contact');
        onNavClick(nav3, name);
    }
}