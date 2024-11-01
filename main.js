window.addEventListener('DOMContentLoaded', () => {
  /* Стрелка вверх, кликаем идет вверх

  ***********************************************/

  const arrowTop = document.querySelector(".arrowTop");

  // Сколько мы прокрутили, и наш интервал чтоб могли остановить его

  var scrolled, timer;

  // Переход в самое начало

  arrowTop.addEventListener("click", () => {
    scrolled = window.pageYOffset;

    moveTop();
  });

  // Передвигаемся вверх, пока не достигнем 0 позиции

  function moveTop() {
    if (scrolled > 0) {
      // Это и есть наша анимация, каждую 0.01 секунду передвигаемся на 100 px вверх

      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(moveTop, 10);
    } else {
      // Останавливаем SetInterval, и позицию ставим 0.

      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }

  // Стрелка Вверх, появление и исчезновение

  function arrowTopApp() {
    // Если положение нашей окны, меньше чем положение начального окна. Показывается стрелка

    if (window.pageYOffset > document.documentElement.clientHeight - 100) {
      arrowTop.style.display = "block";
    } else {
      arrowTop.style.display = "none";
    }
  }

  // Скролим появляется, Стрелка вверх

  window.addEventListener("scroll", arrowTopApp);

  /* Позиционирование header ставляем fixed

  **********************************************/

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
      header.style.position = "fixed";
      header.style.paddingBottom = "2%";
      header.style.animationName = "fade";
      header.style.animationDuration = "1s";
    } else {
      header.style.position = "sticky";
      header.style.paddingBottom = "1%";
      header.style.animationName = "";
      header.style.animationDuration = "";
    }
  });

  /* Панель навигации - Переход по странице

  ***********************/

  // Обрабатываем то что внутри <<href="#">>

  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", (event) => {
      event.preventDefault();

      const e = event.target;

      const id = e.getAttribute("href");

      // Если внутри него, не пусто. Если есть чтото помимо <<#>>.

      if (id) {
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: 'start',
        });
      } else {
        // Перезагрежает страницу, если не находит ссылку

        location.href = location.href;
      }
    });
  }

  /* Carousel-Image - Booco

  ************************/

  const carouselImages = document.querySelectorAll(".booco__gallery__inner"), 
        booco__right = document.querySelector(".icon__right"), 
        booco__left = document.querySelector(".icon__left");

  var indexImage = 0;

  function activeImage(n) {
    for(var carousel of carouselImages) {
      carousel.classList.remove('active__image');
    }

    carouselImages[n].classList.add('active__image');
  }

  function plusImage() {
    if (indexImage == carouselImages.length - 1) {
      indexImage = 0;
      activeImage(indexImage);
    } else {
      indexImage++;
      activeImage(indexImage);
    }
  }

  function minusImage() {
    if (indexImage == 0) {
      indexImage = carouselImages.length - 1;
      activeImage(indexImage);
    } else {
      indexImage--;
      activeImage(indexImage);
    }
  }

  function nextImage() {
    booco__right.addEventListener("click", plusImage);
  }

  function prevImage() {
    booco__left.addEventListener("click", minusImage);
  }

  // Изображение меняется каждые 5 сек

  setInterval(plusImage, 5000);

  nextImage();
  prevImage();
  
  /* Advantage, Carousel переход иконок.

  ********************************************/

  const addvantageIcon = document.querySelectorAll(".advantage__blocks"),
        addvantageRight = document.querySelector(".advantage--icon__right"),
        addvantageLeft = document.querySelector(".advantage--icon__left");

  var indexIcon = addvantageIcon.length - 1;

  function replaceActiveIcon(n) {
    addvantageIcon.forEach((item) => {
      item.classList.remove("active__icon");
    });

    addvantageIcon.forEach((item, i) => {
      if (n != i) {
        item.classList.add("active__icon");
      }
    });
  }

  function plusIcon() {
    if (indexIcon == addvantageIcon.length - 1) {
      indexIcon = 0;
      replaceActiveIcon(indexIcon);
    } else {
      indexIcon++;
      replaceActiveIcon(indexIcon);
    }
  }

  function minusIcon() {
    if (indexIcon == 0) {
      indexIcon = addvantageIcon.length - 1;
      replaceActiveIcon(indexIcon);
    } else {
      indexIcon--;
      replaceActiveIcon(indexIcon);
    }
  }

  function nextIcon() {
    addvantageRight.addEventListener("click", plusIcon);
  }

  function prevIcon() {
    addvantageLeft.addEventListener("click", minusIcon);
  }

  // Изображение меняется каждые 5 сек

  setInterval(plusIcon, 5000);

  nextIcon();
  prevIcon();

  // Сделать его в виде перемещеия пикселями.

  /* Carousel-Image - Offer

  ************************/

  const offerImages = document.querySelectorAll(".offer__occupied"),
        offerRight = document.querySelector(".offer--icon__right"),
        offerLeft = document.querySelector(".offer--icon__left");

  var offerIndex = 0;

  function activeOfferImage(n) {
    for(var carousel of offerImages) {
      carousel.classList.remove('active__offer');
    }

    offerImages[n].classList.add('active__offer');
  }

  function plusOfferImage() {
    if (offerIndex == offerImages.length - 1) {
      offerIndex = 0;
      activeOfferImage(offerIndex);
    } else {
      offerIndex++;
      activeOfferImage(offerIndex);
    }
  }

  function minusOfferImage() {
    if (offerIndex == 0) {
      offerIndex = offerImages.length - 1;
      activeImage(offerIndex);
    } else {
      offerIndex--;
      activeImage(offerIndex);
    }
  }

  function nextOfferImage() {
    offerRight.addEventListener("click", plusOfferImage);
  }

  function prevOfferImage() {
    offerLeft.addEventListener("click", minusOfferImage);
  }

  // Изображение меняется каждые 5 сек

  setInterval(plusOfferImage, 5000);

  nextOfferImage();
  prevOfferImage();

  /* Subscribe

  *********************/

  const subscribe = document.querySelectorAll(".subscribe"),
        subscribeText = document.querySelector(".subscribe__button");

  // Подписатся можно нажать 1 раз.

  var oneTime = 0;

  subscribe.forEach((item) => {
    item.addEventListener("click", () => {
      if (oneTime == 0) {
        var pos = document.documentElement.scrollTop;
        subscribeText.style.display = 'flex';
        subscribeText.style.top += `${pos + 150}px`;
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        header.style.background = "rgba(0,0,0,0.4)";
        subscribeText.style.animationName = "fade";
        subscribeText.style.animationDuration = ".6s";
        oneTime++;
      } else {
        alert("Вы уже подписаны!");
      }

      // Через 1,5 секунд модульное окно исчезает

      setTimeout(dissapearSubscribe, 1500);
    });
  });
  
  // Функция исчезновения модульного окна

  function dissapearSubscribe() {
    document.body.style.backgroundColor = "white";
    header.style.background = "aliceblue";
    subscribeText.style.display = 'none';
  }

  /* Быстрый запрос

  *************************/

  const fastRequest = document.querySelectorAll(".request__icon");

  fastRequest.forEach((item) => {
    item.addEventListener("click", () => {
      location.href = location.href;
    });
  });

  /* Панель Навигации

  **********************/

  const bar = document.querySelector('.icon__link'),
        links = document.querySelectorAll('.nav__link'),
        icon__bar = document.querySelector('.icon__link'),
        nav = document.querySelector('.nav');

  // Доступ к изображениям и блокам <<Section>>, чтоб менять их

  let allImages = document.getElementsByTagName("img"),
      allSections = document.getElementsByTagName("section");

  // Если четное то открываем, если нет закрываем

  var i = 0;

  bar.addEventListener('click', () => {
    if (i % 2 == 0) {
      links.forEach((item) => {
        item.classList.remove('hide');
        nav.style.backgroundColor = '#2fbaff';
        nav.style.position = 'absolute';
        nav.style.height = '100vh';
        nav.style.animationName = 'fade';
        nav.style.animationDuration = '.3s';
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.opacity = "0.4";
        }

        for (let i = 0; i < allSections.length; i++) {
          allSections[i].style.opacity = "0.4";
        }

        header.style.background = "rgba(0,0,0,0.4)";
        icon__bar.innerHTML =
          '<i class="fa-solid fa-x" style="font-size: calc(16px + 1vh);"></i>';
      });
    } else {
      links.forEach((item) => {
        item.classList.add('hide');
        nav.style.position = 'unset';
        nav.style.height = '0';
        nav.style.animation = 'none';
        nav.style.background = 'none';
        document.body.style.backgroundColor = "white";

        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.opacity = "1";
        }

        for (let i = 0; i < allSections.length; i++) {
          allSections[i].style.opacity = "1";
        }

        header.style.background = "aliceblue";
        icon__bar.innerHTML = '<i class="fa-solid fa-bars">';
      });
    }

    i++;
  });

});
