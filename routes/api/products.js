var express = require('express');
var data = require('../../data/products');
var router = express.Router();
var _ = require('lodash');
var name = null;
var id = null;

router.get('/', function (req, res) {
  res.json(data);
});

router.get('/:id', function (req, res)
{
	id = req.params.id;
	console.log(id);
	var product = _.filter(data.list, findProductById);
	if(_.size(product) > 0) {
		res.send(product);
	}
	else
	{
		res.status(404);
		res.send('<h1> 404 Not Found </h1>')
	}
})

router.get('/search/:name', function (req, res)
{
	name = req.params.name;
	console.log(name);
	var product = _filter(data.list, findProductByName);
	res.send(product);
})

var findProductById = function (product)
{
	return product.id == id;
}

var findProductByName = function (product)
{
	return _.toLower(product.name) == _.toLower(name);
}

router.post('/', function (req, res)
{
	data.list.push('"id":3, "name":"Beldent", "price":20:00');
})

router.put('/:id', function ()
{
	id = req.params.id;
	var product = _.filter(data.list, findProductById);
	if(_.size(product) > 0) {
		product.name = 'Chupetin';
		product.price = '5.00';
	}
	else
	{
		res.status(404);
		res.send('<h1>404 Not Found </h1>')
	}
})

router.delete('/:id', function () 
{
	id = req.params.id;
	var products = _.pull(data.list, findProductById);
	res.send(products);
})
module.exports = router;
