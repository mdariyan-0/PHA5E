document.addEventListener("DOMContentLoaded", function () {
  const language = document.getElementsByClassName("lang");
  const underline = document.getElementsByClassName("underline");

  language[0].addEventListener("click", function () {
    underline[0].style.top = "12px";
    underline[0].style.right = "-81px";
  });
  language[1].addEventListener("click", function () {
    underline[0].style.top = "12px";
    underline[0].style.right = "-108px";
  });

  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      document.getElementsByClassName("navbar")[0].style.transform =
        "translateY(-81.2px)";
    } else if (scrollTop < lastScrollTop) {
      document.getElementsByClassName("navbar")[0].style.transform = "unset";
    }
    lastScrollTop = scrollTop;
  });

  let imgDiv = document.querySelectorAll(".floating-images");

  imgDiv.forEach((div) => {
    div.addEventListener("mouseenter", function () {
      imgDiv.forEach((otherDiv) => {
        if (otherDiv !== this) {
          otherDiv.lastElementChild.style.display = "none";
          otherDiv.style.border = "1px solid #ffffff67";
          otherDiv.firstElementChild.style.display = "block";
          otherDiv.firstElementChild.nextElementSibling.style.display = "block";
        }
        if (otherDiv === this) {
          otherDiv.firstElementChild.nextElementSibling.nextElementSibling.style.display =
            "block";
          otherDiv.style.zIndex = "5";
        }
      });
    });

    div.addEventListener("mouseleave", function () {
      imgDiv.forEach((otherDiv) => {
        otherDiv.lastElementChild.style.display = "block";
        otherDiv.style.border = "none";
        otherDiv.firstElementChild.style.display = "none";
        otherDiv.firstElementChild.nextElementSibling.style.display = "none";
        otherDiv.firstElementChild.nextElementSibling.nextElementSibling.style.display =
          "none";
        otherDiv.style.zIndex = "0";
      });
    });
  });

  imgDiv.forEach((div) => {
    let isHovering = false;
    let targetX = 0,
      targetY = 0;
    let currentX = 0,
      currentY = 0;
    let easeFactor = 0.1;
    let maxMove = 250;

    div.addEventListener("mouseenter", () => {
      isHovering = true;
    });

    div.addEventListener("mouseleave", () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
    });

    document.addEventListener("mousemove", (event) => {
      if (!isHovering) return;

      let rect = div.getBoundingClientRect();
      let centerX = rect.left + rect.width / 2;
      let centerY = rect.top + rect.height / 2;

      let moveX = (event.clientX - centerX) * 1.5;
      let moveY = (event.clientY - centerY) * 1.5;

      targetX = Math.max(-maxMove, Math.min(maxMove, moveX));
      targetY = Math.max(-maxMove, Math.min(maxMove, moveY));
    });

    function animate() {
      currentX += (targetX - currentX) * easeFactor;
      currentY += (targetY - currentY) * easeFactor;
      div.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  });
});

// var scrollAnimation = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".transformImg",
//         start: "bottom top",
//         end: "top bottom",
//         toggleActions: "restart none none none"
//     }
// })



gsap.to(".img1", {
  scrollTrigger: {
    trigger: ".img1",
    toggleAction: "restart pause reverse none",
    start: "20px 95%",
    end: "bottom 12px",
    scrub: true,
  },
  y: -100,
  duration: 2,
});
gsap.to(".img2", {
  scrollTrigger: {
    trigger: ".img2",
    toggleAction: "restart pause reverse none",
    start: "20px 95%",
    end: "bottom 12px",
    scrub: true,
  },
  y: -100,
  duration: 2,
});
