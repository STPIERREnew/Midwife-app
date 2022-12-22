import "./Home.css";
export default function Home() {
    return (
        
    <body>
         
        <div className="edit">
            <section id="hero">
                <div className="container">
                    <aside id="sidebar1">
                        <h1>පවුල් සෞඛ්‍ය සේවා නිලධාරී   -   බොරලුවැව </h1>
                        
                    
                    </aside> 
                </div>
                <div id="detail">
                <ul>
                    <li><a href="WeightMessure">බර කිරීම </a></li>
                    <li><a href="WeightMessure">ළමා සායන</a></li>
                    <li><a href="WeightMessure">රෝහල් සායන </a></li>
                    <li><a href="WeightMessure">MOH සායන </a></li>
                </ul>
            </div>
            </section>
            

         </div>
         
        <footer id="ftr">
            <div className="footer-content">
                <ul className="socials">
                    <li><a href=""><i className="fab fa-facebook fa-2x" ></i></a> </li>
                    <li><a href=""><i className="fab fa-twitter fa-2x" ></i></a> </li>
                    <li><a href=""><i className="fab fa-youtube fa-2x"></i></a> </li>
                    <li><a href=""><i className="fab fa-instagram fa-2x"></i></a> </li>
                </ul> 
                <p>Copyright &copy; 2022</p>
            </div>
        </footer>
    </body>

    )
}