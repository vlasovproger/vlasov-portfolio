import React from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import { useTrail, animated } from "react-spring";
import Link from "next/link";
import "./layout.scss";

const Layout = observer(({ children }) => {
  const {
    uiStore: { menuIsOpened, toggleMenuButton }
  } = useStores();
  const items = [
    { title: "About.", href: "/about" },
    { title: "Works.", href: "/works" },
    { title: "Contact.", href: "/contact" }
  ];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(items.length, {
    config,
    opacity: menuIsOpened ? 1 : 0,
    x: menuIsOpened ? 0 : 250,
    from: { opacity: 0, x: 0 }
  });
  const classNames = menuIsOpened ? "opened" : "";
  const classNamesNav = menuIsOpened ? "menuOpened" : "";
  return (
    <>
      <div id="layout" className={classNames}>
        <header>
          <Link href="/" prefetch={false}>
            <a aria-label="Home">
              <h2>Vlasov Portfolio.</h2>
            </a>
          </Link>
          <nav className={classNamesNav}>
            <h4 onClick={toggleMenuButton}>Menu</h4>
            <ul id="nav-items">
              {trail.map(({ x, ...rest }, index) => (
                <animated.li
                  key={items[index].title}
                  className="trails-text"
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
                  }}
                >
                  <animated.div>
                    <Link href={items[index].href} prefetch={false}>
                      <a
                        aria-label={items[index].title}
                        onClick={toggleMenuButton}
                      >
                        {items[index].title}
                      </a>
                    </Link>
                  </animated.div>
                </animated.li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <h4>Frontend Developer.</h4>
          <ul className="socials">
            <li>
              <a
                href="https://github.com/vlasovproger/vlasov-portfolio"
                aria-label="github"
                target="_blank"
                rel="noopener"
              >
                <span className="icon icon-github"></span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vlasovproger/"
                aria-label="linkedin"
                target="_blank"
                rel="noopener"
              >
                <span className="icon icon-linkedin"></span>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/vlasov3087"
                aria-label="telegram"
                target="_blank"
                rel="noopener"
              >
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
