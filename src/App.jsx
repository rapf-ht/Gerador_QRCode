import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { downloadQRCode } from './utils/qrCodeNew.js'

function App() {
  const [text, setText] = useState('') // Estado para armazenar o texto do QR code
  const qrRef = useRef(null) // Referência para o componente QR code

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-800 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Gerador de QR Code</h1>
      <div className="flex flex-col justify-center mt-4">
        <p className="mb-2 dark:text-white">Digite o texto ou URL para gerar o QR code:</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)} // Atualiza o estado com o valor do input
          placeholder="https:"
          className="dark:text-white dark:bg-gray-600 border p-2 rounded-l"
        />
      </div>
      <div className="mt-10">
        <QRCodeCanvas value={text} ref={qrRef} size={250} /> {/* Componente QR code que gera o código com base no texto */}
      </div>
      <button
        onClick={() => downloadQRCode(qrRef, text)} // Chama a função de download ao clicar
        className="mt-5 bg-green-700 text-white p-2 rounded-r hover:bg-green-400 transition-colors buttonDownload"
      >
        Baixar QR Code
      </button>
    </div>
  )
}
export default App
