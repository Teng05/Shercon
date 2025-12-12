const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
   const heroImage = document.getElementById('heroImage');
  const thumbs = document.querySelectorAll('.thumb');
  let currentIndex = 0;
  const duration = 5000; // 5secs

  // 📌 AUTO-LOAD FIRST THUMBNAIL INTO HERO IMAGE
  function setHeroImage(index) {
    const imgPath = thumbs[index].getAttribute('data-img');
    heroImage.src = imgPath;

    // Highlight active thumbnail
    thumbs.forEach(t => t.classList.remove('border-blue-600'));
    thumbs[index].classList.add('border-blue-600');

    currentIndex = index;
  }

  if (thumbs.length > 0) {
    setHeroImage(0);
  }

  // 📌 CLICK THUMBNAILS TO CHANGE HERO IMAGE
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      setHeroImage(index);
    });
  });

  // 📌 AUTOMATIC SLIDESHOW
  setInterval(() => {
    let nextIndex = (currentIndex + 1) % thumbs.length;
    setHeroImage(nextIndex);
  }, duration);