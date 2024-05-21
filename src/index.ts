import { doubleLinksTextFunc } from '$utils/double-links';
import { stepSliderFunc } from '$utils/home-page-scroll-slider';

window.Webflow ||= [];
window.Webflow.push(() => {
  stepSliderFunc();
  doubleLinksTextFunc();
});
