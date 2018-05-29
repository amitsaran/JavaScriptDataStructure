var QueuePrototype = {
	_removeLeft: function(){ return this._array.shift(); },
	front: function(){ return this._left(); },
	back: function() { return this._right(); },
	enqueue: function(value){ this._addRight(value); }, 
	dequeue: function(){ return this._removeLeft(); }
};

module.exports = QueuePrototype;
