import GameCard from "../components/gameCard";
import Layout from "../components/layout";

const gamesConfig = [
    {
        'title': 'Basketball',
        'description': 'An arcade game that utilizes Matter.js physics engine',
        'imageLink': 'basketball.png',
        'link': 'https://basketball.adarrshpaul.dev'
    },
    {
        'title': 'Circle Run',
        'description': 'A speedy game that utilizes path follow property',
        'imageLink': 'circlerun.png',
        'link': 'https://circlerun.adarrshpaul.dev'
    }
];
const GamesPage = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-4 m-8 py-3 md:flex-row">
                {gamesConfig.map((gameConfig, index) => (
                    <GameCard title={gameConfig.title} description={gameConfig.description} image={gameConfig.imageLink} link={gameConfig.link} key={index} />
                ))}
            </div>
        </Layout>
    )
}

export default GamesPage;