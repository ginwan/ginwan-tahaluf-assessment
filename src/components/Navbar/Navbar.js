import "./navbar.css";
import profile from "../../assets/profile.jpg";
import { useState } from "react";
import { Notification } from "../../utils/Notification";
import UaeFlagIcon from "./Icons/UaeFlagIcon";
import UkFlagIcon from "./Icons/UkFlagIcon";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [notificationMenu, setNotificationMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const toggleNotificationMenu = () => {
    setNotificationMenu(!notificationMenu);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenu(!languageMenu);
  };

  return (
    <div>
      <section className="content">
        {/* navbar */}
        <nav>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Search" className="search-bar" />
              <span className="search-icon">
                <i class="ph-bold ph-magnifying-glass icon-shadow"></i>
              </span>
            </div>
          </form>
          <div className="nav-link" onClick={toggleLanguageMenu}>
            <span className="icon-container">
              <i class="ph-fill ph-globe icon-shadow"></i>
            </span>
            {languageMenu && (
              <ul className="lang-link">
                <li>
                  <UkFlagIcon />
                  <a href="/#">English</a>
                </li>
                <div className="divider"></div>
                <li>
                  <UaeFlagIcon />
                  <a href="/#">عربي</a>
                </li>
              </ul>
            )}
          </div>
          <div className="nav-link" onClick={toggleNotificationMenu}>
            <span className="icon-container">
              <i class="ph-fill ph-bell icon-shadow"></i>
              <span className="badge"></span>
            </span>
            {notificationMenu && (
              <ul className="notification-link">
                {Notification.map((notification, index) => (
                  <li key={index}>
                    <a href="/#">
                      <div
                        className={`notification-content ${
                          notification.new ? "" : "old-notification"
                        }`}
                      >
                        <span className="notify-icon">
                          <i className="ph ph-bell-ringing"></i>
                        </span>
                        <div className="text-content">
                          <div className="notification-header">
                            {notification.title}
                            <span>{notification.time}</span>
                          </div>
                          <p className="notify-text">
                            {notification.message}
                            <span>
                              <a href="/#">
                                show <i className="ph ph-caret-right"></i>
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                    {index < Notification.length - 1 && (
                      <div className="divider"></div>
                    )}
                  </li>
                ))}
                <a href="/#" className="see-all-link">
                  See All
                </a>
              </ul>
            )}
          </div>
          <div className="profile" onClick={toggleProfileMenu}>
            <span
              className={`name ${profileMenu ? "open-menu" : "close-menu"}`}
            >
              <div className="profile-info">
                <img src={profile} alt="profile" />
                <div>
                  John Doe <p>Admin</p>
                </div>
              </div>
              {profileMenu ? (
                <i className="ph-bold ph-caret-up"></i>
              ) : (
                <i className="ph-bold ph-caret-down"></i>
              )}
            </span>

            {profileMenu && (
              <ul className="profile-link">
                <li>
                  <a href="/#">
                    <span>
                      <i className="ph-bold ph-user profile-icon"></i>
                      My acount
                    </span>
                    <i className="ph ph-caret-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>
                      <i className="ph-bold ph-gear profile-icon"></i> Settings
                    </span>
                    <i className="ph ph-caret-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>
                      <i class="ph-bold ph-sign-out profile-icon"></i>Logout
                    </span>
                    <i className="ph ph-caret-right"></i>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
