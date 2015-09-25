import Menu from "./cmps/root";
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
  menuItems: state.menu.menuItems  // the knowledge about the store comes from outside of the module
});

let mapDispatchToProps = (dispatch) => ({
  reorder: (items) => dispatch({
    type: 'reorder-menu',    // this is a global namespace
    menuItems: items
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
