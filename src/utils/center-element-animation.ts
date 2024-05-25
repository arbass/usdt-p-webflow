export const centerElementAnimation_func = () => {
  const centerElementAnimation_el_array = document.querySelectorAll('[center-element-animation]');

  if (centerElementAnimation_el_array.length) {
    window.addEventListener('resize', centerElementAnimation_magic);
    window.addEventListener('scroll', centerElementAnimation_magic);
    window.addEventListener('load', centerElementAnimation_magic);

    function centerElementAnimation_magic() {
      if (window.innerWidth <= 991) {
        const centerY = window.innerHeight / 2;
        let closestElement = null;
        let closestDistance = Infinity;

        const firstElement = centerElementAnimation_el_array[0];
        const lastElement =
          centerElementAnimation_el_array[centerElementAnimation_el_array.length - 1];

        centerElementAnimation_el_array.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const elementCenterY = rect.top + rect.height / 2;
          const distance = Math.abs(centerY - elementCenterY);

          if (distance < closestDistance && distance <= rect.height) {
            closestDistance = distance;
            closestElement = el;
          }
        });

        centerElementAnimation_el_array.forEach((el) => el.classList.remove('is-active'));

        const firstRect = firstElement.getBoundingClientRect();
        const lastRect = lastElement.getBoundingClientRect();

        if (firstRect.top > centerY) {
          firstElement.classList.add('is-active');
        } else if (lastRect.bottom < centerY) {
          lastElement.classList.add('is-active');
        } else if (closestElement) {
          closestElement.classList.add('is-active');
        }
      }
    }
  }
};

centerElementAnimation_func();
