export default function Home() {
  return (
    <html>
      <body>
        <div style={{ 
          padding: '2rem', 
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h1>🤖 Library AI</h1>
          <p>Simple LLM chat with Ollama</p>
          
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '8px',
            marginTop: '2rem'
          }}>
            <h2>Setup Required:</h2>
            <ol>
              <li>Install Ollama: <a href="https://ollama.ai" target="_blank">https://ollama.ai</a></li>
              <li>Pull a model: <code>ollama pull llama2</code></li>
              <li>Start Ollama: <code>ollama serve</code></li>
            </ol>
          </div>
          
          <div style={{ 
            backgroundColor: '#d4edda', 
            padding: '1rem', 
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid #c3e6cb'
          }}>
            <h3>✅ Services Running:</h3>
            <ul>
              <li>Frontend: <strong>http://localhost:3002</strong></li>
              <li>Backend: <strong>http://localhost:8080</strong></li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#e9ecef', 
            padding: '1rem', 
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <h3>🔗 API Endpoints:</h3>
            <ul>
              <li><a href="http://localhost:8080/health" target="_blank">Health Check</a></li>
              <li><a href="http://localhost:8080/api/chat" target="_blank">Chat API</a></li>
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: '#fff3cd', 
            padding: '1rem', 
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid #ffeaa7'
          }}>
            <h3>💡 Test the API:</h3>
            <pre style={{ 
              backgroundColor: '#fff', 
              padding: '10px', 
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '12px'
            }}>
{`curl -X POST http://localhost:8080/api/chat \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hello!"}'`}
            </pre>
          </div>
        </div>
      </body>
    </html>
  )
}