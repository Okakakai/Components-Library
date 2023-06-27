import 'react-animated-slider/build/horizontal.css';
import Slider from 'react-animated-slider';

const slides = [
  { title: 'First item', description: 'Lorem ipsum'},
  { title: 'Second item', description: 'Lorem ipsum'},
];

const SamoleSlider = () => {
    return (
      <Slider>
        {slides.map((slide, index) => (
          <div key={index}>
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
          </div>
        ))}
      </Slider>
    );
}

