document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.addEventListener('click', function(e) {
    const { classList } = this;
    const OPEN = 'open';
    if (classList.contains(OPEN)) {
      classList.remove(OPEN);
    } else {
      classList.add(OPEN);
    }
  }));
});
