import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hellokitty',
    database: 'hackathon'
});

app.post('/',async (req,res) => {
	const { type, doa , toa , budget ,dd , dt } = req.body
    const diffTime = Math.abs(doa - toa);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	if (budget == "low")
    {
        if (type == "solo")
        {

        }
    }
	console.log("hello");
	con.query(sql , async (err,result) => {
		if(err) return res.json("Error");
		else
		{
			console.log(result[0]['Password']);
			 hello = result[0]['Username']
			 const isMatch =  await bcrypt.compare(pass, result[0]['Password']);
             console.log(isMatch);
			if (isMatch) {
                const token = jwt.sign({user} , JWT_SECRET, { expiresIn: "30m" });
                console.log("Login successful, generated token:", token);
                return res.json({ token }); // Send token in the response
			}
			else
            {
                return res.json("Error");
            }
		}
	})
})
