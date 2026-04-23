export function runSpeedTest(event: { preventDefault(): void }): void {
  event.preventDefault()
  
  // Simulate speed test with realistic timing and progress
  const startTime = performance.now()
  let progress = 0
  const duration = 3000 // 3 seconds test
  
  const progressInterval = setInterval(() => {
    progress += Math.random() * 20
    if (progress > 95) progress = 95
    // Update progress would go to state in real app
  }, 100)
  
  setTimeout(() => {
    clearInterval(progressInterval)
    const endTime = performance.now()
    const testDuration = (endTime - startTime) / 1000
    const speedMbps = Math.max(500, Math.random() * 2000 + 800).toFixed(1) // 800-2800 Mbps realistic range
    window.alert(`Download Speed: ${speedMbps} Mbps\nTest completed in ${testDuration.toFixed(1)}s`)
  }, duration)
}
