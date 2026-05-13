import './post.scss';

window.phclb_copy_admin_shortcode = id => {
	var input = document.querySelector('#phclb-admin-shortcode-' + id + ' input');
	var tooltip = document.querySelector('#phclb-admin-shortcode-' + id + ' .tooltip');
	input.select();
	input.setSelectionRange(0, 99999);
	document.execCommand('copy');
	tooltip.innerHTML = wp.i18n.__('Copied Successfully!', 'cards-layout');
	setTimeout(() => {
		tooltip.innerHTML = wp.i18n.__('Copy To Clipboard', 'cards-layout');
	}, 1500);
}