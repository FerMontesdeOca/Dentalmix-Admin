const form = document.getElementById('setup-form');
const errorBox = document.getElementById('setup-error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorBox.hidden = true;

  const res = await fetch('/api/setup-admin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-setup-token': document.getElementById('token').value },
    body: JSON.stringify({
      nombre: document.getElementById('nombre').value.trim(),
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value,
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    errorBox.textContent = data.error || 'No se pudo crear el administrador.';
    errorBox.hidden = false;
    return;
  }

  alert('Administrador creado. Ahora inicia sesion con ese email y contraseña.');
  window.location.href = 'login.html';
});
