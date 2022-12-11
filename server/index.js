import express from "express";
import { db, auth} from "./config.js";
import bodyparser from "body-parser";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  onSnapshot,
  collection,
  query,
  getDocs,
  where,
  updateDoc
} from "firebase/firestore"
// import randomstring from "randomstring";
// import * as validurl from "valid-url";
import cors from "cors";

const app = express();
app.use(bodyparser.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(auth, email, password);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).json({ 
        message: "User created successfully" 
    });
  } catch (error) {
    res.status(400).json({ 
        message: error.message 
    });
  }  
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    const user = await signInWithEmailAndPassword(auth, email, password);
    res.status(200);
    res.send({
      userid : user.user.uid
    })
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/link", (req, res) => {
  try {
    var long = req.body.long;
    var short = req.body.short;
    var edit = req.body.edit;
    let userId = req.body.userId

    console.log(req.body)

    db.collection("links").add({
      long: long,
      short: short,
      userId : userId,
      count: 0,
      edit: false,
    });

    res.send({
      status: true,
      message: "Data berhasil disimpan",
    });
  } catch (error) {
    console.log(error)
    res.send({
      status: false,
      message: "Data gagal disimpan",
    });
  }
});

app.get("/link", (req, res) => {
  try {
  
    onSnapshot(collection(db, "links"), (QuerySnapshot) => {
      let links = [];
      QuerySnapshot.forEach((doc) => {
        links.push({ id: doc.id, ...doc.data() });
      });
      res.send(links)
    })

  } catch (err) {
    console.log(err)
  }
});

app.get("/link/:uid", async(req, res) => {
  const uid = req.params.uid
  const q = query(collection(db, "links"), where("userId", "==", uid));
  const querySnapshot = await getDocs(q);
  let links = [] 
  console.log(uid)
  querySnapshot.forEach((doc) => {
    console.log(doc.data())
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    links.push({ id: doc.id, ...doc.data() });
  });
  res.send(links)
})

//wait bingung
app.get("/link/redirect/:short", async(req,res)=>{
  const {short} = req.params;
  try{
    let links = {}; 
    const q = query(collection(db,"links"), where("short" , "==", short))
    const querySnapshot = await getDocs(q);
    await updateDoc(q, {
      count: increment(1)
    })
    // querySnapshot.forEach((doc)=>{
    //   links = doc.data()
    //})
   
    res.send({
      message: "Success Redirect",
      links: links
    })
  }
  catch(err){
    console.log(err)
  }
})

//DELETE
app.delete('/link/:id', (req, res) => {
  try {
    db.collection('links')
      .doc(req.params.id)
      .delete()
      .then(() => {
        res.send({
          status: true,
          message: 'Data berhasil dihapus',
        });
      });
  } catch (error) {
    res.send({
      status: false,
      message: 'Data gagal dihapus',
    });
  }
});

//UPDATE
app.patch("/link/:id", (req, res) => {
  try {
    db.collection("links")
      .doc(req.params.id)
      .update({
        long: req.body.long,
        short: req.body.short,
        edit: req.body.edit,
      })
      .then(() => {
        res.send({
          status: true,
          message: "Data berhasil diubah",
        });
      });
  } catch (error) {
    res.send({
      status: false,
      message: "Data gagal diubah",
    });
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });