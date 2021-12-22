const button = document.querySelector('.container .button');
const dice1 = document.querySelector('.container .dice-border .dice1 img');
const dice2 = document.querySelector('.container .dice-border .dice2 img');

button.addEventListener('click', function(){
	function roll1(){
		const a =['1','2','3','4','5','6'];
		const time = new Date().getTime();

		setInterval(function(){

			if(new Date().getTime() - time > 1500){
				clearInterval;
				return;
			}

				let r = Math.round(Math.random()*5);

				dice1.setAttribute('src', 'img/dice' + a[r] + '.png');
		}, 150);
	}

	function roll2(){
		const a =['1','2','3','4','5','6'];
		const time = new Date().getTime();

		setInterval(function(){

			if(new Date().getTime() - time > 1500){
				clearInterval;
				return;
			}

				let r = Math.round(Math.random()*5);

				dice2.setAttribute('src', 'img/dice' + a[r] + '.png');
		}, 150);
	}

	roll1();
	roll2();

});