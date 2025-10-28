export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-20 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Perfect Home. Wszelkie prawa
        zastrzeżone.
      </p>
    </footer>
  );
}
