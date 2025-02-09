import backgroundImage from './images/painting.jpg'; // Adjust the path accordingly
import textBackground from './images/text.svg'; // Adjust the path accordingly

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Full-screen background div with image */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Keep the background image
      >
        {/* Place the text.svg image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={textBackground} alt="Text Image" className="max-w-full h-auto" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-2xl text-center">Scroll down for more content...</h2>
        {/* Additional content */}
        <div className="h-[2000px]"></div>
      </div>
    </div>
  );
}

export default App;
