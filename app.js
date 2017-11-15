initialization();

function initialization() {

	var image1 = document.querySelector('[data-image-id="1"]');
	var image2 = document.querySelector('[data-image-id="2"]');
	var image3 = document.querySelector('[data-image-id="3"]');

	window.addEventListener('scroll', loadImageOnScrollViewListener(image1));
	window.addEventListener('scroll', loadImageOnScrollViewListener(image2));
	window.addEventListener('scroll', loadImageOnScrollViewListener(image3));

}

function loadImageOnScrollViewListener(element) {
	return function () {
		if (IsThisElementIsInView(element) && IsThisImageNotLoaded(element)) {
			loadImage(element)
		}
	};
}

function loadImage(element) {
	element.innerHTML = '<img src="' + element.getAttribute('data-image') + '">';
	element.setAttribute('data-image-loaded', "true")
}

function IsThisImageNotLoaded(element) {
	return element.getAttribute('data-image-loaded') === "false";
}

function IsThisElementIsInView(element) {
	var bounding = element.getBoundingClientRect();

	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
