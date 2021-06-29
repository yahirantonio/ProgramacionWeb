const express = require('express')

class Server{
	constructor(){
		this.app = express()
		this.PORT = process.env.PORT;
		
		// middlewares
		this.middleware()
		// rutas
		this.routes();
	}

	middleware(){
		this.app.use(express.static('public'))
	}

	routes(){
		this.app.get('/api', (req, res) =>{
  			res.send('Hello World')
		})
	}

	listen(){
		this.app.listen(this.PORT, ()=>{
			console.log('servidor creado en el port : 8080')
		});
	}
}

module.exports = Server;