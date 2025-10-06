"use client";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center text-gray-400 text-sm border-t border-white/10">
      <p>© {new Date().getFullYear()} Elman Bəhlul oğlu İmaməliyev</p>
      <div className="flex justify-center gap-6 mt-3 text-yellow-400">
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://scholar.google.com" target="_blank">Google Scholar</a>
        <a href="https://aztu.edu.az" target="_blank">AzTU</a>
      </div>
    </footer>
  );
}
