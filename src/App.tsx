
import './App.css'
import Image from './components/Image.tsx';

import Feedback from './models/Feedback.tsx';
function App() {
  const feedbacks: Feedback[] = [
    new Feedback('src/assets/ph1.jpg', 5, 'The coissants are perfectly flaky and buttery, providing a mouthwatery, providing a mouthwatering base for a variety of creative fillings.','w-1/2 flex flex-col items-start p-4 transform scale-110 -rotate-6','w-1/4'),
    new Feedback('src/assets/ph2.webp', 4, 'The inviting ambiance and friendly service make this restaurant a fantastic spot.','w-1/2 flex flex-col items-start p-4 transform scale-110 rotate-1','w-1/6'),
      new Feedback('src/assets/ph3.jpg', 3, 'The attention to detail and fresh ingredients make this place stand out. It\'s a must-visit for anyone.','w-1/2 flex flex-col items-start p-4 transform scale-110 -rotate-6','w-1/4'),
  ];

  return (
      <div className="min-h-screen bg-gray-120 p-8 flex justify-end"
           style={{ backgroundImage: `url('src/assets/beckground.PNG')`, backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat' }}>
        <div className="flex flex-wrap min-h-screen bg-gray-120 p-8 mr-4">
          {feedbacks.map((feedback, index) => (
              <div key={index} className="w-full md:w-1/1 lg:w-1/1 p-6">
              <Image feedback={feedback}/>
              </div>
          ))}
        </div>
      </div>

  )
}

export default App
