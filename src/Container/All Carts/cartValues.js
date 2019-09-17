import React from 'react';
import AppBar from '../../Component/AppBar/Appbar'
import FooterPagePro from '../../Component/Footer/footer'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { MDBContainer} from "mdbreact";
import "./scrollbar.css";
import history from '../../history'




class CartValue extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    cart: [],
    visible: true
    }
    }
render() {
    console.log(this.props.location.state.value);
    let value = this.props.location.state.value;
    const scrollContainerStyle = { width: "1200px", maxHeight: "500px" }
    let totalPrice = 0;
    let Total = value.map(val=> totalPrice += val.price * val.quantity);
    console.log("total=>",totalPrice);
    const { visible } = this.state;
return (
    <div>
        <AppBar mycart={value} />
        <MDBContainer>
            <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
                <div style={{ margin: "15px 15px 15px 0px", }}>
                    <Grid container justify='flex-start' spacing={3}>
                        <Grid item xs={12}>
                            <Paper style={{ padding: 20, display: "flex" }}>
                                <table>
                                <tr >
                                    <th className='th-width'> Product Image</th>
                                    <th className='th-width'>Product Name</th>
                                    <th className='th-width'>Product Price</th>
                                    <th className='th-width'>Product Quantity</th>
                                    </tr>
                                    <br />
                                    {value.map((val, i) =>
                                      {
                                    return <tr>
                                    <td style={{ textAlign: "center" }}>
                                        <img src={val.img} width="100" />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h2>{val.name}</h2>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h3>{val.quantity}</h3>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <h3  style={{ color: "#878a8f" }}>Rs: {val.price * Number(val.quantity)}</h3>
                                    </td>
                                    </tr>
                                    }
                                    )}
                                    <tr>
                                    <td></td>
                                    <td></td>
                                    <td className='th'>Total Price</td>
                                    <td className='th'>{totalPrice}</td>
                                    </tr>
                                </table>
                                </Paper>
                                <Button onClick={()=>{    history.push('/LoginFacebook',{check:true,value:value,visible:visible})}} size="large" style={{ color: "#fff", backgroundColor: "#878a8f", marginTop: "30px", float: 'right' }}>
                                    CheckOut
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </MDBContainer>
        
            <div style={{ marginTop: "5%" }}>
            <FooterPagePro />
            </div>
        </div>
        )
    }
}

export default CartValue;