const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

const path = require("path");

const user = require("./routes/user.js");
const post = require("./routes/post.js");

// app.use(cookieParser("secretkey"));

// app.get("/getcookies", (req, res) => {
//   res.cookie("greet", "hello");
//   res.cookie("name", "nitesh");
//   res.cookie("made-in", "india", { signed: true });
//   res.send("Sent you some cookies");
// });

// app.get("/getsignedcookie", (req, res) => {
//   res.send(req.signedCookies);
// });

// app.get("/greet", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   res.send(`Hi, ${name}!`);
// });

app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("Hi, I am root");
});

const sessionOptions = {
  secret: "secretkey",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use("/users", user);
app.use("/posts", post);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  req.flash("success", "user registered successfully!");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", {
    name: req.session.name,
    msg: req.flash("success"),
  });
  //   res.send(`hello, ${req.session.name}`);
  //   res.redirect("/register");
});

// app.get("/reqcount", (req, res) => {
//   if (!req.session.count) req.session.count = 1;
//   else req.session.count++;
//   res.send(`You send request ${req.session.count} times`);
// });

app.get("/test", (req, res) => {
  res.send("test successful");
});

app.listen(8080, () => {
  console.log(`Server is listening at port 8080...`);
});
