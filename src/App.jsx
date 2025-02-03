import { useState } from 'react'
import './App.css'

function App() {
  const [user] = useState(null)

  return (
    <div className="app-container">
      <header>
        <h1>ChatBoi</h1>
        <nav>
          {user ? (
            <button className="sign-out">Sign Out</button>
          ) : (
            <button className="sign-in">Sign In with Google</button>
          )}
        </nav>
      </header>

      <main>
        {user ? (
          <div className="chat-container">
            <div className="messages">
              {/* Messages will go here */}
              <p className="message">Welcome to ChatBoi! Messages will appear here.</p>
            </div>
            <form className="new-message-form">
              <input
                type="text"
                placeholder="Type your message..."
                disabled={!user}
              />
              <button type="submit" disabled={!user}>Send</button>
            </form>
          </div>
        ) : (
          <div className="welcome-container">
            <h2>Welcome to ChatBoi</h2>
            <p>Sign in to start chatting!</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
