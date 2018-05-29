// Stack, Queue and Deque
var DSFunctionPrototype = {			
	BaseCapacityPrototype: {
		size: function(){ return (this._array)?this._array.length:-1; },
		isEmpty: function(){ return (this.size() > 0)?false:true; }
	},
	BaseModifierPrototype: {
		_left: function(){ return (this.size() > 0)?(this._array[0]):undefined; },
		_right: function(){ return (this.size() > 0)?(this._array[this.size() - 1]):undefined; },
		_addLeft: function(value){ this._array.unshift(value); },
		_addRight: function(value){ this._array.push(value); },	
		_removeRight: function(){ return this._array.pop(); },
		_removeLeft: function(){ return this._array.shift(); }
	},
	QueueElementAccessPrototype: {
		front: function(){ return this._left(); },
		back: function() { return this._right(); }
	},
	QueueModifierPrototype: {		
		enqueue: function(value){ this._addRight(value); }, 
		dequeue: function(){ return this._removeLeft(); }
	},
	StackPrototype: {
		bottom: function(){ return this._left(); },
		top: function() { return this._right(); },
		push: function(value){ this._addRight(value); }, 
		pop: function(){ return this._removeRight(); }
	},
	DequeElementAccessPrototype: {
		at: function(index){ 
			if(index < this.size()){
				return this._array[index]; 
			}
			else{
				return 'ERROR';
			}
		}
	}, 
	DequeModifierPrototype: {
		push_front: function(value){ this._addLeft(value); }, 
		push_back: function(value){ this._addRight(value); }, 
		pop_front: function(){ return this._removeLeft(); },
		pop_back: function(){ return this._removeRight(); }
	}
};

module.exports = DSFunctionPrototype;
