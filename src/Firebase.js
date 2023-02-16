import firebase from "firebase/compat/app";
import "firebase/compat/storage";

let galleryArrayList = [];

const firebaseConfig = {
    apiKey: "AIzaSyDdFNERu2hqY2BTn79tr3uLBZl6A-aQ3K0",
    authDomain: "filedirector-c0f19.firebaseapp.com",
    projectId: "filedirector-c0f19",
    storageBucket: "filedirector-c0f19.appspot.com",
    messagingSenderId: "943672447017",
    appId: "1:943672447017:web:dee77d6adc02208f360c38"
  };

  function listAll(folder){
    const storageRef = firebase.storage().ref();
    var listRef = storageRef.child(folder);

    listRef
        .listAll()
        .then((res) =>{
            res.prefixes.forEach((folderRef) => {
                
            });
            res.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then((url) => {
                    //console.log("download url: " + url);
                    galleryArrayList.push(url);
                   
                });
            });
        })
       .catch((err) =>  {console.log(err)})
  }

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export{ storage, listAll, galleryArrayList, firebase as default};