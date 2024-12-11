// Optional: You can use JavaScript to add additional functionality
// For example, you can log the link clicked or add animations for interactivity

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Link clicked:', this.textContent);
    });
});
