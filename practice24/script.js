
// Show toast function
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-message').textContent = message;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');
  setTimeout(hideToast, 3000); // Auto-hide after 3 seconds
}

// Hide toast function
function hideToast() {
  const toast = document.getElementById('toast');
  toast.classList.remove('opacity-100');
  toast.classList.add('opacity-0', 'pointer-events-none');
}

// Example usage:
 showToast('Hello, this is your notification!');
