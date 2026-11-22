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

function updateTelemetry() {
  const coherence = (97.8 + Math.random() * 1.1).toFixed(1);
  const depth = (4.5 + Math.random() * 0.45).toFixed(2);
  const drift = (0.001 + Math.random() * 0.006).toFixed(3);
  document.querySelector('#coherence').innerHTML = `${coherence}<span>%</span>`;
  document.querySelector('#depth').innerHTML = `${depth}<span> ql</span>`;
  document.querySelector('#drift').innerHTML = `${drift}<span> hz</span>`;
}

updateTelemetry();
setInterval(updateTelemetry, 2600);
