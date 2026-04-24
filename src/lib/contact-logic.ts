export function handleFileChange(event: { preventDefault(): void; target: unknown }): void {
  event.preventDefault()
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    const files = Array.from(target.files)
    const totalSize = files.reduce((sum, file) => sum + file.size, 0)
    
    if (totalSize > 10 * 1024 * 1024) {
      window.alert('Total file size exceeds 10MB limit.')
      target.value = ''
      return
    }
    
    files.forEach(file => {
      if (file.size > 10 * 1024 * 1024) {
        window.alert(`File "${file.name}" exceeds 10MB limit.`)
        target.value = ''
        return
      }
      
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf', 'application/zip']
      if (!allowedTypes.includes(file.type)) {
        window.alert(`File type "${file.name}" not allowed. Use PNG, JPG, PDF, or ZIP.`)
        target.value = ''
        return
      }
    })
    
    window.alert(`${files.length} file(s) selected successfully.`)
  }
}
