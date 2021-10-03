
export default {onBtnClick}; 
import createMarkup from '../../../views/partials/fitting/sizeTable.hbs';



import getRefs from '../../refs/refs.js'
import Backdrop from '../../components/backdrop.js';
import backdropMarkupTempl from '../../../views/components/backdrop.hbs';
import modalFormMarkupTempl from '../../../views/partials/fitting/sizeTable.hbs';
//import size from '../../json/sizeChose.json';
//import createMarkup from '../../../views/partials/fitting/sizeChose.hbs';

let throttle = require('lodash.throttle');

function onBtnClick(event) {
  const backdropRef = document.querySelector('[data-modal]');
  const { mainEL } = getRefs;
  if (backdropRef === null) {
    const modalFormMarkup = modalFormMarkupTempl();
    const backdropMarkup = backdropMarkupTempl(createMarkup);
 
    mainEL.insertAdjacentHTML('beforeend', backdropMarkup);
    window.addEventListener('resize', throttle(onResize, 50));

  }
  const backdrop = new Backdrop();
  onResize();
}
function onResize(event) {
  let backdropRef = document.querySelector('[data-modal]');
  const right = (backdropRef.clientWidth - backdropRef.children[0].children[1].clientWidth) / 2;
  const btnCloseRef = document.querySelector('.form__button-сlose');
  btnCloseRef.style.right = `${right}px`;
}
