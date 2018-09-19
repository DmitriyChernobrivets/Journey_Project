'use strict';


const images = document.querySelectorAll('.gallery_item > img');
const main = document.querySelector('.gallery');

class Gallery {
    constructor(items, parentNodess, defaultActiveItem) {
        this.items              = items;
        this.parentNodess       = parentNodess;
        this.defaultActiveItem  = defaultActiveItem;
    }

    galleryRendering() {

        const fullview      = document.createElement('div');
        const fullviewImg   = document.createElement('img');
        const itemList      = document.createElement('ul');
        const main          = document.createElement('div');
        const overlay       = document.createElement('div');
        const closeBtn      = document.createElement('button');

//==========================================Creating gellary======================================

        closeBtn.classList.add('closeBtn');
        overlay.classList.add('overlay');
        main.classList.add('image-gallery', 'js-image-gallery');
        fullview.classList.add('fullview');
        fullviewImg.classList.add(this.parentNodess);
        itemList.classList.add('items-view');
        document.body.appendChild(overlay);
        document.body.appendChild(main);
        main.append(fullview, itemList, closeBtn);
        fullview.appendChild(fullviewImg);
        this.items.forEach((el, li, img) => {
            li = document.createElement('li');
            img = document.createElement('img');
            img.classList.add('items-view_img');
            li.classList.add('items-view_li');
            itemList.appendChild(li).appendChild(img);
            img.src = el.dataset.src;
            img.dataset.src = el.dataset.src;

        });

//===============================First img captured===================================

        const defaultActiveItem = () => {
            itemList.childNodes.forEach(el => {
                if (el.childNodes[0].dataset.src === this.defaultActiveItem.dataset.src) {
                    el.firstChild.classList.add('modifier');
                    fullviewImg.src = el.childNodes[0].dataset.src;
                } else return;
            })
        };
        defaultActiveItem();

//==============================img list event and styles ========================================

        const galleryEventClick = (event) => {
            const target        = event.target;
            const imageList     = document.querySelectorAll('.items-view_img');
            const fullviewImg   = document.querySelector(`.${this.parentNodess}`);

            if (((target.nodeName === "IMG") && (target !== fullviewImg))) {

                fullviewImg.src = target.dataset.src;
                imageList.forEach(el => {
                    if ((el !== target)) {
                        el.classList.remove('modifier')
                    } else
                        el.classList.add('modifier')
                })
            } if ((target.nodeName === 'BUTTON') || (target === overlay)) {
                overlay.remove();
                main.remove();
            }
            else return;
        }
        document.body.addEventListener('click', galleryEventClick);
    }
}

main.addEventListener('click', openGallery);

function openGallery(e) {
    const target             = e.target;
    const firstImg           = target.children[0];
    const newGallery         = new Gallery(images, 'fullview-preview', firstImg);

    if (target.nodeName !== "A") return;
    newGallery.galleryRendering();
}
