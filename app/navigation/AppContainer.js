import React, { Component } from 'react'
import AppNavigator from './AppNavigator'

export class AppContainer extends Component {
    render() {
        return (
            <AppNavigator
                ref={navigatorRef => NavigationUtil.setTopLevelNavigator(navigatorRef)}
            />
        )
    }
}

export default AppContainer;
