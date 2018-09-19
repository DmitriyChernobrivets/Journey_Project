'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var images = document.querySelectorAll('.gallery_item > img');
var main = document.querySelector('.gallery');

var Gallery = function () {
    function Gallery(items, parentNodess, defaultActiveItem) {
        _classCallCheck(this, Gallery);

        this.items = items;
        this.parentNodess = parentNodess;
        this.defaultActiveItem = defaultActiveItem;
    }

    _createClass(Gallery, [{
        key: 'galleryRendering',
        value: function galleryRendering() {
            var _this = this;

            var fullview = document.createElement('div');
            var fullviewImg = document.createElement('img');
            var itemList = document.createElement('ul');
            var main = document.createElement('div');
            var overlay = document.createElement('div');
            var closeBtn = document.createElement('button');

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
            this.items.forEach(function (el, li, img) {
                li = document.createElement('li');
                img = document.createElement('img');
                img.classList.add('items-view_img');
                li.classList.add('items-view_li');
                itemList.appendChild(li).appendChild(img);
                img.src = el.dataset.src;
                img.dataset.src = el.dataset.src;
            });

            //===============================First img captured===================================

            var defaultActiveItem = function defaultActiveItem() {
                itemList.childNodes.forEach(function (el) {
                    if (el.childNodes[0].dataset.src === _this.defaultActiveItem.dataset.src) {
                        el.firstChild.classList.add('modifier');
                        fullviewImg.src = el.childNodes[0].dataset.src;
                    } else return;
                });
            };
            defaultActiveItem();

            //==============================img list event and styles ========================================

            var galleryEventClick = function galleryEventClick(event) {
                var target = event.target;
                var imageList = document.querySelectorAll('.items-view_img');
                var fullviewImg = document.querySelector('.' + _this.parentNodess);

                if (target.nodeName === "IMG" && target !== fullviewImg) {

                    fullviewImg.src = target.dataset.src;
                    imageList.forEach(function (el) {
                        if (el !== target) {
                            el.classList.remove('modifier');
                        } else el.classList.add('modifier');
                    });
                }if (target.nodeName === 'BUTTON' || target === overlay) {
                    overlay.remove();
                    main.remove();
                } else return;
            };
            document.body.addEventListener('click', galleryEventClick);
        }
    }]);

    return Gallery;
}();

main.addEventListener('click', openGallery);

function openGallery(e) {
    var target = e.target;
    var firstImg = target.children[0];
    var newGallery = new Gallery(images, 'fullview-preview', firstImg);

    if (target.nodeName !== "A") return;
    newGallery.galleryRendering();
}