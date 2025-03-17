import Carousel from "react-bootstrap/Carousel";

function Slide() {
  const images = ["/project1.jpg", "/project2.jpg", "/project3.jpg", "/project4.jpg"];

  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={1500}>
            <img
              className="d-block w-100"
              src={image}
              alt="Sorry..! Image was Deleted"
              style={{ objectFit: "cover", height: "450px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slide;
