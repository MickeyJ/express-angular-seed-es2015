
const HeaderComp = {
  template: '@@import _header.html',
  controllerAs: '$ctrl',
  bindings: {
    title: '@',
    logOut: '='
  }
};

export default HeaderComp;