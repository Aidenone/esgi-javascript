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
console.log(camelCase(" oui njnejscn hdbfshdf dnbfs     nsdfbdh    "));