import remiheader from "../images/about/remis-story/remisbg.webp"
import remiImage1 from "../images/about/remis-story/remi1.webp"
import remiImage2 from "../images/about/remis-story/remi2.webp"
import remiImage3 from "../images/about/remis-story/remi3.webp"
import remiImage4 from "../images/about/remis-story/bg-header.svg"
import Header from "../Header/Header";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
window.addEventListener('load', function() { AOS.init({startEvent: 'DOMContentLoaded'}); });

const RemisStory = () => {




    return ( 
        <div>
            <Header></Header>





            <div className="remi-profile font-fm" >
                <div className="profile-header" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                    <h1 className="profile-h1">Hey There...</h1>
                    <p>It’s me, Remi! I’m the face you may see all over this site. My mom says I am her world. Not sure what that means but I love her and always give her all the kisses. She says I was her MUSE! Hope you get to work with my pup mom!</p>
                </div>

                <div className="profile-image">
                    <img src={remiImage2} alt="Remi" />
                </div>

                <div className="profile-content" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                    <h2>All About Me</h2>
                    <p>Hi, my name is Remi! I am a black lab mix born on September 9, 2019. I came from the streets of Alabama but at 9 weeks old I was adopted by the best human ever my mom, Bryana. She adopted me from the Sun Coast Animal League Rescue Shelter. In my first two years of my life, I was able to go to work every day with my mom as she trained service dogs for people with disabilities as well as guide dogs for people who are blind or visually impaired. I would get to play fetch during lunch and see her throughout the day. It was a lot of fun. My mom loves to train and when she was done training all the other dogs, she would teach me all these fun behaviors from going to my bed, walking nicely on a leash, turning on the lights, opening the refrigerator door and even limping on my front leg to pretend I was hurt. She always wanted to try to get me on a commercial or TV show with all my skills. When we weren’t learning new skills and when my mom had a day off, she would always do something fun with me like bring me to the beach where I got to sprint around catching the frisbee in the air. That was one of my favorite things to do. I would also get to go for car rides to get pup cups from Starbucks and even get to play at the park with some of my doggy friends. I wouldn’t say that I was spoiled but maybe I was because on my birthdays I would have my uncle Bailey over and have a doggy party with some yummy cake.</p>
                </div>

                <div className="profile-image">
                    <img src={remiImage1} alt="Remi" />
                </div>

                <div className="profile-content" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                    <p>However, back in October of 2022, I had a mast cell tumor that popped up on my leg. My mom noticed it right away and I had to go in for surgery to get it removed. Although I had to wear the cone of shame for what felt like forever, I got a lot of ice cream and treats during that time. After surgery, we thought we were in the clear until we received some results back from the vets saying the mast cell tumors were spreading in my body and were aggressive. My mom had to make a hard decision for me and I started Chemo treatment in December 2022. Chemo was not that bad at first but I started to lose my energy to play with my toys or go for long walks. During that time, my mom decided to make a “Remi’s Cancer Bucket List” for me since the vet said I may only have 6 months to a year to live. She started to become sad but I knew she was trying to put on a brave face for me. The bucket list was so fun! I got to go kayaking with some gators for the first time, went to a doggy bakery and got a lot of yummy treats and I even did this fancy photo shoot with my mom. Unfortunately, right around Valentine’s Day, I started not to feel so great. So my mom dropped everything and took me to the vet. They said I only had hours left to live. My mom couldn’t believe what the vet said and rushed me straight to the beach. Seeing the sunrise and sunset were on my bucket list and she knew that I wasn’t going to finish the list but wanted to at least let me see one last sunset. Hours after seeing the sunset, I passed away on February 16th, 2023, in my mom's arms just one week before my mom's birthday.</p>
                </div>

                <div className="profile-image">
                    <img src={remiImage3} alt="Remi" />
                </div>

                <div className="profile-content" data-aos="fade-in" data-aos-once="false" data-aos-delay="150" data-aos-duration="1000">
                    <p>She gave me the best life and I love her so much. Although my life was short, it was filled with so many amazing memories that I will never forget. Even though I am not with my mom anymore, I am pain-free, hanging out with my Uncle Bailey over this very colorful bridge I think they call the Rainbow Bridge. I love you, Mom. Keep training those puppies and I will see you again one day.</p>
                    <p>Rest Easy My Sweet Boy ❤️</p>
                </div>
            </div>



















            {/* <div className="remis-story-bg d-flex align-items-center justify-content-around">
                <p className="text-center remis-intro-w"> <span className="hey-there">Hey There....</span><br />It's me, Remi! I'm the face you may see all over this site. My mom says I am her world. Not sure what that means but I love her and always give her all the kisses. She says I was her MUSE! Hope you get to work with my pup mom!</p>
                <img className="remis-header-img" src={remiheader} alt="" />
            </div>

            <div>
                <p className="carousel-h1 underline text-center mt-5">All About Me</p>
                <div className="d-flex text-center justify-content-around">
                    <p className="mt-5 remis-story-p">Hi my name is Remi! I am a black lab mix born on September 9, 2019. I came from the streets of Alabama but at 9 weeks old I was adopted by the best human ever my mom, Bryana. She adopted me from the Sun Coast Animal League Rescue Shelter. In my first two years of my life, I was able to go to work every day with my mom as she trained service dogs for people with disabilities as well as guide dogs for people who are blind or visually impaired. I would get to play fetch during lunch and see her throughout the day. It was a lot of fun. My mom loves to train and when she was done training all the other dogs, she would teach me all these fun behaviors from going to my bed, walking nicely on a leash, turning on the lights, opening the refrigerator door and even limping on my front leg to pretend I was hurt. She always wanted to try to get me on a commercial or tv show with all my skills. When were weren’t learning new skills and when my mom had a day off, she would always do something fun with me like bring me to the beach where I got to sprint around catching the frisbee in the air. That was one of my favorite thing to do. I would also get to go for car rides to get pup cups from Starbucks and even get to play at the park with some of my doggy friends. I wouldn’t say that I was spoiled but maybe I was because on my birthdays I would have my uncle Bailey over and have a doggy party with some yummy cake.
                    <br /> <br />However, back in October of 2022, I had a mast cell tumor that popped up on my leg. My mom noticed it right away and I had to go in for surgery to get it removed. Although I had to wear the cone of shame for what felt like forever, I got a lot of ice cream and treats during that time.  After surgery, we thought we were in the clear until we received some results back from the vets saying the mast cell tumors were spreading in my body and were aggressive. My mom had to make a hard decision for me and I started Chemo treatment in December 2022. Chemo was not that bad at first but I started to lose my energy to play with my toys or go for long walks. During that time, my mom decided to make a “Remi’s Cancer Bucket List” for me since the vet said I may only have 6 months to a year to live. She started to become sad but I knew she was trying to put on a brave face for me. The bucket list was so fun! I got to go kayaking with some gators for the first time, went to a doggy bakery and got a lot of yummy treats and I even did this fancy photo shoot with my mom. Unfortunately, right around Valentine’s Day, I started not to feel so great. So my mom dropped everything and took me to the vet. They said I only had hours left to live. My mom couldn’t believe what the vet said and rushed me straight to the beach. Seeing the sunrise and sunset were on my bucket list and she knew that I wasn’t going to finish the list but wanted to at least let me see one last sunset. Hours after seeing the sunset, I passed away on February 16th, 2023 in my moms arms just one week before my moms birthday.  
                    <br /><br />She gave me the best life and I love her so much. Although my life was short, it was filled with so many amazing memories that I will never forget. Even though I am not with my mom anymore, I am pain free hanging out with my Uncle Bailey over this very colorful bridge I think they call the Rainbow Bridge. I love you mom. Keep training those puppies and I will see you again one day. 
                    <br /><br />Rest Easy My Sweet Boy 3</p>

                    <div className="mt-5">
                        <img src={remi1} alt="" />
                    </div>

                </div>
            </div> */}
        </div>
     );
}

export default RemisStory;