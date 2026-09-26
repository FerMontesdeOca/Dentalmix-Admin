const form = document.getElementById('login-form');
const errorBox = document.getElementById('login-error');

function siguientePagina() {
  const params = new URLSearchParams(window.location.search);
  return params.get('next') || 'index.html';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorBox.hidden = true;

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    errorBox.textContent = data.error || 'No se pudo iniciar sesion.';
    errorBox.hidden = false;
    return;
  }

  window.location.href = siguientePagina();
});

// Mientras la pagina no tenga usuarios, se ofrece crear el primer administrador.
fetch('/api/setup-disponible')
  .then((res) => res.json())
  .then(({ disponible }) => {
    if (disponible) document.getElementById('link-setup').hidden = false;
  })
  .catch(() => {});

// Si alguien llega aqui con "setup.html" en la direccion, se le manda a esa pagina.
if (siguientePagina().includes('setup.html')) window.location.href = 'setup.html';
