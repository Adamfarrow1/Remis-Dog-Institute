import { useState } from "react";
import Header from "../Header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init(); });

const Contact = () => {
    const [result, setResult] = useState("");

    const handleSend = async (e) =>{
            e.preventDefault();
            setResult("Sending....");
            const formData = new FormData(e.target);
            // const formData = e.target;
            console.log(formData);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData
            }).then((res) => res.json());
        
            if (res.success) {
              console.log("Success", res);
              setResult(res.message);
            } else {
              console.log("Error", res);
              setResult(res.message);
            }
    }   


    return ( 
            <div className="contact row justify-content-center align-items-center font-fm mb-5 ">
                <Header></Header>
                <form className="contact-form text-center" action="https://api.web3forms.com/submit" onSubmit={(e) => {handleSend(e)}} method="POST">
                <div type="hidden">
                <h1>Contact Us</h1>
                <p>Email us with questions or to start scheduling today!</p>
                <p>Servicing the Greater Central Florida Area.</p>
                <ul className="service-areas">
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="150" data-aos-duration="1000">Altamonte Springs</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="350" data-aos-duration="1000">Apopka</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="550" data-aos-duration="1000">Clermont</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="750" data-aos-duration="1000">Dr. Phillips</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="950" data-aos-duration="1000">Kissimmee</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="1150" data-aos-duration="1000">Orlando</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="1350" data-aos-duration="1000">Windermere</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="1550" data-aos-duration="1000">Winter Garden</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="1750" data-aos-duration="1000">Winter Park</li>
                  <li data-aos="fade-in" data-aos-once="true" data-aos-delay="1950" data-aos-duration="1000">St. Cloud</li>
                </ul>
                <p>Not in the areas listed? Let us know and we can see what we can do!</p>
                </div>
                <div data-aos="fade-in" data-aos-once="true" data-aos-delay="550" data-aos-duration="1000">
                <input type="hidden" name="subject" value="New Submission from RemisDogTrainingInstitute"></input>

                <input type="hidden" name="access_key" value="78728bd5-b3e7-407f-99b3-79aae408a6f7"></input>
                <input className="mx-auto mt-2 input-field" type="text" name="name" placeholder="Name" required/>
                <input className="mx-auto mt-2 input-field" type="email" name="email" placeholder="Email" required/>
                <input className="mx-auto mt-2 input-field" type="text" name="text" placeholder="Phone" required/>
                <textarea rows="5" cols="20" name="message"  className=" mx-auto mt-2 input-field-l" type="text" placeholder="Type your message here..." required />


                <button type="submit" className="submit-btn mt-3 mb-3">Send message</button>
                </div>
                <span className="mt-2 d-block mb-2 mx-auto text-center">{result}</span>
                </form>
              
            </div>
     );
}
 
export default Contact;