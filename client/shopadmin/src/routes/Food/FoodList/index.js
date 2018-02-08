import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Table, Modal, Input } from 'antd';
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}];
class newPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      creatVal: {
        name: '',
        age: ''
      }
    }
  }
  showModal = () =>{
    this.setState({
      visible: true
    })
  }
  hideModal = () => {
    this.setState({
      visible: false
    })
  }
  create = () => {
    this.setState({
      visible: false
    })
    this.props.dispatch({
      type: 'food/foodlist',
      payload: {
        values: {
          ...this.state.creatVal
        }
      }
    })
  }
  changeModel = (e) => {
    this.setState({
      creatVal: {
        ...this.state.creatVal,
        [e.target.name]: e.target.value,
      }
    })
  }
  render(){
    let { foodListData} = this.props;
    let { name, age } = this.state.creatVal;
    return (<div>
      <Button type="primary" onClick={this.showModal}>添加</Button>
      <Table rowKey="id" columns={columns} dataSource={foodListData} />
      <Modal
        title="添加数据"
        visible={this.state.visible}
        onOk={this.create}
        onCancel={this.hideModal}
        okText="确认"
        cancelText="取消"
      >
        <Input placeholder="用户名" name="name" value={name} onChange={(e) => this.changeModel(e)} />
        <Input placeholder="年龄" name="age" value={age} onChange={(e) => this.changeModel(e)} />  
      </Modal>
    </div>)
  }
}

export default connect((state) => {
  return {
    foodListData: state.foodlist.foodListData
  }
})(newPage)