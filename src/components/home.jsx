import { useState } from "react";
import AddCustomer from "./addCustomer.jsx";

function Home() {
  const [queue, setQueue] = useState([]);

  const addTicket = (name, service) => {
    const id = Date.now();
    setQueue([...queue, { id, name, service, status: "waiting" }]);
  };

  const serveTicket = (id) => {
    setQueue(
      queue.map((t) => (t.id === id ? { ...t, status: "serving" } : t))
    );
  };

  const completeTicket = (id) => {
    setQueue(
      queue.map((t) => (t.id === id ? { ...t, status: "completed" } : t))
    );
  };

  const removeTicket = (id) => {
    setQueue(queue.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">Queue Management System</h1>
      <p className="subtitle">Manage your customers efficiently</p>

      <div className="layout">
        <AddCustomer onAdd={addTicket} />

        <section className="card">
          <h2 className="card-title">Current Queue</h2>

          {queue.length === 0 ? (
            <p className="empty">Koi nahi hai</p>
          ) : (
            queue.map((ticket) => (
              <div className="ticket" key={ticket.id}>
                <div className="ticket-info">
                  <strong>{ticket.name}</strong>
                  <span className="muted">Service: {ticket.service}</span>
                  <span className={`status status-${ticket.status}`}>
                    {ticket.status}
                  </span>
                </div>

                <div className="ticket-actions">
                  {ticket.status === "waiting" && (
                    <button
                      className="btn-serve"
                      onClick={() => serveTicket(ticket.id)}
                    >
                      Serve
                    </button>
                  )}

                  {ticket.status === "serving" && (
                    <button
                      className="btn-serve"
                      onClick={() => completeTicket(ticket.id)}
                    >
                      Done
                    </button>
                  )}

                  <button
                    className="btn-remove"
                    onClick={() => removeTicket(ticket.id)}
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;