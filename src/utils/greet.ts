export const stepSliderFunc = () => {
  const stepSlider_el = document.querySelector('[step-slider]');

  if (stepSlider_el) {
    function myFunction() {
      if (window.innerWidth >= 992) {
        //–––
        function isElementInViewport(el, percentage) {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          const elementHeight = rect.height;
          const threshold = elementHeight * (percentage / 100);

          return rect.top >= -threshold && rect.bottom <= windowHeight + threshold;
        }

        function onScroll() {
          const elements = document.querySelectorAll('[step-slider-lvl]');
          const stepItems_elements = document.querySelectorAll('[step-slider-item]');

          elements.forEach((element, id) => {
            if (isElementInViewport(element, 90)) {
              stepItems_elements.forEach((stepItem) => {
                stepItem.classList.remove('is-active');
              });

              stepItems_elements[id].classList.add('is-active');

              //

              function scrollToElement(elementId) {
                const container = document.getElementById('step-slider_steps-wrapper');
                const element = document.getElementById(elementId);
                if (container && element) {
                  container.scrollTop = element.offsetTop - container.offsetTop;
                }
              }
              const stepSelector = 'step-slider_steps-item-' + (id + 1);

              scrollToElement(stepSelector);
            }
          });
        }

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll); // На случай изменения размера окна

        //–––
      }
    }

    window.addEventListener('load', myFunction);
    window.addEventListener('scroll', myFunction);
    window.addEventListener('resize', myFunction);
    myFunction();
  }
};
