
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'https://cdn.shopify.com/s/files/1/0263/9511/5591/files/About-himalaya.png?v=1609989932',
            linkSite: 'https://himalayacwproject.netlify.app/',
            linkGithub: 'https://github.com/ritesh-2124/Himalaya-clone',
            linkBlog:
                'https://medium.com/@sakshirai727/cloning-of-the-himalaya-website-5dff1b761237',
            title: 'Himalyausa',
            desc: 'Himalyausa.com is a leading provider of herbal and beauty products worldwide, offering ordering services through localized websites.',
            img: 'himalya.png',
        },
        {
            id: '2',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://gymshark-team-shark.vercel.app/',
            linkGithub: 'https://github.com/Aniket-Pilankar/Gymshark_FRONTEND_Unit4',
            linkBlog:
                'https://medium.com/@deeptange/how-we-build-a-clone-of-the-gymshark-com-website-f9ea841b45db',
            title: 'GymShark',
            desc: 'GymShark is a U.S. website for Sportswear for men and women. You an find everytype of sports wear at this website.',
            img: 'gymshark.jpg',
        },
        {
            id: '1',
            icon: 'https://cdn.shopify.com/s/files/1/0263/9511/5591/files/About-himalaya.png?v=1609989932',
            linkSite: 'https://himalayacwproject.netlify.app/',
            linkGithub: 'https://github.com/ritesh-2124/Himalaya-clone',
            linkBlog:
                'https://medium.com/@sakshirai727/cloning-of-the-himalaya-website-5dff1b761237',
            title: 'Himalyausa',
            desc: 'Himalyausa.com is a leading provider of herbal and beauty products worldwide, offering ordering services through localized websites.',
            img: 'himalya.png',
        },
        {
            id: '2',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://gymshark-team-shark.vercel.app/',
            linkGithub: 'https://github.com/Aniket-Pilankar/Gymshark_FRONTEND_Unit4',
            linkBlog:
                'https://medium.com/@deeptange/how-we-build-a-clone-of-the-gymshark-com-website-f9ea841b45db',
            title: 'GymShark',
            desc: 'GymShark is a U.S. website for Sportswear for men and women. You an find everytype of sports wear at this website.',
            img: 'gymshark.jpg',
        },
        {
            id: '1',
            icon: 'https://cdn.shopify.com/s/files/1/0263/9511/5591/files/About-himalaya.png?v=1609989932',
            linkSite: 'https://himalayacwproject.netlify.app/',
            linkGithub: 'https://github.com/ritesh-2124/Himalaya-clone',
            linkBlog:
                'https://medium.com/@sakshirai727/cloning-of-the-himalaya-website-5dff1b761237',
            title: 'Himalyausa',
            desc: 'Himalyausa.com is a leading provider of herbal and beauty products worldwide, offering ordering services through localized websites.',
            img: 'himalya.png',
        },
        {
            id: '2',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://gymshark-team-shark.vercel.app/',
            linkGithub: 'https://github.com/Aniket-Pilankar/Gymshark_FRONTEND_Unit4',
            linkBlog:
                'https://medium.com/@deeptange/how-we-build-a-clone-of-the-gymshark-com-website-f9ea841b45db',
            title: 'GymShark',
            desc: 'GymShark is a U.S. website for Sportswear for men and women. You an find everytype of sports wear at this website.',
            img: 'gymshark.jpg',
        }
    ];

    return (
        <div className="Project" id="Project">
            <br />

            <h1>My Projects</h1>
            <hr
                style={{
                    width: 180,
                    marginTop: '-18px',
                    height: 4,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Blog</button>
                                        </a>
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 10 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
