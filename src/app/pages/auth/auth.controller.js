
class AuthCtrl {
  constructor($state){
    this._state = $state;

    this.message = this._state.current.title;
    
  }
}

export default ['$state', AuthCtrl ]