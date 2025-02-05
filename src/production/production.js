import { useEffect, useRef, useState } from "react"
import Header from "../Header/Header"
import Slider from "react-slick"
import AOS from "aos"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../css/production.css"
import img1 from "../images/production/img1.jpg"
import img2 from "../images/production/img2.jpg"
import img3 from "../images/production/img3.jpg"
import img4 from "../images/production/img4.jpg"
import img5 from "../images/production/img5.jpg"
import img6 from "../images/production/img6.jpg"
import img7 from "../images/production/img7.jpg"
import img8 from "../images/production/img8.jpg"
import img9 from "../images/production/img9.jpg"
import img10 from "../images/production/img10.jpg"
import vid1 from "../images/production/vid1.mov"
import vid2 from "../images/production/vid2.mov"
import vid3 from "../images/production/vid3.mov"
import vid4 from "../images/production/vid4.mov"

const ProductionInfo = () => {
  const sliderRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const productionWork = [
    "Dolly Parton's Pet Gala",
    "South Carolina Education Lottery",
    "Skimmers Indie Film",
    "Purina",
    "PetHub",
    "IPupPee",
    "Yak9",
    "Spot and Tango",
    "Camping World",
    "Photoshoots",
    "Modeling",
    "Tik Tok Shop Commercials",
    "Birthday Parties",
    "National Commercials",
    "Animals Like Us",
    "And More!!",
  ]

  const carouselMedia = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
    { type: "image", src: img5 },
    { type: "image", src: img6 },
    { type: "image", src: img7 },
    { type: "image", src: img8 },
    { type: "image", src: img9 },
    { type: "image", src: img10 },
    { type: "video", src: vid1 },
    { type: "video", src: vid2 },
    { type: "video", src: vid3 },
    { type: "video", src: vid4 },
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isVideoPlaying,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    beforeChange: (current, next) => {
      // Pause all videos when changing slides
      const videos = document.querySelectorAll(".carousel-slide video")
      videos.forEach((video) => {
        video.pause()
      })
      setIsVideoPlaying(false)
    },
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    if (sliderRef.current) {
      sliderRef.current.slickPause()
    }
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
    if (sliderRef.current) {
      sliderRef.current.slickPlay()
    }
  }

  const handleVideoEnded = (index) => {
    setIsVideoPlaying(false)
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <>
      <Header />
      <div className="production-container">
        <h1 className="production-title">Production Work</h1>

        <p className="production-intro">
          Explore our diverse portfolio of production work, showcasing the incredible talent and versatility of our
          four-legged stars. From national commercials to indie films, our trained animals have left their paw prints
          across various entertainment platforms.
        </p>

        <div className="production-grid">
          {productionWork.map((item, index) => (
            <div
              key={index}
              className="production-item"
              data-aos="fade-in"
              data-aos-once="false"
              data-aos-delay={150 * index}
              data-aos-duration="1000"
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>

        <div className="media-gallery">
          <h2>Featured Media</h2>
          <div className="carousel-container" data-aos="fade-in" data-aos-once="false" data-aos-delay={150}>
            <Slider ref={sliderRef} {...carouselSettings}>
              {carouselMedia.map((media, index) => (
                <div key={index} className="carousel-slide">
                  {media.type === "image" ? (
                    <img src={media.src || "/placeholder.svg"} alt={`Production work ${index + 1}`} />
                  ) : (
                    <video
                      src={media.src}
                      controls
                      onPlay={handleVideoPlay}
                      onPause={handleVideoPause}
                      onEnded={() => handleVideoEnded(index)}
                      playsInline
                    />
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="join-form">
          <h2>Join Rem Dog Productions Pack</h2>
          <p className="form-coming-soon">Enrollment form coming soon!</p>
          <p className="form-description">
            Become part of our talented pack and unlock exciting opportunities in the entertainment industry.
          </p>
        </div>
      </div>
    </>
  )
}

export default ProductionInfo

