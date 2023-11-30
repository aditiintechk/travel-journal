import IMAGES from "../images/Images";

export default function Header() {
    return (
        <header>
            <img src={IMAGES.earthIcon} alt="earth-icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}