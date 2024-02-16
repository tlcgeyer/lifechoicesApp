import { userRouter, express } from "../Controller/UserController.js";
import { productRouter } from "../Controller/ProductController.js";
import cookieParser from "cookie-parser"
import { errorHandling } from "../middleware/ErrorHandling.js";
import { config } from "dotenv";
config()

const app = express()
const port = +process.env.port || 4000

//Middleware
app.use((req,res, next) => {
    // this code allows everyone to view this api
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*"); // allowing all http methods
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
} )


app.use(
    express.static('/static'),
    express.json(),
    express.urlEncoded({
        extended: true,
    }),
    cookieParser,
    cors()
)

app.get('^/$|/lifechoicesApp', (req, res) => {
    res.statusCode(200).sendFile(path.join(__dirname, '../static/index.html'))
    
})

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})