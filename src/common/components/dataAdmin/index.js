// 数据管理
import React from 'react';
import { connect } from 'react-redux'
import { Input, Button, Table } from 'antd';
import axios from 'axios'



class DataAdmin extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {
    this.props.getsearch('')
  }
  componentWillUnmount () {
    console.log(2222)
  }
  render() {
    const { selectedRowKeys, columns, data, getsearch, inputValue, onInputChange, DelectData } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.props.onSelectChange,
    };
    return (
      <div>
        <Button type="danger" onClick={ () =>{ DelectData(selectedRowKeys,data) } } style={{ marginRight: '300px' }}>删除</Button>
        <Input placeholder="请输入" value={ inputValue } onChange={ onInputChange } style={ { width:'300px',marginRight:'10px',marginBottom:'10px' } }/>
        <Button type="primary" onClick={ () =>{ getsearch(inputValue) } }>搜索</Button>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    inputValue: state.dataAdmin.inputValue,
    selectedRowKeys: state.dataAdmin.selectedRowKeys,
    columns: state.dataAdmin.columns,
    data: state.dataAdmin.data
  }

}

const mapDispathToProps = (dispatch) =>{
  return {
    onSelectChange: (selectedRowKeys)=>{
      dispatch({
        type:'onSelectChange',
        txt:selectedRowKeys
      })
    },
    getsearch: (value,data) =>{
      let arr = []
      axios.get('/Data/list.json').then(res => {
        let data = res.data.data.list
        for(let item in data){
          if(value === ''){
            arr.push({
              key: data[item].id,
              name: data[item].name,
              age: 32,
              address: data[item].id,
            });
          }else {
            if(data[item].name.indexOf(value) > -1){
              arr.push({
                key: data[item].id,
                name: data[item].name,
                age: 32,
                address: data[item].id,
              });
            }
          }
        }
        dispatch({
          type:'getChangeData',
          data:arr
        })
      })
    },
    onInputChange: (e) =>{
      dispatch({
        type:'onInputChange',
        value:e.target.value
      })
    },
    DelectData: (selectedRowKeys,data) =>{
      if(selectedRowKeys.length){
        for(let j in selectedRowKeys){
          for(let i in data){
            if(selectedRowKeys[j] === data[i].key){
              data.splice(i,1)
              break
            }
          }
        }
        dispatch({
          type:'getChangeData',
          data:data
        })
      }
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(DataAdmin);
