const defaultState = {
  isLogin: false
}
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'LOGIN':
      newState.isLogin = true;
      if(newState.isLogin){
        action.props.history.replace('/index')
      }
      break;
    default:
      break;
  }
  return newState
}
