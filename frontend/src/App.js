import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  // Cargar mensajes
  useEffect(() => {
    axios.get('http://localhost:5001/mensajes')
      .then(res => setMensajes(res.data))
      .catch(err => console.error(err));
  }, []);

  // Enviar mensaje
  const enviarMensaje = () => {
    if (!nuevoMensaje) return;
    axios.post('http://localhost:5001/mensajes', { contenido: nuevoMensaje })
      .then(res => setMensajes([...mensajes, res.data]))
      .catch(err => console.error(err));
    setNuevoMensaje('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mensajes</h1>
      <ul>
        {mensajes.map(msg => (
          <li key={msg.id}>{msg.texto}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevoMensaje}
        onChange={e => setNuevoMensaje(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button onClick={enviarMensaje}>Enviar</button>
    </div>
  );
}

export default App;