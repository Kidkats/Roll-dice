const button = document.querySelector('.container .button');
const dice1 = document.querySelector('.container .dice-border .dice1 img');
const dice2 = document.querySelector('.container .dice-border .dice2 img');
const result = document.querySelector('.container .result');

button.addEventListener('click', function(){
	function roll1(){
		const time = new Date().getTime();
		const a =['1','2','3','4','5','6'];
		let ran = Math.round(Math.random()*5);

		setInterval(function(){

			if(new Date().getTime() - time > 1500){
				clearInterval;
				return;
			}
				let b = Math.round(Math.random()*5);

				dice1.setAttribute('src', 'img/dice' + a[b] + '.png');

		}, 150);

		setTimeout(function(){
			dice1.setAttribute('src', 'img/dice' + a[ran] + '.png');
		},1500)

		return ran;
	};

	function roll2(){
		const time = new Date().getTime();
		const a =['1','2','3','4','5','6'];
		let ran = Math.round(Math.random()*5);

		setInterval(function(){

			if(new Date().getTime() - time > 1500){
				clearInterval;
				return;
			}
				let b = Math.round(Math.random()*5);

				dice2.setAttribute('src', 'img/dice' + a[b] + '.png');

		}, 150);

		setTimeout(function(){
			dice2.setAttribute('src', 'img/dice' + a[ran] + '.png');
		},1500)

		return ran;
	};

	function hasil(rolls1, rolls2){
		if(rolls1 === rolls2) return 'Double ' + ((rolls1 + 1) * 2);

		if(rolls1 !== rolls2) return (rolls1 + 1) + (rolls2 + 1);
	};

	const rolls1 = roll1();
	const rolls2 = roll2();
	const score = hasil(rolls1, rolls2);

	console.log(score);
	
	button.disabled = true;
	

	setTimeout(function(){
		button.disabled = false;
		result.innerHTML = 'Dice : ' + score;
	}, 1500);

});