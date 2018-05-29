var StackPrototype = {
	_removeRight: function(){ return this._array.pop(); },
	bottom: function(){ return this._left(); },
	top: function() { return this._right(); },
	push: function(value){ this._addRight(value); }, 
	pop: function(){ return this._removeRight(); }
};

module.exports = StackPrototype;
