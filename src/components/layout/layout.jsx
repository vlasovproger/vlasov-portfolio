import React from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import { useTrail, animated } from "react-spring";
import "./layout.scss";

const Layout = observer(({ children, imgUrl }) => {
  const {
    uiStore: { menuIsOpened, toggleMenuButton }
  } = useStores();
  const items = ["About.", "Works.", "Contact."];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(items.length, {
    config,
    opacity: menuIsOpened ? 1 : 0,
    x: menuIsOpened ? 0 : 80,
    from: { opacity: 0, x: 80 }
  });
  const classNames = menuIsOpened ? "opened" : "";
  const classNamesNav = menuIsOpened ? "menuOpened" : "";
  return (
    <>
      <div id="layout" className={classNames}>
        <header>
          <h2>Vlasov Portfolio</h2>
          <nav onClick={toggleMenuButton} className={classNamesNav}>
            <h4>Menu</h4>
            <ul id="nav-items">
              {trail.map(({ x, ...rest }, index) => (
                <animated.li
                  key={items[index]}
                  className="trails-text"
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
                  }}
                >
                  <animated.div>{items[index]}</animated.div>
                </animated.li>
              ))}
            </ul>
          </nav>
        </header>
        <main
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          {children}
        </main>
        <footer>
          <h4>Frontend Developer</h4>
          <ul className="socials">
            <li>
              <a href="https://github.com/">
                <span className="icon icon-github"></span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/">
                <span className="icon icon-linkedin"></span>
              </a>
            </li>
            <li>
              <a href="https://t.me/">
                <span className="icon icon-telegram"></span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
});

export default Layout;
