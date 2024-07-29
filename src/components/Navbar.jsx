function NavBar() {
  return (
    <nav className="container flex justify-between px-8 py-4 mx-auto">
      <div className="">Oken</div>
      <div className="flex gap-4">
        <a href="#">About</a>
        <a href="#">Reservation</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
