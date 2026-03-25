import React from 'react';

export default function MapSection() {
  return (
    <div className="relative h-full w-full group">
      <a 
        href="https://maps.app.goo.gl/F6Z3UpuXabbdqzNi7"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="View Cooling Merchants on Google Maps"
      ></a>
      <iframe
        src="https://maps.google.com/maps?q=Cooling%20Merchants,%20VWFR%2B2C%20Lucknow,%20Uttar%20Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
      ></iframe>
    </div>
  );
}
