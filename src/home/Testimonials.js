import { useState, useRef } from "react"
import "../css/testimonials.css"

const testimonials = [
  {
    name: "Winnie",
    text: "We have used Bryana (Remi's Dog Training) for about a year now! And can't say enough great things! We've done everything from a week of board and train, group classes, to private lessons. Bryana is extremely easy to communicate with. My dogs absolutely love her and always excited to learn and correct things!",
  },
  {
    name: "Domino",
    text: "We can't say enough great things about Bryana and Remi's Dog Training! She worked with our pup, Domino, for well over a year, guiding us as new dog parents to our energetic and stubborn 1-year-old Staffy. From day one, Bryana was incredibly informative, patient, and supportive, helping us understand not just how to train Domino but also how to communicate with him effectively. When we first started, Domino wouldn't even do a simple \"down,\" but with Bryana's expert guidance, he made incredible progress. Before we even hit the one-year mark, Domino was able to stay in a down position for over two minutes, even at a busy place like Fun Spot!",
  },
  {
    name: "Ollie and Pixar",
    text: "We knew Remi's Dog Training was the right partner for us by the level of care and personalization shown to Ollie, our newly adopted puppy and our family. Not only did Bryana teach us strategies to best train and motivate Ollie, but she also took the time to introduce us to confidence building training for our older dog, Pixar. Her patience, knowledge and genuine care for our dogs was above and beyond our expectations.",
  },
  {
    name: "Jax, Piper, Reece, and Samson",
    text: "I used Remi's Dog Training to dog sit when I traveled. Bryana was fantastic. We started with a meet and greet so my 4 dogs could get to know her. She was very professional and all of my dogs instantly loved her. She stayed in my home and sent me pictures multiple times a day. My dogs truly enjoyed their time with Bryana!! I highly recommend her.",
  },
]

const TestimonialCard = ({ testimonial }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 70
    const tiltY = (centerX - x) / 70

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="testimonial-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="testimonial-content">
        <p className="testimonial-text">{testimonial.text}</p>
        <p className="testimonial-author">- {testimonial.name}</p>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className="testimonials-section pink">
      <h2 className="carousel-h1 text-center underline mb-5">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials

