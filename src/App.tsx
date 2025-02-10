import backgroundImage from './images/painting.jpg';
import textBackground from './images/text.svg';

function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <div
        className="relative w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-start mt-5">
          <div className="flex space-x-8 mb-6">
            <a href="/q-and-a" className="px-8 py-3 text-[#636656] text-xl font-bold">Q + A</a>
            <a href="/photos" className="px-8 py-3 text-[#636656] text-xl font-bold">Photos</a>
            <a href="/rsvp" className="px-8 py-3 text-[#636656] text-xl font-bold">RSVP</a>
          </div>
          <img 
            src={textBackground} 
            alt="Text Image" 
            className="max-w-full h-auto mt-[-100px]"
          />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl text-center">Scroll down for more content...</h2>
        <div className="h-[2000px]"></div>
      </div>
    </div>
  );
}

export default Home;
