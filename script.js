function toggleMenu(button) {
  button.classList.toggle('open');
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}
function filterCategory(category) {
    const items = document.querySelectorAll('.itemCard');
    const buttons = document.querySelectorAll('.filterBtn');

    buttons.forEach(Btn => {
        Btn.classList.remove('active');
        if(Btn.innerText.toLowerCase() === category) {
            Btn.classList.add('active');
        }
    });

    items.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hide');
        } else {
            if (item.classList.contains(category)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        }
    });
}