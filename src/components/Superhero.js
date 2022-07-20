import { Card, Container, Row, Col, Image } from "react-bootstrap"
import batmanImage from "../assets/images/superhero/batman.jpg"
import bigheroImage from "../assets/images/superhero/bighero.jpg"
import blackwindowImage from "../assets/images/superhero/blackwindow.jpg"
import guardianImage from "../assets/images/superhero/guardian.jpg"
import justiceleagueImage from "../assets/images/superhero/justiceleague.jpg"
import shangchiImage from "../assets/images/superhero/shangchi.jpg"
import ironmanImage from "../assets/images/superhero/ironman2.jpg"
import doctorstrangeImage from "../assets/images/superhero/doctorstrange.jpg"

const Superhero = () => {
    return (
    <div>
        <Container>
          <br />
          <h1 className="text-white"> SUPERHERO MOVIES</h1>
          <br />
            <Row>
              <Col md={3} className="movieWrapper" id="superhero" >
                <Card className="movieImage">
                  <Image src={batmanImage} alt="Dune Movies"  className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                       <Card.Title className="text-center">BATMAN MOVIE</Card.Title>
                          <Card.Text className="text-left">
                            This is a wider card with natural lead-in to additional
                            content
                          </Card.Text>
                        <Card.Text className="text-left">
                          Last updated 3 mins ago
                        </Card.Text>
                    </div>
                  </div>
            </Card>
          </Col>

          <Col md={3} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={bigheroImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BIG HERO MOVIE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={blackwindowImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BLACK WINDOW MOVIE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={guardianImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">GUARDIAN MOVIE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={justiceleagueImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JUSTICE LEAGUE MOVIE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={shangchiImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SHANGCHI MOVIE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={ironmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">IRON MAN 2 MOVIE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={3} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={doctorstrangeImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOCTOR STRANGE  MOVIE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
                </Row>
            </Container>
    </div>
    )
}

export default Superhero