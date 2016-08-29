var hotelData = require('../data/hotel-data.json');

module.exports.hotelGetAll = function(req,res){
	console.log("Inside the hotelGetAll");
	console.log(req.query);

	var offset = 0;
	var count = 2;

	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset,10);
	}

	if(req.query && req.query.count){
		count = parseInt(req.query.count,10);
	}

	console.log('offset-->',offset);
	console.log('count-->',count);
	var slicedData = hotelData.slice(offset,offset+count);


	res.status(200)
	.json(slicedData);
};

module.exports.hotelGetOne = function(req,res){
	console.log("Inside the hotelGetOne");
	var hotelId = req.params.hotelId;
	var hotelDataOne = hotelData[hotelId];

	res.status(200)
	.json(hotelDataOne);
};

module.exports.hotelAddOne = function(req,res){
	console.log("Adding new hotel");
	console.log(req.body);

	res
	.status(200)
	.json(req.body);
};
