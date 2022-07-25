import * as React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import youtube_1 from "../img/social/youtube_1.svg";
import youtube_2 from "../img/social/youtube_2.svg";
import telegram from "../img/social/telegram.svg";
import vk from "../img/social/vk.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ backgroundColor: '#fccd04', padding: 0, height: '80px' }}>
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: "100vw", display: 'flex', flexDirection: 'row' }} className="columns">
              <div style={{ margin: '36px 36px 0 8px' }}>
                <iframe src="https://yoomoney.ru/quickpay/button-widget?targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D1%8C%20%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B0!&default-sum=100&button-text=13&yoomoney-payment-type=on&button-size=m&button-color=black&successURL=https%3A%2F%2Fkinogeroi.com%2F&quickpay=small&account=410012994125382&" width="182" height="36" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>
              </div>
              <div className="column is-4 social">
                <a
                  title="youtube_1"
                  href="https://www.youtube.com/channel/UC_YZJoxVlFb5ALSG9Okdmkg?sub_confirmation=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={youtube_1}
                    alt="Youtube 1"
                    style={{ width: "1.7em", height: "1.7em" }}
                  />
                </a>
                <a title="youtube_2" href="https://www.youtube.com/c/WIDESHOT?sub_confirmation=1" target="_blank" rel="noreferrer">
                  <img
                    src={youtube_2}
                    alt="Youtube 2m"
                    style={{ width: "1.7em", height: "1.7em" }}
                  />
                </a>
                <a title="telegram" href="https://t.me/+V8a6-OW_CnVsDgTb" target="_blank" rel="noreferrer">
                  <img
                    src={telegram}
                    alt="Telegram"
                    style={{ width: "1.7em", height: "1.7em" }}
                  />
                </a>
                <a title="vk" href="https://vk.com/topmovie.hero" target="_blank" rel="noreferrer">
                  <img
                    src={vk}
                    alt="VK"
                    style={{ width: "1.7em", height: "1.7em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
