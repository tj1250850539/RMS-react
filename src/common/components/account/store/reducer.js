import { fromJS } from 'immutable';

const defaultState = fromJS({
  data:[
    {
      key: 1,
      name: 'root',
      password: `root`,
    },
    {
      key: 2,
      name: 'root1',
      password: `root1`,
    }

]

})

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'NEWPASSWORD':
    newState.data=action.newpassword
    break;
    default:
    break;
  }
  return newState
}
