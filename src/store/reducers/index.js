import { combineReducers } from 'redux'
import account from '../../common/components/account/store/reducer'
import dataAdmin from '../../common/components/dataAdmin/store/reducer'
import personalCenter from '../../common/components/personalCenter/store/reducer'
import components from '../../common/components/store/reducer'
export default combineReducers({
  components
})
