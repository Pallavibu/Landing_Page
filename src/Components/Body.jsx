import logo from "../Assets/logo.svg";
import down from "../Assets/down.svg";
import Home from "../Assets/Home.svg";
import Orders from "../Assets/Orders.svg";
import products from "../Assets/products.svg";
import delivery from "../Assets/delivery.svg";
import marketing from "../Assets/marketing.svg";
import analytics from "../Assets/analytics.svg";
import payment from "../Assets/payment.svg";
import tools from "../Assets/tools.svg";
import discount from "../Assets/discount.svg";
import audience from "../Assets/audience.svg";
import appearance from "../Assets/appearance.svg";
import plugins from "../Assets/plugins.svg";
import wallet from "../Assets/wallet.svg";
import outlined from '../Assets/outlined.svg'
import fill from "../Assets/fill.svg"

const Body = () => {
  return (
    <div
      style={{
        height: "1482px",
        width: "1440px",
      }}
      className="flex bg-orange-400"
    >
      <div
        style={{
          height: "1482px",
          width: "224px",
          padding: "16px 10px 16px 10px",
        }}
        className=" bg-secondary text-white"
      >
        <div>
          <div style={{ width: "208px", height: "1380px" }} className="mb-16 ">
            <div>
              <div className="flex">
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <div>
                  <div>
                    <p>Nishyan</p>
                  </div>
                  <div>
                    <p>visit store</p>
                  </div>
                </div>
                <div>
                  <img src={down} alt="down" />
                </div>
              </div>
              <div className="">
                <div className="flex">
                  <div>
                    <img src={Home} alt="home" />
                  </div>
                  <div>
                    <p>Home</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={Orders} alt="orders" />
                  </div>
                  <div>
                    <p>Orders</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={products} alt="products" />
                  </div>
                  <div>
                    <p>Products</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={delivery} alt="delivery" />
                  </div>
                  <div>
                    <p>Delivery</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={marketing} alt="marketing" />
                  </div>
                  <div>
                    <p>Marketing</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={analytics} alt="analytics" />
                  </div>
                  <div>
                    <p>Analytics</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={payment} alt="payment" />
                  </div>
                  <div>
                    <p>Payments</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={tools} alt="tools" />
                  </div>
                  <div>
                    <p>Tools</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={discount} alt="discount" />
                  </div>
                  <div>
                    <p>Discounts</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={audience} alt="audience" />
                  </div>
                  <div>
                    <p>Audience</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={appearance} alt="appearance" />
                  </div>
                  <div>
                    <p>Appearance</p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={plugins} alt="plugins" />
                  </div>
                  <div>
                    <p>Plugins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div>
              <img src={wallet} alt="wallet" />
            </div>
            <div>
              <div>
                <p>Available credits</p>
              </div>
              <div>
                <p>222.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ width: "1216px", height: "64px" }}
          className="bg-gray-500"
        >
          <div style={{ height: "22px", width: "360px" }} className="flex gap-16">
            <div>
                <p>Payments</p>
            </div>
            <div>
                <div>
                    <img src={outlined} alt="outline" />
                </div>
                <div>
                    <p>How it works</p>
                </div>
            </div>
          </div>
          <div>
            <div>
                <img src={fill} alt="fill" />
            </div>
            <div>
                <p>Search features, tutorials, etc.</p>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Body;
