document.addEventListener('DOMContentLoaded', function () {
    const showMore = document.querySelector('.show-more');
    const contentHid = document.querySelector('.content-hid');

    showMore.addEventListener('click', function () {
        if (contentHid.style.display === 'none') {
            contentHid.style.display = 'inline';
            showMore.textContent = 'Show Less';
        } else {
            contentHid.style.display = 'none';
            showMore.textContent = 'Show More';
        }
    });
});
