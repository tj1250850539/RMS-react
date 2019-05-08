// 账号管理
import React from 'react';
import { connect } from 'react-redux'
import {
  Table, Input, InputNumber, Popconfirm, Form,
} from 'antd';

// const data = [];
// for (let i = 0; i < 10; i++) {
//   data.push({
//     key: i.toString(),
//     name: `账号 ${i}`,
//     age: `密码`,
//     address: `London Park no. ${i}`,
//   });
// }
const FormItem = Form.Item;
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data:props.data, editingKey: '' };
    this.columns = [
      {
        title: '账号',
        dataIndex: 'name',
        width: '40%',
        editable: false,
      },
      {
        title: '密码',
        dataIndex: 'password',
        width: '40%',
        editable: true,
      },

      {
        title: '修改',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        href="javascript:;"
                        onClick={() => this.save(form, record.key)}
                        style={{ marginRight: 8 }}
                      >
                        保存
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="确定要放弃更改吗?"
                    onConfirm={() => this.cancel(record.key)}
                    cancelText='取消'
                    okText='确定'
                  >
                    <a>取消</a>
                  </Popconfirm>
                </span>
              ) : (
                <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>修改</a>
              )}
            </div>
          );
        },
      },
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' },()=>{this.props.amendPassword(this.state.data)});
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }
  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          // inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel,
          }}
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);
// function Account(){
//   return <div>账号管理</div>
// }

const mapStateToProps = (state)=> {
  return {
    data:state.account.data
  }
}
const mapDispatchProps = (dispatch)=> {
  return {
    amendPassword: (data)=> {
      dispatch({
        type:'NEWPASSWORD',
        newpassword:data
      })
      // console.log(data)
    }
  }
}
export default connect (mapStateToProps,mapDispatchProps)(EditableFormTable)
// export default EditableFormTable;
