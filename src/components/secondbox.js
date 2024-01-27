import oneTwo from "../assets/images/one (2).jpeg";
import two from "../assets/images/two.jpeg";
import three from "../assets/images/three.jpeg";
import four from "../assets/images/fourr.jpeg";
import five from "../assets/images/five.jpeg";
import six from "../assets/images/six.jpeg";
import seven from "../assets/images/seven.jpeg";
import eight from "../assets/images/eight.jpeg";
function SecondBox(){
    return(
        <>
        <div>
        <h2>Most Popular</h2>
        <p>pick the best fit</p>
    </div>
    <section>
        <div className="section--box">
            <img src={oneTwo} alt="one(2)"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
        <div className="section--box">
            <img src={two} alt="two"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
        <div className="section--box">
            <img src={three} alt="three"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
        <div className="section--box">
            <img src={five} alt="five"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
        <div className="section--box">
            <img src={six} alt="six"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
        <div className="section--box">
            <img src={seven} alt="seven"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
        <div className="section--box">
            <img src={eight} alt="eight"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
        <div className="section--box">
            <img src={four} alt="four"></img>
            <p>Web Development Bootcamp 2023</p>
            <p>4.9&star;&star;&star;&star;</p>
            <p>449,007</p>
        </div>
    </section>
        </>
    )
}
export default SecondBox