export default function Chati_chati() {
  return (
    <div>
      <h1>📱 Chatting App: A Glimpse into the Development</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lPeQD8z2uZc?si=btTmIRzcGjMkfpVW?autoplay=1&mute=1&loop=1"
        title="YouTube video player"
        frameborder="0"
        autoplay = '1'
        mute = '1'
        loop = '1'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2>👋 Introduction:</h2>
      <p>
        Hello there! Today, I'm excited to provide you with a preview of an
        ongoing development project - a chat application built using React and
        WebSocket technology. Please note that what I'll be presenting focuses
        on the app's current state, highlighting its key functionalities and
        technologies.
      </p>
      <h2>📱 Chatting App: A Platform for Real-Time Communication</h2>
      <p>
        In this phase of development, we're offering you a peek into the core
        features and technologies that make up the foundation of the chatting
        app:
      </p>
      <h2>🚀 Real-Time Communication with WebSockets:</h2>
      <p>
        The heartbeat of this application is WebSockets, a technology that
        enables real-time communication between clients and servers. WebSockets
        allow for seamless, instant updates in the chat interface without the
        need to constantly refresh the page.
      </p>
      <h2>🌐 Connect and Disconnect Buttons:</h2>
      <h3>Connect Button:</h3>
      <p>
        {" "}
        Users have the ability to establish a WebSocket connection by clicking
        the "Connect" button. This initiates the real-time communication
        channel, enabling them to send and receive messages.
      </p>
      <h3>Disconnect Button:</h3>
      <p>
        Similarly, the "Disconnect" button allows users to gracefully close the
        WebSocket connection when they're done chatting.
      </p>
      <h2>💌 Send Button for Instant Messaging:</h2>
      <h3>Send Button:</h3>
      <p>
        The "Send" button is the gateway to sending messages within the chat.
        Users can craft their messages and hit "Send" to instantly share their
        thoughts with others in the conversation.
      </p>
      <h2>💬 Real-Time Interaction:</h2>
      <h3>
        As part of the ongoing development, the chat application's frontend and
        WebSocket integration allow users to:
      </h3>
      <h3>Initiate Connections:</h3>
      <p>
        By clicking "Connect," users open a communication channel for real-time
        messaging.
      </p>
      <h3>Exchange Messages:</h3>
      <p>
        {" "}
        Users can type messages, hit "Send," and experience the exhilaration of
        seeing their words appear in the chat interface instantly.
      </p>
      <h3>Seamless Experience:</h3>
      <p>
        The combination of React and WebSockets ensures that users enjoy a
        smooth and uninterrupted chat experience.
      </p>
      <h2>📈 Future Progress:</h2>
      <p>
        We're eager to continue developing and enhancing the chatting app. As
        development progresses, you can anticipate even more interactive
        features, improved user interfaces, and refined user experiences.
      </p>
    </div>
  );
}
