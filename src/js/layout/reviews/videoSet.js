import { refs } from '../../refs/refs.js'
import set from '../../../../src/js/json/exampl.json';
import setHbs from "../../../../src/views/partials/reviews/videoSet.hbs";
import '../../../sass/layout/reviews/_videoSet.scss'



const createSetList = (set) => {
    return setHbs(set);
}


const setListMarkup = createSetList(set);

refs.setList.insertAdjacentHTML('beforeend',setListMarkup);
