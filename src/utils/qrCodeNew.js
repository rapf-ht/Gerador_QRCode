export function downloadQRCode (qrRef, text) {
    const href = qrRef.current.toDataUrl()
    const link = document.createElement('a')
    link.href = href
    link.download = `qrcode${text}.png` // Nome do arquivo de download
    document.body.appendChild(link) // Adiciona o link ao DOM
    link.click() 
    document.body.removeChild(link)
}