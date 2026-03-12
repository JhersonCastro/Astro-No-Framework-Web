  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const form = e.target;
    const messageDiv = document.getElementById('formMessage');
    
    const nickname = form.nickname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const motivo = form.motivo.value;
    const mensaje = form.mensaje.value.trim();
    const prefContacto = form.querySelector('input[name="prefContacto"]:checked');
    const terminos = form.terminos.checked;
    
    let errors = [];
    
    if (!nickname) errors.push('El nombre es obligatorio');
    if (!email) errors.push('El email es obligatorio');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Email no válido');
    
    if (!phone) errors.push('El teléfono es obligatorio');
    else if (!/^\d{10}$/.test(phone.replace(/\s/g, ''))) errors.push('Teléfono no válido (deben ser 10 dígitos)');
    
    if (!motivo) errors.push('Selecciona un motivo');
    if (!mensaje) errors.push('El mensaje no puede estar vacío');
    if (!prefContacto) errors.push('Selecciona una preferencia de contacto');
    if (!terminos) errors.push('Debes aceptar los términos');
    
    if (errors.length > 0) {
      messageDiv.innerHTML = errors.join('<br>');
      messageDiv.classList.add('text-red-400');
      messageDiv.classList.remove('text-green-400');
    } else {
      messageDiv.innerHTML = '¡Mensaje enviado! Gracias por contactarme.';
      messageDiv.classList.add('text-green-400');
      messageDiv.classList.remove('text-red-400');
      
      setTimeout(() => {
        form.reset();
        messageDiv.innerHTML = '';
      }, 3000);
    }
  });