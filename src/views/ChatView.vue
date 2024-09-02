<template>
    <div class="chat-container">
      <div class="chat-header">
        <img src="https://placehold.co/100x100" alt="Profile Picture" />
        <div class="chat-header-info">
          <h3>Mamita@5</h3>
          <p>Hi there, how can I help you?</p>
        </div>
      </div>
      <div class="chat-messages">
        <div class="message sender">
          <img src="https://placehold.co/50x50" alt="User Profile Picture" />
          <div class="message-content">
            <p>lolo</p>
          </div>
        </div>
        <div class="message recipient">
          <div class="message-content">
            <p>Hey Mamita, I'd like you to help me with copying when facing distress.</p>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Type in message..." />
        <button>Send</button>
      </div>
    </div>
  </template>