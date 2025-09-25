"use client";

import React, { useState } from "react";


export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { name: name.trim() || "Anonymous", rating, message };
    console.log("Feedback submitted:", payload);
    setSent(true);
    setTimeout(() => {
      setName("");
      setMessage("");
      setRating(0);
      setHover(0);
      setSent(false);
    }, 2200);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gray-100 p-6">
      <div className="max-w-xl w-full">
        <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl border border-gray-800">
          <header className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 text-black font-semibold text-lg shadow-inner animate-pulse">
              ❤
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Your feedback matters</h1>
              <p className="text-sm text-gray-400">Quick feedback — it helps us improve.</p>
            </div>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-300">Rate your experience</label>
              <div className="mt-2 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star} star`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-transform transform ${
                      star <= (hover || rating) ? "scale-110" : "scale-100"
                    } focus:outline-none`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={star <= (hover || rating) ? "url(#g)" : "none"}
                      stroke={star <= (hover || rating) ? "#FDE047" : "#444"}
                      strokeWidth="1.2"
                      className="w-7 h-7"
                    >
                      <defs>
                        <linearGradient id="g" x1="0" x2="1">
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#FDE68A" />
                        </linearGradient>
                      </defs>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {star <= (hover || rating) && (
                      <span className="absolute -top-2 -right-2 text-xs text-yellow-300 animate-bounce">★</span>
                    )}
                  </button>
                ))}
                <div className="ml-3 text-sm text-gray-300">
                  {rating ? `${rating} / 5` : "Not rated"}
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-300">Your name (optional)</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Asha"
                className="mt-2 w-full bg-transparent border border-gray-800 rounded-md px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Tell us what you think</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Share your experience, suggestions or anything you'd like to say..."
                className="mt-2 w-full bg-transparent border border-gray-800 rounded-md px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 outline-none resize-y"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold px-5 py-2 rounded-xl shadow-lg transform transition hover:-translate-y-0.5"
                aria-disabled={sent}
              >
                {sent ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.2)" strokeWidth="4" fill="none" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send feedback"
                )}
              </button>

              <div className="text-sm text-gray-400">Thanks — we read every response!</div>
            </div>
          </form>

          {sent && (
            <div className="mt-6 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/10 p-4 border border-green-400/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/80 flex items-center justify-center text-black">✓</div>
                <div>
                  <div className="font-semibold">Thank you!</div>
                  <div className="text-xs text-gray-200">Your feedback has been recorded.</div>
                </div>
              </div>
            </div>
          )}

          <footer className="mt-6 text-xs text-gray-500">
            <div className="text-center border-t border-gray-800 pt-4 font-bold text-3xl">
                Made with ❤ Mohit Saini
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}