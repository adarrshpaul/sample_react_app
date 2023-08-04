interface GameCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, image, link }) => {
    return (
        <div data-theme="cyberpunk" className="card bg-base-100 shadow-2xl rounded-sm">
            <figure className='py-4'><img className='object-contain h-48 w-96 hover:object-scale-up' src={image} alt={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p> {description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Play Now
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GameCard