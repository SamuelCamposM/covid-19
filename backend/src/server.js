import express, {json, urlencoded} from "express"; 
import morgan from "morgan";
import path from "path";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";
import cors from "cors";
import { conectarDB } from "./database";
//initializations
const app = express()

import('./passport/localauth')
import('./passport/facebook-auth')
//settings

app.set('views', path.join(__dirname+ '/views'))

//middlewares
app.use(cors())
app.use(session({
    secret:'mysecretsesion',
    resave:false,
    saveUninitialized:false
}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({extended:false}))

app.use((req, res , next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signinMessage = req.flash('signinMessage');
    next()
})

//routes
import routes from "./routes/routes";
app.use('/', routes);

//Servidor
let puerto = process.env.PORT || 3000

app.listen(puerto, () =>{
    console.log(`server on port ${puerto}`)
    conectarDB() // funcion para conectar a MongoDB
})