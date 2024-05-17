import Feedback from '../models/Feedback.tsx'
interface ImageProps {
    feedback: Feedback;
}
function Image({ feedback }: ImageProps ) {
    return (<>
            <div className="flex max-w-full m-4 justify-center items-center">
                <div className={feedback.destanceUserCard}>
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={feedback.photo}/>
                </div>
                <div className={feedback.cardStyle}>
                    <div className="flex text-yellow-500 mb-4 ">
                        {Array(feedback.rating).fill(0).map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-6.16 3.25 1.18-6.88L.5 6.75l6.91-1L10 0l2.59 5.75 6.91 1-5 4.62 1.18 6.88L10 15z"/>
                            </svg>
                        ))}
                    </div>
                    <div className="max-w-sm bg-amber-300 rounded-lg drop-shadow-2xl overflow-hidden ">
                        <div className="p-4">
                            <p className="mt-2 text-black-600">{feedback.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Image;