import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
class APIService {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }
  async SignUp(formData) {
  return auth()
                .createUserWithEmailAndPassword(formData.email,formData.password)
                .then((response) => {
                    console.log('responce'+JSON.stringify(response))
                    const uid = response.user.uid
                    console.log(formData.firstName)
                    
                    const data = {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        id: uid,
                        email:formData.email,
                      
                    };
                    const usersRef = firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .set(data)
                        .then(async firestoreDocument  =>{
                            console.log(firestoreDocument)
                        }
                        )
                        .catch((error) => {
                            alert(error)
                        });
                })
                .catch((error) => {
                    alert(error)
            })
}
}
const signInApi = (data,response) => {


    return async ({email, password}) => {
        const now = moment().format();
              auth()
                .createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    const uid = response.user.uid
                    const data = {
                        fName: '',
                        lName: '',
                        id: uid,
                        email,
                        joined: now,
                        phone: '',
                        bio: '',
                        lives: '',
                        works: '',
                        school: '',
                        languages: '',
                        boardsOwned: '',
                        timesSurfing: '',
                        stripeID: ''
                    };
                    const usersRef = firebase.firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .set(data)
                        .then(
                            RootNavigation.navigate('info')
                        )
                        .catch((error) => {
                            alert(error)
                        });
                })
                .catch((error) => {
                    alert(error)
            })
        }

}
// const signUpApi = () => {
//      return async () => {
   
//             auth()
//               .createUserWithEmailAndPassword(email, password)
//               .then((response) => {
//                   const uid = response.user.uid
//                   const data = {
//                       fName: '',
//                       lName: '',
//                       id: uid,
//                       email,
//                       joined: now,
//                       phone: '',
//                       bio: '',
//                       lives: '',
//                       works: '',
//                       school: '',
//                       languages: '',
//                       boardsOwned: '',
//                       timesSurfing: '',
//                       stripeID: ''
//                   };
//                   const usersRef = firebase.firestore().collection('users')
//                   usersRef
//                       .doc(uid)
//                       .set(data)
//                       .then(
//                           RootNavigation.navigate('info')
//                       )
//                       .catch((error) => {
//                           alert(error)
//                       });
//               })
//               .catch((error) => {
//                   alert(error)
//           })
//       }
// }

export default APIService;

