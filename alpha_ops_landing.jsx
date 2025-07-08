import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', business: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate email submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans">
      <section className="p-10 text-center bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl font-bold mb-4">Alpha Ops</h1>
        <p className="text-xl mb-6">AI-Powered Growth. Zero BS.</p>
        <a href="#form" className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-xl text-lg font-semibold">Get Your Free Audit</a>
      </section>

      <section className="p-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-gray-900">
        {[
          { icon: '🔍', title: 'Lead Generation', desc: 'Automated outreach that books meetings daily.' },
          { icon: '🤖', title: 'Chatbots', desc: 'Instant customer support & sales assistance.' },
          { icon: '🎥', title: 'AI Video Ads', desc: '15-sec viral UGC content powered by AI.' },
          { icon: '🧠', title: 'AI Business Audits', desc: 'Know exactly what’s blocking your growth.' },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="bg-gray-800 p-6 rounded-2xl shadow-xl">
            <div className="text-4xl mb-3">{icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      <section id="form" className="p-10 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold mb-4">Get a Free AI Audit</h2>
        <p className="mb-6">Let Alpha Ops show you what’s leaking revenue — no cost, no BS.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
            <input className="p-3 rounded-xl bg-gray-800 border border-gray-700" type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <input className="p-3 rounded-xl bg-gray-800 border border-gray-700" type="text" name="business" placeholder="Business Name" required onChange={handleChange} />
            <input className="p-3 rounded-xl bg-gray-800 border border-gray-700" type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
            <button type="submit" className="bg-blue-600 hover:bg-blue-800 p-3 rounded-xl font-bold">Submit</button>
          </form>
        ) : (
          <p className="text-green-400 text-xl">Thanks! You'll hear from us soon.</p>
        )}
      </section>

      <footer className="p-6 text-center text-gray-500 text-sm bg-black">© 2025 Alpha Ops. Built for speed.</footer>
    </main>
  );
}
