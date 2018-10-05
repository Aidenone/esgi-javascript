function ucfirst(str) {
	return str[0] ? str[0].toUpperCase()+str.substring(1) : "";
}

function capitalize(str) {
		var maj = true;
    str = str.split(" ");
		for (var i = 0; i < str.length; i++) {
        str[i] = ucfirst(str[i]);
    }
		return str.join(" ");
}

function camelCase(str) {
		str = capitalize(str);
    str = str.split(' ').join('');
    return str;
}

function prop_access(object, path) {
    var array_path = path.split(".");
    var obj = object;
    for (var attr in array_path) {
        var test = array_path[attr];
        obj = obj[test];
        if(obj === undefined) return path+" doesn't exist.";
    }
    if(!obj) {
        return object;
    }
}

//Object.setPrototypeOf(Correction, ...)