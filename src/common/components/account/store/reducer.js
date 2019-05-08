
const defaultState = {
  data:[
    {
      key: 'root',
      name: 'root',
      password: `root`,
    },
]

}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'NEWPASSWORD':
      newState.data=action.newpassword
      break;
    case 'REGISTERACCOUNT':
      newState.data.push({
        key:action.account,
        name:action.account,
        password:action.passWord
      })
      action.props.history.replace('/login')
      break;
    default:
    break;
  }
  return newState
}
