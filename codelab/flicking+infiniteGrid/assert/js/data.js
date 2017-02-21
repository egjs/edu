var data = {
	itemTpl : _.template($("#items-template").html()),
	_getItems: function(offset, limit) {
		var items = _.range(limit)
			.map(function(n) {
				return {
					offset: offset + n,
					imgSrc: "../assert/img/" + (n + 1) + ".jpg",
					href: "http://naver.com/",
					desc: "Cras justo odio..."
				};
			});
		return items;
	},
	getItems : function() {
		var html = [];
		var data = this._getItems(1, 30);
		for(var v in data) {
			html.push(this.itemTpl(data[v]));
		}
		return $(html.join("")).filter(".item");
	}
};