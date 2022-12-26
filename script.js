let images = [{
  url: "./img/image1.png",
  title: "ROSTOV-ON-DON, ADMIRAL",
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
}, {
  url: "./img/image2.png",
  title: "SOCHI THIEVES",
    city: "Sochi<br> Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
}, {
  url: "./img/image3.png",
  title: "ROSTOV-ON-DON PATRIOTIC",
      city: "Rostov-on-Don<br> LCD admiral",
      area: "93 m2",
      time: "3 months",
      cost: "Upon request"
}];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    dots: true,
    autoplay: false
  };
  let city = document.querySelector('.city');
  let area = document.querySelector('.area');
  let time = document.querySelector('.time');
  let cost = document.querySelector('.cost');
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderTitles = document.querySelector(".slider__titles");
  let projectDesc = document.querySelector(".project_items");
  
  initImages();
  initArrows();
  initDesc();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }
  
   
function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;

    });
  }
  
function initDesc() {
    images.forEach((image, index) => {
      let descDiv = `<div class="project_item n${index} ${index === 0? "active" : ""}" data-index="${index}"><div class="project_item_desc">
        <h3>CITY:</h3>
        <span class="city">${images[index].city}</span>
      </div>
      <div class="project_item_desc">
        <h3>APARTMENT AREA:</h3>
        <span class="area">${images[index].area}</span>
      </div>
      <div class="project_item_desc">
        <h3>REPAIR TIME:</h3>
        <span class="time">${images[index].time}</span>
      </div>
      <div class="project_item_desc">
        <h3>REPAIR COST:</h3>
        <span class="cost">${images[index].cost}</span>
      </div>  
</div>`;
      projectDesc.innerHTML += descDiv;

    });
      projectDesc.querySelectorAll(".project_item").forEach(descDiv => {
      descDiv.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        console.log('text');
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
     
  function initTitles() {
    images.forEach((image, index) => {
      let title = `<div class="slider__titles-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
      sliderTitles.innerHTML += title;
    });
    sliderTitles.querySelectorAll(".slider__titles-item").forEach(title => {
      title.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  


  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    projectDesc.querySelector(".active").classList.remove("active");
    projectDesc.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) {
      sliderTitles.querySelector(".active").classList.remove("active");
      sliderTitles.querySelector(".n" + num).classList.add("active");
    }
  }

  
    
  function cropTitle(title, size) {
    if (title.length <= size) {
      return title;
    } else {
      return title.substr(0, size) + "...";
    }
  }
  
  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  dots: true,
  titles: true,
  autoplay: true,
  autoplayInterval: 6000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});

