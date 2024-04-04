// Scrolls down 90px from the top of 
    // the document, to resize the navlist 
    // padding and the title font-size 
    window.onscroll = function() { 
        scrollFunction() 
    }; 
          
    function scrollFunction() { 
        if (document.body.scrollTop > 90 || 
            document.documentElement.scrollTop > 90) 
        { 
            document.getElementById("navlist") 
                        .style.padding = "15px 10px";
            
            document.getElementById("navlist") 
                        .style.backgroundColor = "transparent";
  
            document.getElementById("logo") 
                    .style.fontSize = "24px"; 
            
            document.getElementById("logo") 
                    .style.color = "black";
                    
        } 
        else { 
            document.getElementById("navlist") 
                        .style.padding = "50vh 10px"; 
                        height = "100vh"; 
            
            document.getElementById("navlist") 
                        .style.backgroundColor = "black";
                        
            document.getElementById("logo") 
                        .style.fontSize = "50px"; 

            document.getElementById("logo") 
                        .style.color = "white";
            
        } 
    } 

// change
const facts = ["A cartoon", "A book", "A piece of music"];

!function newFact() {
  const randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
}();

//changetext
var text = ["A cartoon", "A line", "A piece of theme song", "an anime character"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}


///2000
function updateDateTime(){
    const d = new Date();
    d.setFullYear(2000);
    document.querySelector('#changetime').textContent = d;
}
setInterval(updateDateTime, 1000);

class SlideStories {
    /** @param {string} id */
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`)
        this.active = 0
        this.init()
    }

    /** @param {Number} index */
    activeSlide(index) {
        this.active = index
        this.items.forEach((item) => item.classList.remove('active'))
        this.items[index].classList.add('active')
        this.thumbItems.forEach((item) => item.classList.remove('active'))
        this.thumbItems[index].classList.add('active')
        this.autoSlide()
    }

    next() {
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1)
        } else {
            this.activeSlide(0)
        }
    }

    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1)
        } else {
            this.activeSlide(this.items.length - 1)
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next')
        const prevBtn = this.slide.querySelector('.slide-prev')
        nextBtn.addEventListener('click', this.next)
        prevBtn.addEventListener('click', this.prev)
    }

    addThumbItems() {
        this.items.forEach(() => (this.thumb.innerHTML += `<span class="slide-thumb-item"></span>`))
        this.thumbItems = Array.from(this.thumb.children)
    }

    autoSlide() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 5000)
    }

    init() {
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.items = this.slide.querySelectorAll('.slide-items > *')
        this.thumb = this.slide.querySelector('.slide-thumbs')
        this.addThumbItems()
        this.activeSlide(0)
        this.addNavigation()
    }
}

new SlideStories('slide')

///Play Music
var audio = document.getElementById("au1");
    var img = document.getElementById("img1");
    
    function play() {
      audio.play();
    }
    
    function stop() {
      audio.pause();
    }
    
    img.addEventListener('click', play);
    img.addEventListener('mouseover', play);
    img.addEventListener('mouseout', stop);


///Play Music datouerzi
var audio1 = document.getElementById("audio1");
    var img1 = document.getElementById("cartoon1");

    function play() {
      audio1.play();
    }
    
    function stop() {
      audio1.pause();
    }
    
    img1.addEventListener('click', play);
    img1.addEventListener('mouseover', play);
    img1.addEventListener('mouseout', stop);

