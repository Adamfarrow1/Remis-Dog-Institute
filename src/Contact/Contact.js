import { useState } from "react";

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

            <div className=" contact row justify-content-center align-items-center font-fm">
                
                <form className="contact-form text-center" action="https://api.web3forms.com/submit" onSubmit={(e) => {handleSend(e)}} method="POST">
                <div type="hidden">
                    <p className="contact-h1 mt-2 underline">Contact Us</p>
                    <p>Emails us with questions or to start scheduling today!</p>
                    <p>Servicing the Greater Central Florida Area. <br /> Altamonte Springs, Apopka, Clermont, Dr. Phillips, Kissimme, Orlando, Windermere, Winter Garden, Winter Park, St. Cloud</p>
                    <p>Not in the areas listed? Let us know and we can see what we can do!</p>
                </div>
                <input type="hidden" name="subject" value="New Submission from RemisDogTrainingInstitute"></input>

                <input type="hidden" name="access_key" value="08d18fc7-6bae-45ee-ab65-99826bb540b6"></input>
                <input className="mx-auto mt-2 input-field" type="text" name="name" placeholder="Name" required/>
                <input className="mx-auto mt-2 input-field" type="email" name="email" placeholder="Email" required/>
                <input className="mx-auto mt-2 input-field" type="text" name="text" placeholder="Phone" required/>
                <textarea rows="5" cols="20" name="message"  className=" mx-auto mt-2 input-field-l" type="text" placeholder="Type your message here..." required />


                <button type="submit" className="submit-btn mt-3">Send message</button>
                <span className="mt-2 d-block mb-2 mx-auto text-center">{result}</span>
                </form>
              
            </div>
     );
}
 
export default Contact;