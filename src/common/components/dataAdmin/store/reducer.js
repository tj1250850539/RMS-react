//import { fromJS } from 'immutable';

const defaultState = {
  selectedRowKeys: [],
  columns:[{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }],
  data:[],
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'onSelectChange':
      newState.selectedRowKeys = action.txt
      break;
    case 'getChangeData':
      newState.data = action.data
      break;
    default:
    break;
  }
  return newState;
}
