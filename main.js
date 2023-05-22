const sunMoonContainer = document.querySelector('.sun-moon-container')

const toggleButton = document.querySelector('.theme-toggle-button')
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue('--rotation')
  )
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})
