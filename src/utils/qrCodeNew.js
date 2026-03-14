export function downloadQRCode(ref) {
    const canvas = ref.current
    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'qrcode.png'
    link.click()
}