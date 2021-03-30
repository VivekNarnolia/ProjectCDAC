const express = require("express");
const upload = require("express-fileupload");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
//var products = require("./data/products.json");
var admin = require("./data/admin.json");
var session = require("express-session");
var bodyParser = require("body-parser");
//var Cart = require("./model/cart");
var path = require("path");
const { response } = require("express");
var parseurl = require("parseurl");

var multer = require("multer");
const Cart = require("./model/cart");
const { nextTick } = require("process");
//const { default: Cart } = require("../frontend/src/ShoppingCart/Cart");
const { Validator } = require('node-input-validator');
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.locals.session = req.session;
  //console.log(session.cart);
  next();
});

app.use(upload());

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'G:\\CDAC\\Web Programing Technologies\\ProjectCDAC\\uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, "Test")
//   }
// })

// var upload = multer({ storage: storage })
// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));

//Database connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Vivi@9647",
  database: "2211_viveknarnolia_cdac_project",
});

//user registration and updating user details in database
app.post("/userRegistration", (req, res) => {
  console.log("in index.js post method");



  const v = new Validator(req.body, {
    email: 'required|email',
    password: 'required',
    gender:'required'
  });

  v.check().then((matched) => {
    if (!matched) {
      console.log("***error");
      return res.send({error:v.errors,status:"400"});
    }
  });


  const fname = req.body.fname;
  const lname = req.body.lname;
  const phone = req.body.phone;
  const email = req.body.email;
  const dob = req.body.dob;
  const gender = req.body.gender;
  const address = req.body.address;
  const state = req.body.state;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users where phone=? or email=? limit 1",
    [phone, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length === 0) {
        db.query(
          "insert into users (fname,lname,phone,email,dob,gender,address,state,password) values (?,?,?,?,?,?,?,?,?)",
          [fname, lname, phone, email, dob, gender, address, state, password],
          (err1, result1) => {
            if (err1) {
              console.log(err);
            } else {
              res.send("values inserted");
            }
          }
        );
      } else {
        console.log("User already exists!");
      }
    }
  );
});

//user login
app.post("/login", (req, res) => {
  req.session.cart=null;
  session.cart=null;
  console.log("in login");
  var email = req.body.email;
  var password = req.body.password;

  if (email && password) {
    console.log("before db connection");

    db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password],
      function (error, results, fields) {
        //console.log("inside db connection");
        if (results.length > 0) {
          // console.log("inside results.length");
          req.session.loggedin = true;
          //console.log("inside results.length");
          req.session.email = email;
          console.log(email);
          res.send({ status: true, email: email, role: "user" });
          // res.send({ email });

          //res.redirect('/');
          console.log("inside results.length");
        } else {
          res.status(401).send({ msg: "Invalid Email or Password" });
          console.log("Incorrect email and/or Password!");
          res.send("Incorrect email and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter email and Password!");
    res.end();
  }
});

app.post("/admin", (req, res) => {
  console.log("in admin");
  var email = req.body.email;
  var password = req.body.password;

 

  if (email && password) {
    console.log("before db connection");

    db.query(
      "SELECT * FROM admins WHERE email = ? AND password = ?",
      [email, password],
      function (error, results, fields) {
        //console.log("inside db connection");
        if (results.length > 0) {
          // console.log("inside results.length");
          req.session.loggedin = true;
          //console.log("inside results.length");
          req.session.email = email;
          res.send({ status: true, email: email, role: "admin" });
          //res.redirect("/");
          console.log("inside results.length");
        } else {
          console.log("Incorrect email and/or Password!");
          res.send("Incorrect email and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter email and Password!");
    res.end();
  }
  // if(email==="vivek@gmail.com" && password==="vivek"){
  //   console.log("valid user");

  // }
  // else{
  //   console.log("invalid user");

  // }
  // db.query(
  //   "select email,password from admin where email=? and password=?",
  //   [email, password],
  //   (err, result) => {
  //     if (result.email.length === 0 || result.password.length === 0) {
  //       res.send("User logged in successfull");
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // );
});

// app.get('/flowers', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.email + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

app.post("/addProduct", (req, res) => {
  console.log("in index.js post method");

  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const file = req.body.file;
  const description = req.body.description;

  //if(req.files){
  console.log(req.files);
  //}

  db.query(
    "insert into products (name,category,price,file,description) values (?,?,?,?,?)",
    [name, category, price, file, description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("product inserted");
      }
    }
  );
});

//
// app.put('/:id', isAuth, isAdmin, async (req, res) => {
//     const productId = req.params.id;
//     const product = await Product.findById(productId);
//     if (product) {
//       product.name = req.body.name;
//       product.price = req.body.price;
//       product.image = req.body.image;
//       product.brand = req.body.brand;
//       product.category = req.body.category;
//       product.countInStock = req.body.countInStock;
//       product.description = req.body.description;
//       const updatedProduct = await product.save();
//       if (updatedProduct) {
//         return res
//           .status(200)
//           .send({ message: 'Product Updated', data: updatedProduct });
//       }
//     }
//     return res.status(500).send({ message: ' Error in Updating Product.' });
//   });

app.get("/getProduct", (req, res) => {
  db.query("select * from products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getProduct/:id", (req, res) => {
  var productid = req.params.id;
  console.log(productid);
  db.query(
    "select * from products where productid=?",
    [productid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(JSON.parse(JSON.stringify(result)));
      }
    }
  );
});

app.get("/products/:id", (req, res) => {
  var productid = req.params.id;
  db.query(
    "select * from products where productid=?",
    [productid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.get("/category/:category", (req, res) => {
  var category = req.params.category;
  console.log("hiiiii" + category);
  db.query(
    "select * from products where category=?",
    [category],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        //res.render("/category",result)
        //res.send(result);
        res.send(JSON.stringify(result));
      }
    }
  );
});

app.put("/updateProduct/:id", (req, res) => {
  console.log("Update Product");
  var productid = req.params.id;
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const file = req.body.file;
  const description = req.body.description;
  console.log("-------------" + productid);
  db.query(
    "update products set name=?,category=?,price=?,file=?,description=? where productid=?",
    [name, category, price, file, description, productid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(JSON.stringify(result));
        console.log(result);
      }
    }
  );
});

app.delete("/deleteProduct/:id", (req, res) => {
  var productid = req.params.id;
  console.log(productid);
  console.log("----------------------");
  db.query(
    "delete from products where productid=?",
    [productid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(productid);
        res.send(result);
        console.log(result);
      }
    }
  );
});

app.get("/search", (req, res) => {
  var name = req.query.key;
  console.log("Name is " + name);
  db.query(
    'select * from products where name like "%"?"%" ',
    [name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/dashboard", (req, res) => {
  res.send(dashboard);
});

app.get("/products", (req, res) => {
  res.send(products);
});


// app.get("/userloginscreen", (req, res) => {
//   console.log("******************"+req.query.role);
//   res.send("user")
// });

// app.get("/adminloginscreen", (req, res) => {
//   console.log("******************"+req.query.role);
//   res.send("admin");
// });


app.get("/add-to-cart/:id", (req, res) => {
  var productId = req.params.id;

  var cart = new Cart(req.session.cart ? req.session.cart : {});
  db.query(
    "select * from products where productid=?",
    [productId],
    (err, product) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(JSON.parse(JSON.stringify(product))[0].productid);
        cart.add(
          JSON.parse(JSON.stringify(product)),
          JSON.parse(JSON.stringify(product))[0].productid
        );

        req.session.cart = cart;
        session.cart = req.session.cart;
        console.log(session.cart);

        //res.redirect("http://localhost:3000");
        res.redirect("back");
      }
    }
  );
});

// app.get("/cart", (req, res) => {
//   res.redirect("back");
//       //res.redirect("http://localhost:3000/Cart");

// });

app.get("/cart", (req, res) => {
  console.log("****************");
  console.log(session.cart);
  if (!session.cart) {
    return res.render({ products: null });
  }
  var cart = new Cart(session.cart);
  //res.send({products:cart.generateArray(),totalPrice:cart.totalPrice});
  res.send({ products: cart.generateArray(), totalPrice: cart.totalPrice });
  //res.send(JSON.parse(JSON.stringify(cart)));
});

// app.get("/admin", (req, res) => {
//   res.send(admin);
// });
app.listen(3333, () => {
  console.log("Running on Port 3333");
});
