import React from 'react'
import AppBar from '../../Component/AppBar/Appbar'
import FooterPagePro from '../../Component/Footer/footer'
import CarouselPage from '../../Component/Slider/slide'
import img4 from '../../Images/slider4.jpg'
import Chips from '../../Component/chips/chips'
import MediaCard from '../../Component/card/card'
import { product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12} from '../products'
import {firebaseApp} from '../../Config/Data/firebase'



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            cart:[],
            product:[]
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart(data){
       let { cart } = this.state
        let product ={
            name:data.props.name,
            price:data.props.price,
            img:data.props.product,
            quantity:data.count
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
        const { product } = this.state
        firebaseApp.firestore().collection("Products").get()
        .then(value=>{
            console.log(value);
            value.forEach(doc=>{
                let getProduct = doc.data();
                product.push(getProduct);
                this.setState({
                    product:product
                })
            })
        })

        let cart = localStorage.getItem('cartDetail');
        if(cart){
            this.setState({
                cart: JSON.parse(cart)
            })
        }
    }
    render(){
        const { product } = this.state
        return(
            <div>
                <AppBar mycart={this.state.cart} />
                <CarouselPage />
                <div style={{marginTop:"3%",textAlign:"center",}}>
                    <img src={img4} width="90%" height="300px" />
                </div>
                <div style={{textAlign:"center",marginTop:"1%"}}>
                <Chips label="Sport shoes" color="primary" />
                <Chips label="Sneakers" color="primary" />
                <Chips label="Loafers" color="secondary" />
                <Chips label="Formal Shoes" color="secondary" />
                </div>
                <div style={{marginTop:"1%",}}>
                {product.map((val,i)=>{
                return <MediaCard key={i} click={this.addToCart} description={val.ProductDescription}  product={val.ProductImage} name={val.ProductName} price={val.ProductPrice} />
                })}
                </div>
                <div style={{marginTop:"5%",}}>
                <FooterPagePro />
                </div>
            </div>
        )
    }
}

export default Home;