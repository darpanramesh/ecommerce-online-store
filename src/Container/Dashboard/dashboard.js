import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {firebaseApp} from '../../Config/Data/firebase'

export default class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            myCart: [],
            products: [],
            orders: [],
            users : []
        }
    }
    componentDidMount() {
        let myLocalCart = localStorage.getItem("cartDetail")
        if (myLocalCart) {
            this.setState({
                myCart: JSON.parse(myLocalCart)
            })
        }

        let { products, orders, users } = this.state
        firebaseApp.firestore().collection("Products").get()
            .then((snapshot) => {
                snapshot.forEach(doc => {
                    let getproducts = doc.data()
                    products.push(getproducts)
                    this.setState({
                        products: products
                    })
                })
        })

        firebaseApp.firestore().collection("users").get()
            .then((snapshot) => {
                snapshot.forEach(doc => {
                    let getusers = doc.data()
                    users.push(getusers)
                    this.setState({
                        users: users
                    })
                })
        })

        firebaseApp.firestore().collection("orders").get()
        .then((snapshot) => {
            snapshot.forEach(doc => {
                let getorders = doc.data()
                orders.push(getorders)
                this.setState({
                    orders: orders
                })
            })
    })
    }
    render() {
        let { products , orders, users} = this.state
        let value = this.props.location.state.value;
        console.log(value);
        return (
            <div>
                <Grid justify='center' container spacing={3}>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <Paper >
                            <Typography variant='h4' align='center' >Total Products</Typography>
                            <Typography variant='h5' align='center' >{products.length}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <Paper >
                            <Typography variant='h4' align='center' >Total Orders</Typography>
                            <Typography variant='h5' align='center' >{orders.length}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <Paper >
                            <Typography variant='h4' align='center' >Total Users</Typography>
                            <Typography variant='h5' align='center' >{users.length}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}


