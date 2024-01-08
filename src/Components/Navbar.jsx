import Image from "../Assets/Image.svg"
import Vector from "../Assets/Vector.svg"

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="w-40 h-36">
                        <img src={Image} alt="logo" />
                    </div>
                    <div>
                        <div>
                            <p>Nishyan</p>
                        </div>
                        <div>
                            <p>Visit Store</p>
                        </div>
                    </div>
                    <div>
                        <img src={Vector} alt="vector"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;