const DSFunctionPrototype = require('./DSFunctionPrototype');

var DataStructureFactory =  {
	Queue: Object.assign({}, DSFunctionPrototype.BaseCapacityPrototype, DSFunctionPrototype.BaseModifierPrototype, 
	                         DSFunctionPrototype.QueueElementAccessPrototype, DSFunctionPrototype.QueueModifierPrototype),
	Stack: Object.assign({}, DSFunctionPrototype.BaseCapacityPrototype, DSFunctionPrototype.BaseModifierPrototype, DSFunctionPrototype.StackPrototype),
	Deque: Object.assign({}, DSFunctionPrototype.BaseCapacityPrototype, DSFunctionPrototype.BaseModifierPrototype, DSFunctionPrototype.QueueElementAccessPrototype, 
	                         DSFunctionPrototype.DequeElementAccessPrototype, DSFunctionPrototype.DequeModifierPrototype),
	_create: function(prototypeOfObj){
		var dt = Object.create(prototypeOfObj);
		dt._array = [];
		return dt;
	},
	createStack: function(){ return this._create(this.Stack); },
	createQueue: function(){ return this._create(this.Queue); },
	createDeque: function(){ return this._create(this.Deque); }
};

module.exports = DataStructureFactory;
