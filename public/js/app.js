const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	},
});

loginForm?.addEventListener('submit', async (e) => {
	e.preventDefault();

	const res = await fetch('/login', {
		method: 'POST',
		body: new FormData(loginForm),
	});
	if (res.ok) {
		const json = await res.json();
		if (json.success && json.success == true) {
			Toast.fire({
				icon: 'success',
				title: json.message,
			});
			setTimeout(() => {
				location.reload();
			}, 2000);
		} else {
			Toast.fire({
				icon: 'error',
				title: json.error,
			});
		}
	} else {
		Toast.fire({
			icon: 'error',
			title: 'Something went wrong!',
		});
	}
});
