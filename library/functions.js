// untuk fungsi parralax scrolling element dan fixed background
$(window).scroll(function(){

	var i =5;
	var wScroll = $(this).scrollTop(); //menghitung atau memonitor aktifitas scroll user di halaman

	$('.logo').css({ //memindahkan posisi elemen logo seiring dengan scroll
		'margin-top' : '-'+(wScroll /2) +'px'
	});

	$('.bayangan').css({ //memindahkan posisi elemen bayangan sesuai dengan scroll juga
		'margin-top' : +(wScroll *1.3) +'px'
	});

	$('.bayangan h1').css({ //memindahkan posisi elemen heading bayangan sesuai dengan scroll juga
		'text-shadow' : '0 0 '+ (18+(wScroll/18)) +'px #000'
	});

	if (wScroll>100){ //menampilkan navigasi jika halaman di scroll ke bawah sedikit
		$('.navigation').css({
		'top' : '-10px'
	});
	}
	
	if (wScroll<100){ //menyembunyikan kembali bar navigasi jika halaman sudah di scroll ke atas
		$('.navigation').css({
		'top' : '-65px'
	});
	}

	if(wScroll > $('.about').offset().top-350) { //jika scroll sudah menyentuh offset element about. maka element about akan ditampilkan
			$('.about').addClass('ditampilkan'); //element div about ditambahkan class css .ditampilkan sehingga mengubah property css dari about default
			$('.skill-lockup').addClass('ditampilkan');
	}

	if(wScroll > $('.skill-lockup').offset().top-550) {
			$('.skill-lockup').addClass('ditampilkan');
	}

	if(wScroll > $('.portofolio').offset().top-300) {
			$('.portofolio').addClass('ditampilkan');
	}

	if(wScroll > $('.contact-container').offset().top-350) {
			$('.contact-container').addClass('ditampilkan');
			$('.contact-header').addClass('ditampilkan');
	}

	// remove class ditampilkan

	if(wScroll < $('.portofolio').offset().top-300) {
			$('.portofolio').removeClass('ditampilkan');
	}

	if(wScroll < $('.about').offset().top-350) {
			$('.about').removeClass('ditampilkan');
	}

	if(wScroll < $('.skill-lockup').offset().top-550) {
			$('.skill-lockup').removeClass('ditampilkan');
	}

	if(wScroll < $('.contact-container').offset().top-350) {
			$('.contact-container').removeClass('ditampilkan');
			$('.contact-header').removeClass('ditampilkan');
	}
});

function loginwrap(){
	$('.login-wrap').fadeToggle();
}

function login(){
	var usernames = document.getElementById('username').value;
	var passwords = document.getElementById('password').value;

	if (usernames == 'admin' && passwords == 'admin'){
		alert('selamat datang admin');
		return true;
	}
	else if (usernames == null || usernames == "") {
		alert('username tidak diisi');
		return false;
	}
	else if (passwords == null || passwords == "") {
		alert('password tidak diisi');
		return false;
	}
	else if (usernames != 'admin' || passwords != 'admin'){
		alert('username/password salah');
		return false;
	}
}