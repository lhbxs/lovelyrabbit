import React, { Component } from 'react';
import { connect } from 'react-redux'
import {message, Spin} from 'antd'
import {actions as HomePageActions} from 'redux/homePage'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state ={
      loading: false
    }
  }
  componentDidMount () {
    message.success('载入成功')
    this.setState({loading: true})
    this.props.updateData().then(() => {
      this.setState({loading: false})
    })
  }
  render () {
    const {data} = this.props
    const {loading} = this.state
    return (
      <div>
        <Spin spinning={loading}>
          {data && `api response length: ${data.length}`}
        </Spin>
      </div>
    )
  }
}

const mapStateToProps = ({homePageModel}) => {
  return {
    data: homePageModel.data
  }
}

export default connect((mapStateToProps), {
  updateData: HomePageActions.updateData
})(HomePage)
