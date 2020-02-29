// Our Service Section
class TabPanel {
    constructor (tabId, imageId, textId) {
        this.tabID = tabId;
        this.imageID = imageId;
        this.textID = textId;
    }

    setActive () {
        this.clearActiveAll();
        this.setContent();
        let tabs = document.querySelectorAll(".tab-list-element");
        for (let i = 0; i < tabs.length; i++){
            if(tabs[i].textContent == tabList[this.tabID]){
                tabs[i].classList.add("active-tab");
            }
        }
    }
    clearActiveAll () {
        let activeTabs = document.querySelectorAll(".active-tab");
        activeTabs.forEach((item) => {
            item.classList.remove("active-tab");
        })
    }
    setContent () {
        let img = document.createElement("img");
        img.src = imageList[this.imageID];
        let p = document.createElement("p");
        p.textContent = textList[this.textID];

        let parent = document.querySelector(".content-panel");
        // parent.replaceChild(img, parent.firstChild);
        // parent.replaceChild(p, parent.lastChild);
        parent.firstChild.replaceWith(img);
        parent.lastChild.replaceWith(p);
    }
    
};



let tabs = [];
for (let i = 0; i < tabList.length; i++) {
    let tab = new TabPanel(i,i,i);
    tabs.push(tab);
}

let domTabs = document.querySelectorAll(".tab-list-element");
for (let i = 0; i < tabs.length; i++) {
    domTabs[i].addEventListener("click", () => {
        tabs[i].setActive();
    })
}
tabs[0].setActive();





// Our Amazing Works Section
let loadMore = document.querySelector('.loadMore')
let levelCount = 0;  // For load more button
let filterContainer = document.querySelector('.content-container')
let filterListTabs = document.querySelector('.filter-tabs-list');
filterListTabs.addEventListener("click", (e) => {
    if (e.target.dataset.filter == "All"){
        ToggleFilterActive(e.target)
        setImageContentAll(e.target);
    }
    if (e.target.dataset.filter == "Graphic"){
        setImageContent(e.target, "Graphic");
    }
    if (e.target.dataset.filter == "Web"){
        setImageContent(e.target, "Web");
    }
    if (e.target.dataset.filter == "Landing"){
        setImageContent(e.target, "Landing");
    }
    if (e.target.dataset.filter == "WordPress"){
        setImageContent(e.target, "WordPress");

    }
})

let imgs = document.getElementsByClassName('filter-item')

// Get random numbers for All filter section
let randomArray = shuffle();
function shuffle() {
    let array = [];
    for (let i = 0; i < 48; i++) array.push(i);
    array.sort(() => Math.random() - 0.5);
    return array;
}


// Toggle active status on tab
function ToggleFilterActive(item) {
    for (let i = 0; i < filterListTabs.children.length; i++){
        if(filterListTabs.children[i] != item)
        filterListTabs.children[i].classList.remove('filter-active');
    }
    item.classList.add('filter-active')

}


// Set shuffled images on All tab click
function setImageContentAll(item) {
    loadMore.style.display = 'block';
    ToggleFilterActive(item)
    if(levelCount == 0) {
        let str = '';
        for (let i = 0; i < 12; i++) {
            str += FilterImages[randomArray[i]].image;
        }
        filterContainer.innerHTML = str;

    }

    if(levelCount == 1) {
        document.querySelector('.fifth-section').style.height = '1820px';
        let str = filterContainer.innerHTML;
        for (let i = 12; i < 24; i++) {
            str += FilterImages[randomArray[i]].image;
        }
        filterContainer.innerHTML = str;
    }

    if(levelCount == 2) {
        document.querySelector('.fifth-section').style.height = '2300px';
        let str = filterContainer.innerHTML;
        for (let i = 24; i < 36; i++) {
            str += FilterImages[randomArray[i]].image;
        }
        filterContainer.innerHTML = str;
        loadMore.style.display = 'none';

    }
    addEventImg();
}

// Set filtered images on tab click
function setImageContent(item, type){
    document.querySelector('.fifth-section').style.height = '1150px';
    ToggleFilterActive(item)
        let str = '';
        for (let i = 0; i < FilterImages.length; i++){
            if (FilterImages[i].type == type) {
                str += FilterImages[i].image;
            }
        }
        filterContainer.innerHTML = str;
        loadMore.style.display = 'none';
        levelCount = 0;
        addEventImg();
}

// Load more button click event
loadMore.addEventListener("click", () => {
    levelCount++;
    setImageContentAll(document.querySelector('[data-filter="All"]'));
})


setImageContentAll(document.querySelector('[data-filter="All"]'));

// Hover images for details 
function addEventImg() {
    
    for(let item of imgs) {
        item.addEventListener("mouseenter", () => {
            let hoverBox = document.createElement('div');
            hoverBox.classList.add('hoverBox');

            let btnContainer = document.createElement('div');
            btnContainer.classList.add('btn-container');
            btnContainer.classList.add('row');

            let linkBtn = document.createElement('button')
            linkBtn.classList.add('link-btn');
            linkBtn.append(document.createElement('div'));

            let searchBtn = document.createElement('button')
            searchBtn.classList.add('search-btn');
            searchBtn.append(document.createElement('div'));


            let p1 = document.createElement('p') ;
            p1.classList.add('big-text');
            p1.textContent = "Creative Design";

            let p2 = document.createElement('p');
            p2.classList.add('small-text');
            console.log(item.dataset.type);
            if(item.dataset.type == "Graphic") p2.textContent = "Graphic Design";
            if(item.dataset.type == "Web") p2.textContent = "Web Design";
            if(item.dataset.type == "Landing") p2.textContent = "Landing Pages";
            if(item.dataset.type == "WordPress") p2.textContent = "WordPress";

            btnContainer.append(linkBtn,searchBtn);
            hoverBox.append(btnContainer,p1,p2);
            item.replaceWith(hoverBox);
            hoverBox.addEventListener("mouseleave", () => {
             hoverBox.replaceWith(item);
            })


        })
    }
}

