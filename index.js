const formatDate = (timeInSeconds) => {
	var time = `${timeInSeconds}`;
  	var hours = parseInt(time/3600);
  	var min = parseInt((time - (hours * 3600)) / 60);
  	var second = parseInt(((time - (hours * 3600)) - min * 60));
  
  
  	if (time < 60) {
    	return second + 's';
  	}
  	
  	else if (time < 3600) {
  		if (second === 0) {
  			return min +'m';
  		}
  		else {
			return min +'m ' + second + 's';
		} 
	}
	
  	else if (time >= 3600) {
  		if (min === 0 && second === 0) {
  			return hours + "h";
  		}
  		else if (second === 0) {
  			return hours + "h " + min + "m";
  		}
  		else if (min === 0) {
  			return hours + "h " + second + "s";
  		}
  		else {
			return hours + "h " + min + "m " + second + "s";
		}
	}

	else {
  		return '0s';
  	}
}

module.exports = formatDate;