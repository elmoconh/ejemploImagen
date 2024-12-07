import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [mensajes, setMensajes] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    axios
      .get(`${apiUrl}/mensajes`)
      .then((response) => {
        setMensajes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los mensajes:", error);
      });
  }, [apiUrl]);

  return (
    <div>
      <h1>Mensajes</h1>
      <ul>
        {mensajes.map((mensaje, index) => (
          <li key={index}>{mensaje.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
