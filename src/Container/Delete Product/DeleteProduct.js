import React from 'react'
import  PersistentDrawerLeft from '../../Component/Drawer/drawer'
import '../../App.css'
import {firebaseApp} from '../../Config/Data/firebase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';




class DeleteProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            myCart: [],
            products: []
        }
    }
    componentDidMount() {
        let myLocalCart = localStorage.getItem("cartDetail")
        if (myLocalCart) {
            this.setState({
                myCart: JSON.parse(myLocalCart)
            })
        }

        let { products } = this.state
        firebaseApp.firestore().collection("Products").get()
            .then((snapshot) => {
                snapshot.forEach(doc => {
                    let getproducts = doc.data()
                    getproducts.id=doc.id
                    products.push(getproducts)
                    this.setState({
                        products: products
                    })
                })
            })

    }

    delete = async (v,i) => {

        let {products} = this.state
        await firebaseApp.firestore().collection('Products').doc(v.id).delete().then(
            products.splice(i,1)          
        )
        this.setState({
            products:products
        })
        
    }
    render() {
        let { products } = this.state
        console.log(products);
        let value = this.props.location.state.value;
        console.log(value);
        return (
            <div>
                <PersistentDrawerLeft value={this.props.location.state.value} />
                <div>
                    <h1 className='App'>Delete Product</h1>
                    <div style={{ margin: "15px 15px 15px 0px", }}>
                    <Grid container justify='flex-start' spacing={3}>
                        <Grid item xs={12}>
                            <Paper style={{ padding: 20, display: "flex" }}>
                                <table>
                                <tr >
                                    <th className='th-width'> Product Image</th>
                                    <th className='th-width'>Product Name</th>
                                    <th className='th-width'>Product Description</th>
                                    <th className='th-width'>Product Delete</th>
                                    </tr>
                                    <br />
                                    {products.map((val, i) =>
                                      {
                                    return <tr>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={val.ProductImage} width="100" />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h2>{val.ProductName}</h2>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h3>{val.ProductDescription}</h3>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h3 style={{color:'red',cursor:'pointer',fontWeight:'bold'}} onClick={()=> this.delete(val,i)}>X</h3>
                                    </td>
                                    </tr>
                                    }
                                    )}
                            </table>
                            </Paper>
                            </Grid>
                        </Grid>
                        </div>
                </div>
            </div>
        )
    }
}

export default DeleteProduct;