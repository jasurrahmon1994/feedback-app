import Card from '../components/Card';
import {Link} from 'react-router-dom'
function About() {
    return (
        <Card>
            <div className="about">
                <h1>Mahsulotimiz haqida</h1>
                <p>Bu mahsulotimiz yordamida xizmatlarimizga baho bera olasiz.</p>
                <p>Versiya 1.0.0</p>
                <Link to="/">Asosiy sahifaga qaytish</Link>
            </div>
        </Card>
    )
}

export default About
