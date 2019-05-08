//import { fromJS } from 'immutable';
import axios from 'axios'
async function a () {
  let res = await axios.get('/Data/list.json')
  console.log(res.data.data.list)
  return res.data.data.list
}
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
  inputValue:'',
  a:a(),
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
    case 'onInputChange':
      newState.inputValue = action.value
      break;
    default:
    break;
  }
  return newState;
}
