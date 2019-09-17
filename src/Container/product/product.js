import React from 'react'
import AppBar from '../../Component/AppBar/Appbar'
import FooterPagePro from '../../Component/Footer/footer'
import RecipeReviewCard from '../../Component/DetailCard/detailCard'
import Grid from '@material-ui/core/Grid';


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            cart:[]
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart(data){
       let { cart } = this.state
        let product ={
            name:data.props.name,
            price:data.props.price,
            img:data.props.product,
            quantity:data.count,
        }
        console.log(product);
        cart.push(product);
        cart = JSON.stringify(cart);
        localStorage.setItem("cartDetail", cart);
        this.setState({
            cart:JSON.parse(cart)
        })
    }
    componentDidMount(){
        let cart = localStorage.getItem('cartDetail');
        if(cart){
            this.setState({
                cart: JSON.parse(cart)
            })
        }
    }
    render(){
        console.log(this.props.location);
        let value = this.props.location.state;
        return(
            <div>
                <AppBar mycart={this.state.cart} />
                <Grid container spacing={3}>
                <Grid item xs={8} sm={8} md={10} lg={12}>
                <div style={{marginTop:"5%",display:"inline-block"}}>
                <RecipeReviewCard description={value.description} click={this.addToCart} product={value.product} name={value.name} price={value.price} />
                </div>
                </Grid>
                </Grid>
                <div style={{marginTop:"5%"}}>
                <FooterPagePro />
                </div>
            </div>
        )
    }
}

export default Product;