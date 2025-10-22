function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]')
  if (timeElement) {
    timeElement.textContent = Date.now()
  }
}

// Initialize time display
updateTime()

// Update time every second
setInterval(updateTime, 1000);

// Add keyboard navigation enhancement for social links
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-links a")

  socialLinks.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        link.click()
      }
    })
  })
})

// Add functionality to change background color on hover
document.addEventListener("DOMContentLoaded", () => {
  const hoverElements = document.querySelectorAll(".hover-change")

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.backgroundColor = "lightblue"
    })

    element.addEventListener("mouseleave", () => {
      element.style.backgroundColor = ""
    })
  })
})
