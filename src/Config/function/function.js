import {firebaseApp,provider} from '../Data/firebase'

function login(data){
    return new Promise((resolve,reject)=>{
        firebaseApp.auth().signInWithEmailAndPassword(data.email,data.password)
        .then(function(user){resolve(user)
        }).catch(err=>{
            reject(err.message)
            alert(err.message)})
    })
}

function logOut(){
    
     return new Promise((resolve,reject)=>{
         firebaseApp.auth().signOut().then(res => {
            resolve(res);
        }).catch(error => {
            var errorMessage = error.message;
            reject(errorMessage)
        })
     })

}
function loginWithFacebook() {
  return new Promise((resolve,reject)=>{
    provider.setCustomParameters({
        'display': 'popup'
      });

      firebaseApp.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(user);
        resolve(user)
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage);
      });
    })
  }

export {
    login,logOut,loginWithFacebook
}