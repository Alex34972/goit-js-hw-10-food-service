import foodCardTempl from '../templates/food-card.hbs';
import dish from '../menu.json';
const foodCardContainer = document.querySelector(`.menu`);

const foodcardMarcup = createFoodCards(dish);
foodCardContainer.insertAdjacentHTML(`beforeend`, foodcardMarcup);
function createFoodCards(dish){
    return dish.map(foodCardTempl).join(' ');
}
