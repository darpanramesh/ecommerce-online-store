import React from 'react';
import AppBar from '../../Component/AppBar/Appbar'
import Paper from '@material-ui/core/Paper';
import '../../Container/Login/Login.css'
import Button from '@material-ui/core/Button';
import { loginWithFacebook } from '../../Config/function/function'
import { firebaseApp } from '../../Config/Data/firebase';
// import { async } from 'q';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            mycart: [],
            products: [],
            userData : '',
            userName:''
        }
    }
    componentDidMount() {
        let myLocalCart = localStorage.getItem("cartDetail")
        if (myLocalCart) {
            this.setState({
                mycart: JSON.parse(myLocalCart)
            })
        }
        let uid = localStorage.getItem('id')

        if(uid){
            firebaseApp.firestore().collection('users').doc(JSON.parse(uid)).get().then(data=>{
                let val = data.data()
                console.log(val)
                this.setState({
                    userName : val.userName,
                    imageUrl : val.imageUrl,
                    isSignedIn : true

                })

            })
        }

     
    }

    loginWithFb = async() => {
       let userData = await loginWithFacebook()
       console.log(userData.displayName)
       if(userData){

        this.setState({
            userName : userData.displayName,
            imageUrl : userData.photoURL,
            phoneNumber : userData.phoneNumber,
            email : userData.email,
        })

        let user = {
            userName : userData.displayName,
            imageUrl : userData.photoURL,
            phoneNumber : userData.phoneNumber,
            email : userData.email,
        }
        console.log(this.state)
        firebaseApp.firestore().collection('users').doc(userData.uid).set(user)
        localStorage.setItem('id',JSON.stringify(userData.uid))
        if(this.props.location.state.check){
            this.props.history.push('/checkout',{visible:this.props.location.state.visible,value:this.props.location.state.value})
        }
        if(this.props.location.state.check===false){
            this.props.history.push('/CartValues',{visible:this.props.location.state.visible,value:this.props.location.state.value})
        }

       }
       
    }
    render() {
        let {userData} = this.state
        console.log("====>", userData)
    let value = this.props.location.state.value;

        return (
            <div>
                <AppBar mycart={value} path={this.props} />

                        <div className='loginDiv' style={{ margin: '50px 30%', minWidth: '350px', maxHeight: '500px' }} >
                            <Paper >
                                <h1 className='heading'>Login With Facebook</h1>
                                <p className='paragraph'>Welocme to the Online Store</p>
                                <div style={{ margin: '20px 35%' }}>
                                    <Button style={{color:'white',background:'#4267b2',padding:5}} onClick={() => this.loginWithFb()} >
                                        loginWithFacebook
                                    </Button>
                                </div>
                            </Paper>
                        </div>
                
            </div>
        )
    }
}



export default Login