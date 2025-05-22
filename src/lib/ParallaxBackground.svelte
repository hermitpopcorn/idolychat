<div class="parallax-bg">&nbsp;</div>

<style>
	.parallax-bg {
		width: 1000%;
		height: 1000%;
		background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%20transform%3D%22translate(20%2015)%22%3E%3Cpath%20fill%3D%22%23494949%22%20fill-rule%3D%22evenodd%22%20d%3D%22M%200%2013.8%20h%202.5%20V%200.2%20H%200%20v%2013.6%20M%2064%200.2%20h%20-58.7%20v%202.5%20H%2010%20c%200.7%200%201.3%200.6%201.3%201.3%20c%200%200.7%20-0.6%201.3%20-1.3%201.3%20h%20-4.8%20v%208.5%20h%202.5%20v%20-6%20H%2010%20c%202.1%200%203.8%20-1.7%203.8%20-3.8%20c%200%20-2.1%20-1.7%20-3.8%20-3.8%20-3.8%22%2F%3E%3C%2Fsvg%3E")
			repeat;
		background-size: 96px;
		z-index: 0;
		transform: rotate(45deg);
		position: fixed;
		animation-name: animation-parallax;
		animation-duration: 60s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@keyframes animation-parallax {
		0% {
			translate: -50% -50%;
		}
		100% {
			translate: -57% -59%;
		}
	}
</style>
