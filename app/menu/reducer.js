const menuItems = [
  { label: 'Menu 1'},
  { label: 'Menu 2'}
];

export default function menu(state={menuItems: menuItems}, action) {
  switch(action.type){
    case 'reorder-menu':
      return {...state, menuIems: action.menuItems};
    default:
      return state;
  }
};
