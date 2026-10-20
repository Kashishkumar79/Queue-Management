import { useState } from "react";

function AddCustomer({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service) return;

    onAdd(name.trim(), service);

    setName("");
    setService("");
  };

  return (
    <form className="card add-card" onSubmit={handleSubmit}>
      <h2 className="card-title add-title">Add to Queue</h2>

      <input
        className="field"
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="field"
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option value="">Select Service</option>
        <option value="billing">Billing</option>
        <option value="support">Support</option>
        <option value="enquiry">Enquiry</option>
      </select>

      <button
        className="btn-primary"
        type="submit"
        disabled={!name.trim() || !service}
      >
        Add Customer
      </button>
    </form>
  );
}

export default AddCustomer;