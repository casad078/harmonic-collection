var myGif = document.getElementById('myGif');

// Function to check the scroll position and play the GIF
function checkScroll() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Adjust the scroll height as needed
    var triggerHeight = 600;

    if (scrollPosition >= triggerHeight) {
        myGif.style.opacity = 1; // Make the GIF visible
        // Add code to play the GIF if it's not already playing
    } else {
        myGif.style.opacity = 0; // Hide the GIF
        // Add code to pause or reset the GIF if needed
    }
}

// Attach the checkScroll function to the scroll event
window.addEventListener('scroll', checkScroll);

// Initial check in case the page is loaded at the trigger position
checkScroll();

/*typewriter*/
class Typerwriter {
    constructor(el, options){
      this.el = el;
      this.words = [...this.el.dataset.typewriter.split(',')];
      this.speed = options?.speed || 100;
      this.delay = options?.delay || 1500;
      this.repeat = options?.repeat;
      this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    toggleTyping = () => this.el.classList.toggle('typing');

    async typewrite(word){
      await this.wait(this.delay);
      this.toggleTyping();
      for (const letter of word.split('')) {
        this.el.textContent += letter;
        await this.wait(this.speed)
      }
      this.toggleTyping();
      await this.wait(this.delay);
      this.toggleTyping();
      while (this.el.textContent.length !== 0){
        this.el.textContent = this.el.textContent.slice(0, -1);
        await this.wait(this.speed)
      }
      this.toggleTyping();
    }

    async initTyping() {
      for (const word of this.words){
        await this.typewrite(word);
      }
      if(this.repeat){
        await this.initTyping();
      } else {
        this.el.style.animation = 'none';
      }
    }
  }

  document.querySelectorAll('[data-typewriter]').forEach(el => {
    new Typerwriter(el, {
      repeat: true,
    })
  })