const btnSwitch = document.querySelector('#switch');

let darkMode = localStorage.getItem("darkMode");

if (darkMode === "true") {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	document.querySelector('#nav').classList.toggle('dark');
}

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	document.querySelector('#nav').classList.toggle('dark');

	if (darkMode === "true") {
		localStorage.setItem("darkMode", "false");
	} else localStorage.setItem("darkMode", "true");

<<<<<<< HEAD
});
=======
});
>>>>>>> c84ae9b97863d4019f228c0c36f1f8d4bca95ed7
