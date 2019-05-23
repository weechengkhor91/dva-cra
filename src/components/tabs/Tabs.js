import React, { Fragment, Component } from 'react'

// Styling
import './Tabs.less'

class Tabs extends Component {
  state = {
    activeTab: this.props.current || 0,
  }

  handleTab = e => this.setState({ activeTab: e })

  render() {
    const { activeTab } = this.state
    const { vertical, children } = this.props
    return (
      <div className="tab-outer mt-15">
        {vertical ? (
          <div className="flex-row">
            <div className="flex-3">
              <div
                className="tab-header-wrapper"
                style={{ borderRight: '1px solid #d9d9d9' }}
              >
                {children.map((item, i) => {
                  const { props } = item
                  const { disabled } = props
                  return (
                    <div
                      key={i}
                      className={
                        activeTab === i
                          ? 'tab-header vertical-active'
                          : 'tab-header'
                      }
                      style={{
                        pointerEvents: disabled ? 'none' : '',
                        color: disabled ? '#d9d9d9' : '',
                      }}
                      onClick={() => this.handleTab(i)}
                    >
                      {item.props.title}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex-9">
              <div className="tab-content-wrapper">
                {children.map((item, i) => {
                  const { children } = item.props
                  return <div key={i}>{activeTab === i && children}</div>
                })}
              </div>
            </div>
          </div>
        ) : (
          <Fragment>
            <div
              className="tab-header-wrapper"
              style={{ borderBottom: '1px solid #d9d9d9' }}
            >
              {children.map((item, i) => {
                const { props } = item
                const { disabled } = props
                return (
                  <div
                    key={i}
                    className={
                      activeTab === i ? 'tab-header row-active' : 'tab-header'
                    }
                    style={{
                      pointerEvents: disabled ? 'none' : '',
                      color: disabled ? '#d9d9d9' : '',
                    }}
                    onClick={() => this.handleTab(i)}
                  >
                    {item.props.title}
                  </div>
                )
              })}
            </div>
            <div className="tab-content-wrapper">
              {children.map((item, i) => {
                const { children } = item.props
                return <div key={i}>{activeTab === i && children}</div>
              })}
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}

export default Tabs
