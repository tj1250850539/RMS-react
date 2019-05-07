// 数据管理
import React from 'react';
import { connect } from 'react-redux'
import { Input, Button, Table } from 'antd';
import axios from 'axios'



class DataAdmin extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      lodDate : []
    }

  }
  componentWillMount () {
    axios.get('/Data/list.json').then((res) =>{
      let data = res.data.data.list
      let arr = []
      for(let item in data){
        arr.push({
          key: data[item].id,
          name: data[item].name,
          age: 32,
          address: data[item].id,
        });
      }
      this.setState({
        lodDate:arr
      })
    })

    console.log(this.state.lodDate)
  }
  render() {
    const { selectedRowKeys, columns, data, getChangeData, getsearch } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.props.onSelectChange,
};
    return (
      <div>
        <Input placeholder="请输入" style={ { width:'300px',marginRight:'10px',marginBottom:'10px' } }/>
        <Button type="primary" onClick={ () =>{ getsearch(getChangeData) } }>搜索</Button>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data.length === 0 ? this.state.lodDate : data} />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
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
    getChangeData: () =>{
      //获取data数据
      let arr = []
      axios.get('/Data/list.json').then((res) =>{
        let data = res.data.data.list
        for(let item in data){
          arr.push({
            key: data[item].id,
            name: data[item].name,
            age: 32,
            address: data[item].id,
          });
        }
        dispatch({
          type:'getChangeData',
          data:arr
        })
      })

    },
    getsearch: (getChangeData) =>{
      getChangeData()
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(DataAdmin);
