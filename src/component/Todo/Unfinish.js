import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Typography } from 'antd';

const { Text } = Typography

export class Unfinish extends Component {
    render() {
        let {data} = this.props;
        data = data.filter(item=> item.check === false)
        return (
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item, index) => {
                    const { name='', time='' } = item
                    return (
                    <List.Item key={index}> 
                        <Text>{name}</Text>
                        <span>{time}</span>
                    </List.Item>
                )}}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.showList.data
})

export default connect(mapStateToProps, null)(Unfinish)
