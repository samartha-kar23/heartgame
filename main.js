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
    var gf9 = 'Mink Shree Dutta';
    var gf10 = 'minkshree dutta';
    var gf11 = 'Minkshree Dutta';
    var gf12 = 'Minkshree dutta';
    
	if(input_value == gf1 || gf2 || gf3 || gf4 || gf5 || gf6 || gf7 || gf8 || gf9 || gf10 || gf11 || gf12) {
		alert('YES, Its "'+input_value+'", You are in my heart! Mmwhaah X)');
	} else {
		alert('No she is not in my heart, keep trying sweetheart!');
	}
});