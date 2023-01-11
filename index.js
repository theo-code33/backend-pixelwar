const { firebaseApp } = require('./config/firebase.config');

const { getFirestore, getDoc, doc, collection, getDocs, setDoc, addDoc } = require('firebase/firestore');

//  PIXEL

const db = getFirestore(firebaseApp);
const pixelsCollection = collection(db, 'pixels');

async function getPixels(db){
    try {
        const pixelsDatas = await getDocs(pixelsCollection);
        pixelsDatas.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        })
    } catch (error) {
        throw new Error(error);
    }
}

async function createPixel(db, datas){
    const newDoc = await addDoc(pixelsCollection, datas)
    console.log(newDoc);
}

const d = {
    x: 1,
    y: 1,
    color: 'orange',
    user: null,
    createdAt: Date.now(),
    deletedAt: null
}
