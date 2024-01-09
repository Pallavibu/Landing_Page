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
import outlined from "../Assets/outlined.svg";
import fill from "../Assets/fill.svg";
import Menu from "../Assets/Menu.svg";
import Group from "../Assets/Group.svg";
import Pathcopy from "../Assets/Pathcopy.svg";
import search from "../Assets/search.svg";
import updown from "../Assets/updown.svg";
import Combinedshape from "../Assets/Combinedshape.svg";
import triangle from "../Assets/triangle.svg";
import iiii from "../Assets/iiii.svg";
import previous from "../Assets/previous.svg";
import next from "../Assets/next.svg";

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
            <div className="flex flex-col gap-6">
              <div className="flex" style={{ gap: "12px", height: "42px" }}>
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={logo} alt="logo" />
                </div>
                <div style={{ width: "108px", height: "42px", gap: "4px" }}>
                  <div>
                    <p style={{ height: "22px" }}>Nishyan</p>
                  </div>
                  <div className="underline">
                    <p className="opacity-80">Visit store</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={down}
                    alt="down"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
              </div>
              <div
                className=" flex flex-col gap-4"
                style={{ height: "1314px" }}
              >
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={Home} alt="home" />
                  </div>
                  <div>
                    <p>Home</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={Orders} alt="orders" />
                  </div>
                  <div>
                    <p>Orders</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={products} alt="products" />
                  </div>
                  <div>
                    <p>Products</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={delivery} alt="delivery" />
                  </div>
                  <div>
                    <p>Delivery</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={marketing} alt="marketing" />
                  </div>
                  <div>
                    <p>Marketing</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={analytics} alt="analytics" />
                  </div>
                  <div>
                    <p>Analytics</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={payment} alt="payment" />
                  </div>
                  <div>
                    <p>Payments</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={tools} alt="tools" />
                  </div>
                  <div>
                    <p>Tools</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={discount} alt="discount" />
                  </div>
                  <div>
                    <p>Discounts</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={audience} alt="audience" />
                  </div>
                  <div>
                    <p>Audience</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
                  <div>
                    <img src={appearance} alt="appearance" />
                  </div>
                  <div>
                    <p>Appearance</p>
                  </div>
                </div>
                <div
                  className="flex rounded-sm "
                  style={{ gap: "12px", padding: "8px 16px 8px 16px" }}
                >
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
          <div className="flex gap-10" style={{ padding: "6px 12px 6px 12px" }}>
            <div>
              <img src={wallet} alt="wallet" />
            </div>
            <div className="flex flex-col justify-center items-center">
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
        <div>
          <div style={{ width: "1216px", height: "64px" }} className=" flex">
            <div
              style={{
                height: "22px",
                width: "360px",
                border: "0px 0px 1px 0px",
              }}
              className="flex  "
            >
              <div style={{ gap: "16px" }} className="flex">
                <div>
                  <p>Payments</p>
                </div>
                <div className="flex">
                  <p>How it works</p>
                  <img src={outlined} alt="outline" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <p>Search features, tutorials, etc.</p>
                <img src={fill} alt="fill" />
              </div>
            </div>
            <div>
              <img src={Group} alt="group" />
              <img src={Menu} alt="menu" />
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="flex">
                  <div>
                    <p>Overview</p>
                  </div>
                  <div className="flex">
                    <div>
                      <p>Last month</p>
                    </div>
                    <div>
                      <img src={Pathcopy} alt="pathcopy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div>
                    <p>Online orders</p>
                  </div>
                  <div>
                    <p>231</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Amount Received</p>
                  </div>
                  <div>
                    <p>₹2392312.19</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <p>Transactions | This Month</p>
                </div>
                <div>
                  <div className="flex">
                    <div>
                      <div className="flex">
                        <div>
                          <img src={search} alt="search" />
                        </div>
                        <div>
                          <p>Search by order ID...</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex">
                        <div>
                          <p>Sort</p>
                        </div>
                        <div>
                          <img src={updown} alt="updown" />
                        </div>
                      </div>
                      <div>
                        <img src={Combinedshape} alt="shape" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div>
                      <p>Order ID</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex">
                      <p>Order date</p>
                      <img src={triangle} alt="triangle" />
                    </div>
                  </div>
                  <div>
                    <p>Order amount</p>
                  </div>
                  <div>
                    <div className="flex">
                      <p>Transaction fees</p>
                      <img src={iiii} alt="ii" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>#281201</p>
            </div>
            <div>
              <p>7 July,2023</p>
            </div>
            <div>
              <p>₹1,278.23</p>
            </div>
            <div>
              <p>₹22</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <div>
                <p>#281201</p>
              </div>
              <div>
                <p>7 July,2023</p>
              </div>
              <div>
                <p>₹1,278.23</p>
              </div>
              <div>
                <p>₹22</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src={previous} alt="previous" />
              </div>
              <div className="flex">
                <div>
                  <p>1</p>
                </div>
                <div>
                  <p>...</p>
                </div>
                <div>
                  <p>11</p>
                </div>
                <div>
                  <p>12</p>
                </div>
                <div>
                  <p>13</p>
                </div>
                <div>
                  <p>14</p>
                </div>
                <div>
                  <p>15</p>
                </div>
                <div>
                  <p>16</p>
                </div>
                <div>
                  <p>17</p>
                </div>
                <div>
                  <p>18</p>
                </div>
              </div>
              <div>
                <img src={next} alt="next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
