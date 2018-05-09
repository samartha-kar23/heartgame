$('#btn').click(function() {
	var input_value = $('#gfname').val();
    var gf1 = 'mink shree';
    var gf2 = 'Mink Shree';
    var gf3 = 'Mink shree';
    var gf4 = 'minkshree';
    var gf5 = 'Minkshree';
    var gf6 = 'MinkShree';
    var gf7 = 'Keya';
    var gf8 = 'keya';
    var gf13 = 'Mink';
    var gf14 = 'mink';
    var gf9 = 'Mink Shree Dutta';
    var gf10 = 'minkshree dutta';
    var gf11 = 'Minkshree Dutta';
    var gf12 = 'Minkshree dutta';
    
    if(input_value == gf1 || input_value == gf2 || input_value == gf3 || input_value == gf4 ||
        input_value == gf5 || input_value == gf6 || input_value == gf7 || input_value == gf8 ||
        input_value == gf9 || input_value == gf10 || input_value == gf11 || input_value == gf12 || input_value == gf13 ||
        input_value == gf14) {
		alert('YES, Its "'+input_value+'", You are in my heart! Mmwhaah X)');
	} else {
		alert('No she is not in my heart, keep trying sweetheart!');
	}
});