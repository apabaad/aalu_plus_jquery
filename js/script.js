$ (document).ready(function(){
	var x="x";
	var o="o";

	var count = 0;

	//get spot id
	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');

	$('#board li').on('click', function(){
		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o')
	){
		alert('Winner is O');
		$('#board li').text('+');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');
		$('#board li').css('color','#ccc');
		
		
	} 
	else if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x')
	){
		
		alert('Winner is X');
		$('#board li').text('+');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');
		$('#board li').css('color','#ccc');
	}
	else if (count == 9){
		alert('The game is tie');
		$('#board li').text('+');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');
		$('#board li').css('color','#ccc');
		count=0;
	}
	else if ($(this).hasClass('disable')){
		alert('This spot is already filled.');
	}

	else if(count%2 == 0){
		count++;
		$(this).text('o');
		$(this).addClass('disable');
		$(this).addClass('o');
		$(this).css('color','blue');
		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o')
	){
			alert('Winner is 0');
			count=0;
			// $('#board li').text('+');
			// $('#board li').removeClass('o');
			// $('#board li').removeClass('x');
			// $('#board li').css('color','#ccc');
			// $('#board li').removeClass('disable');
			}
	}
	else{
		count++;
		$(this).text('x');
		$(this).addClass('disable');
		$(this).addClass('x');
		$(this).css('color','yellow');
		if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x')
	){
			
			count=0;
			// $('#board li').text('+');
			// $('#board li').removeClass('o');
			// $('#board li').removeClass('x');
			// $('#board li').css('color','#ccc');
			// $('#board li').removeClass('disable');
			alert('Winner is X');
			}
	}

});
	$('#reset').on('click',function(){
		$('#board li').text('+');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');
		$('#board li').css('color','#ccc');
		$('#board li').removeClass('disable');
		count=0;
	});
});