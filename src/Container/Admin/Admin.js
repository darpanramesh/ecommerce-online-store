import React from 'react'
import  PersistentDrawerLeft from '../../Component/Drawer/drawer'

export default class Admin extends React.Component{
render(){
    let value = this.props.location.state.value;
    console.log(value)
    return(
        <div>
            <PersistentDrawerLeft value={this.props.location.state.value} />
        </div>
    )
}
}