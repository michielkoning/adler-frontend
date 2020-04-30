export default (frame, src) => {
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window
  ) {
    const pctObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          frame.src = src
          pctObserver.unobserve(frame)
        }
      })
    })
    pctObserver.observe(frame)
  } else {
    frame.src = src
  }
}
