const phase = document.querySelector('#phase');
const intensity = document.querySelector('#intensity');
const field = document.querySelector('.field-wrap');
const clock = document.querySelector('#clock');
const status = document.querySelector('#formStatus');

function updateField() {
  document.querySelector('#phaseOutput').value = `${Math.round(phase.value * 3.6)}°`;
  document.querySelector('#intensityOutput').value = `${intensity.value}%`;
  field.style.filter = `brightness(${0.65 + intensity.value / 200}) hue-rotate(${phase.value - 42}deg)`;
}
phase.addEventListener('input', updateField);
intensity.addEventListener('input', updateField);
document.querySelector('#fieldForm').addEventListener('submit', (event) => { event.preventDefault(); status.textContent = 'Configuration committed. Field recalibrating.'; });
document.querySelector('#engageButton').addEventListener('click', () => { document.querySelector('#console').scrollIntoView({behavior:'smooth'}); status.textContent = 'Field link engaged. Adjust variables to continue.'; });
document.querySelector('#modeButton').addEventListener('click', (event) => { event.currentTarget.textContent = event.currentTarget.textContent.includes('LIVE') ? 'INTERFACE: FOCUS' : 'INTERFACE: LIVE'; document.body.classList.toggle('focus-mode'); });
function tick() { clock.textContent = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false}); }
tick(); setInterval(tick, 1000);
