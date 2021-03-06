import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtIcon from '../icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtTimeline extends AtComponent {
  render () {
    const {
      pending,
      items,
    } = this.props
    
    const rootClassName = ['at-timeline']
    if (pending) rootClassName.push('at-timeline--pending')

    const itemElems = items.map((item, index) => {
      const {
        title = '',
        color,
        icon,
        content = [],
      } = item
      
      const itemRootClassName = ['at-timelineitem']
      if (color) itemRootClassName.push(`at-timelineitem--${color}`)
      
      const dotClass = ['at-timelineitem__dot']
      if (icon) dotClass.push('at-timelineitem__icon')
      
      return (
        <View className={itemRootClassName} key={index}>
          <View className='at-timelineitem__tail'></View>
          <View className={dotClass}>
            {icon && <AtIcon value={icon} size='16'></AtIcon>}
          </View>
          <View className='at-timelineitem__content'>
            <View className='at-timelineitem__content-item'>{title}</View>
            {
              content.map((sub, subIndex) => (
                <View
                  className='at-timelineitem__content-item at-timelineitem__content--sub'
                  key={subIndex}>
                  {sub}
                </View>
              ))
            }
          </View>
        </View>
      )
    })
    return (
      <View className={rootClassName}>
        {itemElems}
      </View>
    )
  }
}

AtTimeline.defaultProps = {
  pending: false,
  items: [],
}

AtTimeline.propTypes = {
  pending: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
}
