const forgetPasswordForm = document.getElementById('forget-password-form');

forgetPasswordForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;

  try {
    // Send request to reset password API
    const resp = await fetch('/api/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    const data = await resp.json();
    if (data.success) {
      alert('Reset link sent to your email!');
    } else {
      alert('Error sending reset link');
    }
  } catch (error) {
    console.error(error);
  }
});