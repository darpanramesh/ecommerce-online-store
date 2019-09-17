import React from 'react'
import AppBar from '../../Component/AppBar/Appbar'
import FooterPagePro from '../../Component/Footer/footer'

class Shop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    render(){
        console.log(this.props.location.state.value);
        let value = this.props.location.state.value;
        return(
            <div>
                <AppBar mycart={value} />
                <FooterPagePro />
            </div>
        )
    }
}

export default Shop;