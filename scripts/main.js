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
        parent.replaceChild(img, parent.firstChild);
        parent.replaceChild(p, parent.lastChild);
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

