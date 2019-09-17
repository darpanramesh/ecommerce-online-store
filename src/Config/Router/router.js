import React from "react"
import {Router, Route} from "react-router-dom";
import {Home,Shop,About,Contact,Services,Product,CartValue,Admin,AddProduct,CheckOut,adminLogin,LoginFacebook,DeleteProduct,Dashboard} from '../../Container/index'
import history from '../../history'

export default class AppRouter extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/product" component={Product} />
                <Route path="/CartValues" component={CartValue} />
                <Route path="/Admin" component={Admin} />
                <Route path='/Admin/addProducts' component={AddProduct} />
                <Route path='/checkout' component={CheckOut} />
                <Route path='/AdminLogin' component={adminLogin} />
                <Route path='/Admin/DeleteProducts' component={DeleteProduct} />
                <Route path='/Admin/Dashboard' component={Dashboard} />
                <Route path='/LoginFacebook' component={LoginFacebook} />
            </Router>
        )
    }
}

