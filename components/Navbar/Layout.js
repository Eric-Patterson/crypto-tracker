import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
